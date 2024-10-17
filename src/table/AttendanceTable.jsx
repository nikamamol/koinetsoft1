import React, { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import axios from 'axios';
import baseUrl from '../constant/ConstantApi';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Unauthorised from "../assets/401Unauthorised.png"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AttendanceTable = () => {
  const navigate = useNavigate(); // Use navigate for redirecting after logout
  const [loginData, setLoginData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    fromDate: '',
    toDate: '',
    userId: ''
  });

  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const response = await axios.get(`${baseUrl}user/getdailylogins`);
        const flattenedLoginData = [];
        let serialNumber = 1;

        response.data.users.forEach((user) => {
          const loginTimes = user.loginTimes;
          const logoutTimes = user.logoutTimes;

          if (loginTimes.length > 0) {
            for (let i = 0; i < loginTimes.length; i++) {
              const loginTime = new Date(loginTimes[i].timestamp);
              const logoutTime = i < logoutTimes.length ? new Date(logoutTimes[i]?.timestamp) : null;

              const inTime = loginTime.toLocaleTimeString();

              let totalWorkHours = 'N/A';
              let totalWorkHoursNum = 0;

              if (logoutTime && logoutTime > loginTime) {
                const hoursDiff = logoutTime - loginTime;
                const totalSeconds = Math.floor(hoursDiff / 1000);
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                totalWorkHoursNum = hours + minutes / 60;
                totalWorkHours = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
              }

              let status = 'Absent ❌';
              let statusColor = '#FFCCCB';
              if (totalWorkHoursNum >= 10) {
                status = 'Good Job 👍';
                statusColor = '#77CDFF';
              } else if (totalWorkHoursNum >= 9) {
                status = 'Full-day';
                statusColor = '#FFFFE0';
              } else if (totalWorkHoursNum >= 5) {
                status = 'Half-day';
                statusColor = '#FFD700';
              }

              flattenedLoginData.push({
                serialNumber,
                username: user.username,
                date: loginTime.toLocaleDateString(),
                inTime,
                logoutDate: logoutTime ? logoutTime.toLocaleDateString() : 'N/A',
                outTime: logoutTime ? logoutTime.toLocaleTimeString() : 'N/A',
                totalWorkHours,
                status,
                statusColor,
                comments: '',
                loginTime,
                userId: user._id // Capture user ID for automatic logout
              });

              serialNumber++;
            }
          }
        });

        const sortedData = flattenedLoginData.sort((a, b) => {
          return new Date(b.loginTime) - new Date(a.loginTime);
        });

        setLoginData(sortedData);
        setFilteredData(sortedData);
      } catch (error) {
        toast.error("Error fetching login data");
      }
    };

    fetchLoginData();
  }, []);

  // Set up automatic logout after 12 hours
  useEffect(() => {
    const checkForAutoLogout = () => {
      loginData.forEach((entry) => {
        const loginTime = new Date(entry.loginTime);
        const currentTime = new Date();
        const timeDifference = currentTime - loginTime;

        // If the user hasn't logged out and 12 hours have passed
        if (!entry.outTime && timeDifference >= 12 * 60 * 60 * 1000) {
          handleLogout(entry.userId); // Auto logout the user
        }
      });
    };

    const interval = setInterval(checkForAutoLogout, 60000); // Check every minute
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [loginData]);

  const handleLogout = async (userId) => {
    try {
      await axios.post(`${baseUrl}user/logout`, { userId });

      localStorage.removeItem('authToken');
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      localStorage.removeItem('timer');

      navigate('/'); // Navigate to the login page
    } catch (error) {
      console.error('Logout error:', error);
      alert('Error logging out. Please try again.');
    }
  };
  // Define columns for the MaterialReactTable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'S.No',
        size: 50,
      },
      {
        accessorKey: 'username',
        header: 'Full Name',
        size: 200,
      },
      {
        accessorKey: 'date',
        header: 'Log-in Date',
        size: 150,
      },
      {
        accessorKey: 'inTime',
        header: 'In Time',
        size: 150,
      },
      {
        accessorKey: 'logoutDate', // Changed to logoutDate
        header: 'Log-out Date', // Updated header for logout date
        size: 150,
      },
      {
        accessorKey: 'outTime',
        header: 'Out Time',
        size: 150,
      },
      {
        accessorKey: 'totalWorkHours',
        header: 'Total Hrs',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 100,
        Cell: ({ cell }) => (
          <div style={{
            backgroundColor: cell.row.original.statusColor,
            textAlign: 'center',
            padding: '2px',
            borderRadius: '10px'
          }}>
            {cell.getValue()}
          </div>
        ),
      },
      // Uncomment if comments functionality is needed
      // {
      //   accessorKey: 'comments',
      //   header: 'Comments',
      //   size: 200,
      //   Cell: ({ cell, row }) => {
      //     const index = row.index;
      //     return (
      //       <div className='d-flex gap-1'>
      //         <textarea
      //           type="text"
      //           value={cell.getValue()}
      //           onChange={(e) => handleCommentChange(index, e.target.value)}
      //           style={{ width: '100%', height: "25px", border: "0.5px solid #243642" }}
      //         />
      //         <CheckCircleIcon style={{ cursor: 'pointer' }} onClick={() => handleSaveComments(index)} />
      //       </div>
      //     );
      //   },
      // },
    ],
    [loginData], // Add loginData to the dependencies to keep it updated
  );

  // Create the table using MaterialReactTable hook
  const table = useMaterialReactTable({
    columns,
    data: filteredData, // Use filtered data for table rendering
  });

  return (
    <>
      {userType === "admin" || userType === "hr" || userType === "oxmanager" ? <MaterialReactTable table={table} /> : <>
        <div className='text-center mt-2 '>
          <img src={Unauthorised} alt="unauthorised" width={400} height={300} />
          <p className='text-danger'>You do not have permission to view this content.</p>
        </div>
      </>

      }

    </>
  );
};

export default AttendanceTable;

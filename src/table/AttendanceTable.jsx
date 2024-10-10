import React, { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import axios from 'axios';
import baseUrl from '../constant/ConstantApi';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { ToastContainer, toast } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const AttendanceTable = () => {
  const [loginData, setLoginData] = useState([]);

  // Fetch data from the login API on component mount
  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const response = await axios.get(`${baseUrl}user/getdailylogins`);
        const flattenedLoginData = []; // Array to hold flattened data
        let serialNumber = 1; // Initialize the serial number

        // Flatten the login data
        response.data.users.forEach((user) => {
          const loginTimes = user.loginTimes;
          const logoutTimes = user.logoutTimes;

          if (loginTimes.length > 0) {
            for (let i = 0; i < loginTimes.length; i++) {
              const loginTime = new Date(loginTimes[i].timestamp);
              const inTime = loginTime.toLocaleTimeString();
              const logoutTime = (i < logoutTimes.length) 
                ? new Date(logoutTimes[i].timestamp) 
                : null;

              let totalWorkHours = 'N/A';
              let totalWorkHoursNum = 0;
              if (logoutTime) {
                const hoursDiff = (logoutTime - loginTime);
                if (hoursDiff >= 0) {
                  const totalSeconds = Math.floor(hoursDiff / 1000);
                  const hours = Math.floor(totalSeconds / 3600);
                  const minutes = Math.floor((totalSeconds % 3600) / 60);
                  totalWorkHoursNum = hours + minutes / 60;
                  totalWorkHours = `${hours.toString().padStart(2, '0')}:${minutes
                    .toString()
                    .padStart(2, '0')}:00`;
                }
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
                outTime: logoutTime ? logoutTime.toLocaleTimeString() : 'N/A',
                totalWorkHours,
                status,
                statusColor,
                comments: '', // Placeholder for comments
              });

              serialNumber++;
            }
          } else {
            flattenedLoginData.push({
              serialNumber,
              username: user.username,
              date: 'N/A',
              inTime: 'N/A',
              outTime: 'N/A',
              totalWorkHours: 'N/A',
              status: 'Inactive',
              statusColor: '#D3D3D3',
              comments: 'No login data available',
            });
            serialNumber++;
          }
        });

        setLoginData(flattenedLoginData); // Update state with flattened data
      } catch (error) {
        console.error('Error fetching login data', error);
        toast.error("Error fetching login data. Please try again."); // Notify user
      }
    };

    fetchLoginData(); // Call the function to fetch login data
  }, []);

  const handleCommentChange = (index, newComment) => {
    const updatedData = [...loginData];
    updatedData[index].comments = newComment;
    setLoginData(updatedData);
  };

  const handleSaveComments = async (index) => {
    const updatedComment = loginData[index].comments;
    try {
      await axios.post(`${baseUrl}user/saveComment`, {
        userId: loginData[index].username,
        comment: updatedComment,
      });
      toast.success(`Comment saved for ${loginData[index].username}`); // Notify user
    } catch (error) {
      toast.error("Error saving comment. Please try again."); // Notify user
      console.error("Error saving comment", error);
    }
  };

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
        header: 'Date',
        size: 150,
      },
      {
        accessorKey: 'inTime',
        header: 'In Time',
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
      {
        accessorKey: 'comments',
        header: 'Comments',
        size: 200,
        Cell: ({ cell, row }) => {
          const index = row.index;
          return (
            <div className='d-flex gap-1'>
              <textarea
                type="text"
                value={cell.getValue()}
                onChange={(e) => handleCommentChange(index, e.target.value)}
                style={{ width: '100%', height: "25px", border: "0.5px solid #243642" }}
              />
              <CheckCircleIcon style={{ cursor: 'pointer' }} onClick={() => handleSaveComments(index)} />
            </div>
          );
        },
      },
    ],
    [loginData], // Add loginData to the dependencies to keep it updated
  );

  const table = useMaterialReactTable({
    columns,
    data: loginData,
  });

  return (
    <>
      <MaterialReactTable table={table} />
      <ToastContainer /> {/* Toast container for notifications */}
    </>
  );
};

export default AttendanceTable;

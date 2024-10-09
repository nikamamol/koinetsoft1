import React, { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import axios from 'axios';
import baseUrl from '../constant/ConstantApi';

const AttendanceTable = () => {
  const [loginData, setLoginData] = useState([]);

  // Fetch data from the login API on component mount
  useEffect(() => {
    const fetchLoginData = async () => {
      try {
        const response = await axios.get(`${baseUrl}user/getdailylogins`); // Adjust the URL to your API endpoint
        const loginUsers = response.data.users.map((user, index) => ({
          serialNumber: index + 1,
          name: {
            firstName: user.username, // Assuming 'username' field holds the full name
            lastName: '', // Add a lastName field if necessary
          },
          date: new Date(user.loginTimes[0].timestamp).toLocaleDateString(), // Display the login date
          inTime: new Date(user.loginTimes[0].timestamp).toLocaleTimeString(), // Display the login time
          outTime: '-', // Out time is not available in the current API
          status: 'Present', // Default status, adjust logic as needed
          comments: '', // Any comments
        }));
        setLoginData(loginUsers);
      } catch (error) {
        console.error('Error fetching login data', error);
      }
    };

    fetchLoginData();
  }, []);

  // Memoize the columns definition
  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'S.No',
        size: 50,
      },
      {
        accessorKey: 'name',
        header: 'Full Name',
        size: 200,
        Cell: ({ row }) => `${row.original.name.firstName} ${row.original.name.lastName}`,
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
        accessorKey: 'status',
        header: 'Status',
        size: 150,
      },
      {
        accessorKey: 'comments',
        header: 'Comments',
        size: 200,
      },
    ],
    [],
  );

  // Initialize the table using the hook
  const table = useMaterialReactTable({
    columns,
    data: loginData, // Use the login data fetched from the API
  });

  return <MaterialReactTable table={table} />;
};

export default AttendanceTable;



// import React, { useEffect, useMemo, useState } from 'react';
// import {
//   MaterialReactTable,
//   useMaterialReactTable,
// } from 'material-react-table';
// import axios from 'axios'; // Ensure you have axios installed

// const AttendanceTable = () => {
//   const [data, setData] = useState([]); // State to hold the fetched user data

//   // Fetch all users from the API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/user/getallregisterusers'); // Update the URL as necessary
//         const usersWithAttendanceData = response.data.users.map((user, index) => ({
//           serialNumber: index + 1, // Serial number for the row
//           name: {
//             firstName: user.username.split(' ')[0], // Assuming username is in "First Last" format
//             lastName: user.username.split(' ')[1],
//           },
//           date: '2024-07-17', // Placeholder for date; you may need to adjust this
//           inTime: '09:00 AM', // Placeholder for inTime; adjust as necessary
//           outTime: '05:00 PM', // Placeholder for outTime; adjust as necessary
//           status: 'Present', // Placeholder for status; adjust as necessary
//           comments: 'On time', // Placeholder for comments; adjust as necessary
//         }));
//         setData(usersWithAttendanceData);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Memoize the columns definition
//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: 'serialNumber',
//         header: 'S.No',
//         size: 50,
//       },
//       {
//         accessorKey: 'name', // Access the whole name object
//         header: 'Full Name',
//         size: 200,
//         Cell: ({ row }) => `${row.original.name.firstName} ${row.original.name.lastName}`,
//       },
//       {
//         accessorKey: 'date',
//         header: 'Date',
//         size: 150,
//       },
//       {
//         accessorKey: 'inTime',
//         header: 'In Time',
//         size: 150,
//       },
//       {
//         accessorKey: 'outTime',
//         header: 'Out Time',
//         size: 150,
//       },
//       {
//         accessorKey: 'status',
//         header: 'Status',
//         size: 150,
//       },
//       {
//         accessorKey: 'comments',
//         header: 'Comments',
//         size: 200,
//       },
//     ],
//     [],
//   );

//   // Initialize the table using the hook
//   const table = useMaterialReactTable({
//     columns,
//     data,
//   });

//   return <MaterialReactTable table={table} />;
// };

// export default AttendanceTable;

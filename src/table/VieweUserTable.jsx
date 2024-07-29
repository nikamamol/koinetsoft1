import React, { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import axios from 'axios';

const VieweUserTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user/getallusers');
        console.log('API Response:', response.data); // Log the response data
    
        const users = response.data.users; // Adjust based on actual response structure
    
        if (Array.isArray(users)) {
          const transformedData = users.map((user, index) => ({
            serialNumber: index + 1,
            name: {
              firstName: user.fullname.split(' ')[0],
              lastName: user.fullname.split(' ').slice(1).join(' ') || '',
            },
            address: '', // Not available in API response
            city: '', // Not available in API response
            state: '', // Not available in API response
            mobileNumber: user.mobile,
            email: user.email,
            vendor: 'Koinet Media', 
            designation: user.designation,
            supervisor: user.supervisor,
            profileStatus: user.profileStatus === 'completed' ? 'Completed' : (user.profileStatus === 'pending' ? 'Pending' : 'Not Added'),
            status: user.status === 'active' ? 'Active' : 'Not Mentioned',
          }));
          setData(transformedData);
        } else {
          console.error('API response is not an array:', users);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    

    fetchData();
  }, []);

  // Memoize the columns definition
  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'S.No',
        size: 50,
        Cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: 'name', // Access the whole name object
        header: 'Full Name',
        size: 200,
        Cell: ({ row }) => `${row.original.name.firstName} ${row.original.name.lastName}`,
      },
      {
        accessorKey: 'mobileNumber',
        header: 'Mobile Number',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'vendor',
        header: 'Vendor',
        size: 150,
      },
      {
        accessorKey: 'designation',
        header: 'Designation',
        size: 150,
      },
      {
        accessorKey: 'supervisor',
        header: 'Supervisor',
        size: 150,
      },
      {
        accessorKey: 'profileStatus',
        header: 'Profile Status',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div className='d-flex'>
            <button className='btn btn-info btn-sm me-1' onClick={() => alert(`Viewing ${row.original.name.firstName}`)}>View</button>
            <button className='btn btn-primary btn-sm me-1' onClick={() => alert(`Editing ${row.original.name.firstName}`)}>Edit</button>
            <button className="btn btn-danger btn-sm me-1" onClick={() => alert(`Deleting ${row.original.name.firstName}`)}>Delete</button>
          </div>
        ),
        size: 150,
      },
    ],
    [],
  );

  // Initialize the table using the hook
  const table = useMaterialReactTable({
    columns,
    data,
  });

  return <MaterialReactTable table={table} />;
};

export default VieweUserTable;

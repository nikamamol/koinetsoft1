import React, { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const VieweUserTable = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://koinetsoft-backend.onrender.com/user/getallusers');
        console.log('API Response:', response.data);
        
        const users = response.data.users;
    
        if (Array.isArray(users)) {
          const transformedData = users.map((user, index) => ({
            id: user._id, // Include _id here
            serialNumber: index + 1,
            name: {
              firstName: user.fullname.split(' ')[0],
              lastName: user.fullname.split(' ').slice(1).join(' ') || '',
            },
            address: '',
            city: '',
            state: '',
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

  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'S.No',
        size: 50,
        Cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: 'name',
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
            <button 
              className='btn btn-info btn-sm me-1' 
              onClick={() => navigate(`/user/${row.original.id}`)} // Use row.original.id
            >
              View
            </button>
            <button 
              className='btn btn-primary btn-sm me-1' 
              onClick={() => alert(`Editing ${row.original.name.firstName}`)}
            >
              Edit
            </button>
            <button 
              className="btn btn-danger btn-sm me-1" 
              onClick={() => alert(`Deleting ${row.original.name.firstName}`)}
            >
              Delete
            </button>
          </div>
        ),
        size: 150,
      },
    ],
    [navigate], // Add navigate to dependencies
  );

  const table = useMaterialReactTable({
    columns,
    data,
  });

  return <MaterialReactTable table={table} />;
};

export default VieweUserTable;

import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

// updated data structure with new fields
const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
    mobileNumber: '123-456-7890',
    email: 'john.doe@example.com',
    vendor: 'Vendor A',
    designation: 'Manager',
    supervisor: 'Jane Smith',
    profileStatus: 'Active',
    status: 'Approved',
  },
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
    mobileNumber: '123-456-7890',
    email: 'john.doe@example.com',
    vendor: 'Vendor A',
    designation: 'Manager',
    supervisor: 'Jane Smith',
    profileStatus: 'Active',
    status: 'Approved',
  },
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
    mobileNumber: '123-456-7890',
    email: 'john.doe@example.com',
    vendor: 'Vendor A',
    designation: 'Manager',
    supervisor: 'Jane Smith',
    profileStatus: 'Active',
    status: 'Approved',
  },
  
  // Add other data entries as needed...
];

const VieweUserTable = () => {
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
        accessorKey: 'address',
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
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
          <div>
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

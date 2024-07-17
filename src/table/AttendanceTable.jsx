import React, { useMemo } from 'react';
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
    date: '2024-07-17',
    inTime: '09:00 AM',
    outTime: '05:00 PM',
    status: 'Present',
    comments: 'On time',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Smith',
    },
    date: '2024-07-17',
    inTime: '09:15 AM',
    outTime: '05:10 PM',
    status: 'Late',
    comments: '15 minutes late',
  },
  // Add other data entries as needed...
];

const AttendanceTable = () => {
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
    data,
  });

  return <MaterialReactTable table={table} />;
};

export default AttendanceTable;

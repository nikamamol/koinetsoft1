import React, { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

// Updated data structure with new fields
const data = [
  {
    ip: '192.168.1.1',
    user: 'John Doe',
    status: 'Block',
  },
  {
    ip: '192.168.1.2',
    user: 'Jane Smith',
    status: 'Allow',
  },
  {
    ip: '192.168.1.3',
    user: 'Alice Johnson',
    status: 'Allow',
  },
  // Add other data entries as needed...
];

const IpAddress = () => {
  // Memoize the columns definition
  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'Sr.No',
        size: 50,
        Cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: 'ip',
        header: 'IP',
        size: 150,
      },
      {
        accessorKey: 'user',
        header: 'User',
        size: 200,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 100,
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <button className='btn btn-info btn-sm me-1' onClick={() => alert(`Viewing ${row.original.user}`)}>View</button>
            <button className='btn btn-primary btn-sm me-1' onClick={() => alert(`Editing ${row.original.user}`)}>Edit</button>
            <button className="btn btn-danger btn-sm me-1" onClick={() => alert(`Deleting ${row.original.user}`)}>Delete</button>
          </div>
        ),
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

export default IpAddress;

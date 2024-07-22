import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

// Updated data structure with new fields
const data = [
  {
    companyName: 'XYZ Inc',
    pocName: 'John Doe',
    mobile: '1234567890',
    email: 'john.doe@xyz.com',
    city: 'New York',
  },
  {
    companyName: 'ABC Corp',
    pocName: 'Jane Smith',
    mobile: '0987654321',
    email: 'jane.smith@abc.com',
    city: 'Los Angeles',
  },
  {
    companyName: 'DEF Ltd',
    pocName: 'Alice Johnson',
    mobile: '5551234567',
    email: 'alice.johnson@def.com',
    city: 'Chicago',
  },
  // Add other data entries as needed...
];

const BillingViewClient = () => {
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
        accessorKey: 'companyName',
        header: 'Company Name',
        size: 200,
      },
      {
        accessorKey: 'pocName',
        header: 'POC ',
        size: 150,
      },
      {
        accessorKey: 'mobile',
        header: 'Mobile',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <button className='btn btn-info btn-sm me-1' onClick={() => alert(`Viewing ${row.original.companyName}`)}>View</button>
            <button className='btn btn-primary btn-sm me-1' onClick={() => alert(`Editing ${row.original.companyName}`)}>Edit</button>
            <button className="btn btn-danger btn-sm me-1" onClick={() => alert(`Deleting ${row.original.companyName}`)}>Delete</button>
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

export default BillingViewClient;

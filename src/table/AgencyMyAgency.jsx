import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

// updated data structure with new fields
const data = [
  {
    serialNumber: 1,
    agencyName: 'Agency A',
    companyType: 'Enterprise',
    email: 'agencyA@example.com',
    phoneNumber: '123-456-7890',
  },
  {
    serialNumber: 2,
    agencyName: 'Agency B',
    companyType: 'Agency',
    email: 'agencyB@example.com',
    phoneNumber: '987-654-3210',
  },
  {
    serialNumber: 3,
    agencyName: 'Agency C',
    companyType: 'Enterprise',
    email: 'agencyC@example.com',
    phoneNumber: '456-789-0123',
  },
  // Add other data entries as needed...
];

const AgencyMyAgency = () => {
  // Memoize the columns definition
  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'Sr. Number',
        size: 50,
      },
      {
        accessorKey: 'agencyName',
        header: 'Agency Name',
        size: 200,
      },
      {
        accessorKey: 'companyType',
        header: 'Company Type',
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        size: 200,
      },
      {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
        size: 150,
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <button
              className='btn btn-info btn-sm me-1'
              onClick={() => alert(`Viewing ${row.original.agencyName}`)}
            >
              View
            </button>
            <button
              className='btn btn-primary btn-sm me-1'
              onClick={() => alert(`Editing ${row.original.agencyName}`)}
            >
              Edit
            </button>
            <button
              className='btn btn-danger btn-sm me-1'
              onClick={() => alert(`Deleting ${row.original.agencyName}`)}
            >
              Delete
            </button>
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

export default AgencyMyAgency;

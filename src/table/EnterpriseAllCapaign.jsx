import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

// updated data structure with the 'name' field
const data = [
  {
    name: 'Campaign One',
    code: 'C001',
    enterpriseAgency: 'Enterprise A',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    campaignStatus: 'Ongoing',
  },
  {
    name: 'Campaign Two',
    code: 'C002',
    enterpriseAgency: 'Agency B',
    startDate: '2023-02-01',
    endDate: '2023-11-30',
    campaignStatus: 'Paused',
  },
  {
    name: 'Campaign Three',
    code: 'C003',
    enterpriseAgency: 'Enterprise C',
    startDate: '2023-03-01',
    endDate: '2023-10-31',
    campaignStatus: 'Completed',
  },
  // Add other data entries as needed...
];

const EnterpriseAllCampaign = () => {
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
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'code',
        header: 'Code',
        size: 100,
      },
      {
        accessorKey: 'enterpriseAgency',
        header: 'Enterprise/Agency',
        size: 200,
      },
      {
        accessorKey: 'startDate',
        header: 'Start Date',
        size: 150,
      },
      {
        accessorKey: 'endDate',
        header: 'End Date',
        size: 150,
      },
      {
        accessorKey: 'campaignStatus',
        header: 'Campaign Status',
        size: 150,
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <button className='btn btn-info btn-sm me-1' onClick={() => alert(`Viewing ${row.original.code}`)}>View</button>
            <button className='btn btn-primary btn-sm me-1' onClick={() => alert(`Editing ${row.original.code}`)}>Edit</button>
            <button className="btn btn-danger btn-sm me-1" onClick={() => alert(`Deleting ${row.original.code}`)}>Delete</button>
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

export default EnterpriseAllCampaign;

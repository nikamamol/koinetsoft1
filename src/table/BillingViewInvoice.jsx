import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

// Updated data structure with new fields
const data = [
  {
    invoiceDate: '2024-07-01',
    vendorName: 'XYZ Inc',
    amount: 1000,
    totalLead: 50,
  },
  {
    invoiceDate: '2024-07-02',
    vendorName: 'ABC Corp',
    amount: 2000,
    totalLead: 60,
  },
  {
    invoiceDate: '2024-07-03',
    vendorName: 'DEF Ltd',
    amount: 1500,
    totalLead: 70,
  },
  // Add other data entries as needed...
];

const BillingViewInvoice = () => {
  // Memoize the columns definition
  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'Sr.no',
        size: 50,
        Cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: 'invoiceDate',
        header: 'Invoice Date',
        size: 150,
      },
      {
        accessorKey: 'vendorName',
        header: 'Vendor Name',
        size: 200,
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
        size: 100,
      },
      {
        accessorKey: 'totalLead',
        header: 'Total Lead',
        size: 100,
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div>
            <button className='btn btn-info btn-sm me-1' onClick={() => alert(`Viewing ${row.original.vendorName}`)}>View</button>
            <button className='btn btn-primary btn-sm me-1' onClick={() => alert(`Editing ${row.original.vendorName}`)}>Edit</button>
            <button className="btn btn-danger btn-sm me-1" onClick={() => alert(`Deleting ${row.original.vendorName}`)}>Delete</button>
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

export default BillingViewInvoice;

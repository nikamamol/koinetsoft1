// BillingViewInvoice.js
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import hooks from React-Redux
import { fetchInvoices } from '../redux/reducer/billing/GetInvoice'; // Import your slice's async thunk
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';

const BillingViewInvoice = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch

  const invoiceData = useSelector((state) => state.invoices.invoices); // Get invoices from Redux store
  const invoiceStatus = useSelector((state) => state.invoices.status);
  const error = useSelector((state) => state.invoices.error);

  useEffect(() => {
    if (invoiceStatus === 'idle') {
      dispatch(fetchInvoices()); // Fetch invoices on component mount
    }
  }, [invoiceStatus, dispatch]);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'Sr.no',
        size: 50,
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
        header: 'Amount ($)',
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
            <RemoveRedEyeIcon
              style={{ cursor: 'pointer' }}
              onClick={() => navigate(`/billing/ViewInvoiceById/${row.original.actions}`)} // Navigate to invoice details
            />
          </div>
        ),
        size: 200,
      },
    ],
    [navigate]
  );

  const table = useMaterialReactTable({
    columns,
    data: invoiceData,
  });

  if (invoiceStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <MaterialReactTable table={table} />;
};

export default BillingViewInvoice;

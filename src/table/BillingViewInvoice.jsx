import { useMemo, useEffect, useState } from 'react';
import axios from 'axios'; // For API requests
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const BillingViewInvoice = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('http://localhost:4000/user/getInvoices');
        const { data } = response.data;

        const transformedData = data.map((invoice, index) => {
          const totalLead = invoice.items.reduce((sum, item) => {
            const leadCount = Number(item.qty) || 0;
            return sum + leadCount;
          }, 0);

          return {
            serialNumber: index + 1,
            invoiceDate: new Date(invoice.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }),
            vendorName: invoice.clientName,
            amount: invoice.grandTotal,
            totalLead: totalLead,
            actions: invoice._id,
          };
        });

        setInvoiceData(transformedData);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };

    fetchInvoices();
  }, []);

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
    [navigate] // Add navigate to dependencies
  );

  const table = useMaterialReactTable({
    columns,
    data: invoiceData,
  });

  return <MaterialReactTable table={table} />;
};

export default BillingViewInvoice;

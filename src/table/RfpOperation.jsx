import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import { IconButton, Tooltip, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'; // If using React Router for navigation
import { fetchFiles } from '../redux/reducer/rpf/operationcsvupload'; // Adjust import path as needed

const RfpActive = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For redirection
  const { files, status, error } = useSelector((state) => state.files);

  const [checkboxes, setCheckboxes] = useState({});
  const userType = localStorage.getItem('role');
  const allowedRoles = ['oxmanager']; // Specify allowed roles


  useEffect(() => {
    // Fetch files if the user is authorized
    dispatch(fetchFiles());

  }, [dispatch, navigate]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
  };

  const handleDownload = (fileId, filename) => {
    // Implement download logic
    alert(`Downloading ${filename} (ID: ${fileId})`);
  };

  const handleDelete = (fileId) => {
    // Implement delete logic
    alert(`Deleting file with ID: ${fileId}`);
  };

  const handleCheckboxChange = (fileId, status, checked) => {
    setCheckboxes((prev) => ({
      ...prev,
      [fileId]: checked,
    }));
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: '_id', // Use correct key for the unique identifier
        header: 'S.No',
        size: 50,
        Cell: ({ row }) => row.index + 1,
      },
      {
        accessorKey: 'originalname',
        header: 'Filename',
        size: 200,
      },
      {
        accessorKey: 'campaignName',
        header: 'Campaign Name',
        size: 200,
      },
      {
        accessorKey: 'campaignCode',
        header: 'Campaign Code',
        size: 150,
      },
      {
        accessorKey: 'createdAt',
        header: 'Date',
        size: 150,
        Cell: ({ cell }) => formatDate(cell.getValue()),
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 200,
        Cell: ({ row }) => {
          const status = row.original.status;
          return (
            <div>
              <Checkbox
                color="success"
                checked={status === "Done"}
                onChange={(e) => handleCheckboxChange(row.original._id, status, e.target.checked)}
              />
              {status}
            </div>
          );
        },
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        size: 150,
        Cell: ({ row }) => (
          <div className="d-flex gap-3">
            <Tooltip title="Delete File">
              <IconButton onClick={() => handleDelete(row.original._id)}>
                <DeleteIcon
                  style={{ cursor: 'pointer', color: 'red', width: '30px', height: '30px' }}
                />
              </IconButton>
            </Tooltip>
          </div>
        ),
      },
    ],
    [checkboxes]
  );
  if (!allowedRoles.includes(userType)) {
    return <p className='text-danger'>You do not have permission to view this data.</p>;
  }
  return (
    <div>

      {status === 'loading' && <p>Loading files...</p>}
      {status === 'succeeded' && files.length > 0 ? (
        <MaterialReactTable
          columns={columns}
          data={files}
        // other props if needed
        />
      ) : status === 'succeeded' && files.length === 0 ? (
        <p>No files available</p>
      ) : (
        <p></p>
      )}
      
    </div>
  );
};

export default RfpActive;

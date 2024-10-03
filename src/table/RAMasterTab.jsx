import React, { useEffect, useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { IconButton, Tooltip, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllraMasterFile, downloadFileByRaMaster, deleteRaMasterFile } from '../redux/reducer/rpf/ramasterdataget'; // Adjust the import path

const RAMasterTab = () => {
  const dispatch = useDispatch();
  const { files = [], loading, error } = useSelector((state) => state.raFileUpload || {});

  useEffect(() => {
    dispatch(fetchAllraMasterFile());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: '_id',
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
        size: 150,
        Cell: ({ cell }) => {
          const status = cell.getValue();
          return <Checkbox color="success" checked={status === 'Done'} />;
        },
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        size: 150,
        Cell: ({ row }) => (
          <div className="d-flex gap-3">
            <Tooltip title="Download File">
              <IconButton onClick={() => handleDownload(row.original)}>
                <DownloadIcon
                  style={{ cursor: 'pointer', color: 'blue', width: '30px', height: '30px' }}
                />
              </IconButton>
            </Tooltip>
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
    []
  );

  // Handle file download
  const handleDownload = (file) => {
    const { _id, originalname } = file;
    dispatch(downloadFileByRaMaster({ fileId: _id, filename: originalname }));
  };

  // Handle file deletion
  const handleDelete = (fileId) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      dispatch(deleteRaMasterFile(fileId));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;

  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={files}
        enableColumnResizing
        enableStickyHeader
      />
    </div>
  );
};

export default RAMasterTab;

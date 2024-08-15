import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchFileData, downloadFile } from '../redux/reducer/rpf/getcsvfiledata';
import { Checkbox } from '@mui/material';

// Utility function to check if a date is today
const isToday = (dateString) => {
  const today = new Date();
  const date = new Date(dateString);
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const RfpReceived = () => {
  const dispatch = useDispatch();
  const { files, error, status } = useSelector((state) => ({
    files: state.fileData.files,
    error: state.fileData.error,
    status: state.fileData.status,
  }));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFileData());
    }
  }, [status, dispatch]);

  const handleDownload = (fileId, filename) => {
    dispatch(downloadFile({ fileId, filename }))
      .unwrap()
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  };

  // Filter files to include only those uploaded today
  const filteredFiles = useMemo(() => {
    return files.filter(file =>
      isToday(file.createdAt) && file.status.some(statusItem => statusItem.userType === 'Employee')
    );
  }, [files]);

  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'S.No',
        size: 50,
      },
      {
        accessorKey: 'filename',
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
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 200,
        Cell: ({ row }) => (
          <div>
            {row.original.status
              .filter(statusItem => statusItem.userType === 'Employee' && statusItem.checked)
              .map((statusItem) => (
                <p key={statusItem._id}>
                  <Checkbox
                    defaultChecked
                    color="secondary"
                    disabled
                    sx={{
                      color: 'secondary.main',
                      '&.Mui-checked': {
                        color: 'secondary.main',
                      },
                    }}
                  />
                  {statusItem.userType}
                </p>
              ))}
          </div>
        ),
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div className="d-flex gap-3">
            <CloudDownloadIcon
              style={{ cursor: 'pointer', color: 'dark', width: '30px', height: '30px' }}
              onClick={() => handleDownload(row.original.fileId, row.original.filename)}
            />
            <EditIcon
              style={{ cursor: 'pointer', color: 'blue', width: '30px', height: '30px' }}
              onClick={() => alert(`Editing ${row.original.filename}`)}
            />
            <DeleteIcon
              style={{ cursor: 'pointer', color: 'red', width: '30px', height: '30px' }}
              onClick={() => alert(`Deleting ${row.original.filename}`)}
            />
          </div>
        ),
        size: 200,
      },
    ],
    []
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return <MaterialReactTable columns={columns} data={filteredFiles} />;
};

export default RfpReceived;

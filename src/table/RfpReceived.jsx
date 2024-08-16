import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchFileData, downloadFile, deleteFile } from '../redux/reducer/rpf/getcsvfiledata';
import { Checkbox, IconButton, Tooltip } from '@mui/material';

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
  const { files: initialFiles, error, status } = useSelector((state) => ({
    files: state.fileData.files,
    error: state.fileData.error,
    status: state.fileData.status,
  }));

  const [files, setFiles] = useState(initialFiles);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFileData());
    }
  }, [status, dispatch]);

  useEffect(() => {
    setFiles(initialFiles);
  }, [initialFiles]);

  const handleDownload = (fileId, filename) => {
    dispatch(downloadFile({ fileId, filename }))
      .unwrap()
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  };

  const handleDelete = (fileId) => {
    dispatch(deleteFile(fileId))
      .unwrap()
      .then(() => {
        setFiles((prevFiles) => prevFiles.filter(file => file.fileId !== fileId));
        console.log('File deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting file:', error);
      });
  };

  const filteredFiles = useMemo(() => {
    return files.filter(file =>
      isToday(file.createdAt) && file.status.some(statusItem => statusItem.userType === 'Employee')
    );
  }, [files]);

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
                  RA
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
            <Tooltip title="Download File">
              <IconButton>
                <CloudDownloadIcon
                  style={{ cursor: 'pointer', color: 'black', width: '30px', height: '30px' }}
                  onClick={() => handleDownload(row.original.fileId, row.original.filename)}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete File">
              <IconButton>
                <DeleteIcon
                  style={{ cursor: 'pointer', color: 'red', width: '30px', height: '30px' }}
                  onClick={() => handleDelete(row.original.fileId)}
                />
              </IconButton>
            </Tooltip>
          </div>
        ),
        size: 200,
      },
    ],
    [handleDownload, handleDelete]
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return <MaterialReactTable columns={columns} data={filteredFiles} />;
};

export default RfpReceived;

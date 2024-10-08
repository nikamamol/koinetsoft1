import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchFileData, downloadFile, deleteFile } from '../redux/reducer/rpf/getcsvfiledata';
import { Checkbox, IconButton, Tooltip } from '@mui/material';
import Hourglass from "../assets/Hourglass.gif";


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

  const userRole = localStorage.getItem('role'); // Assuming role is stored in localStorage

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
    if (userRole !== 'user') {
      return [];
    }
    return files.filter(file =>
      isToday(file.createdAt) && file.status.some(statusItem => statusItem.userType === 'Employee')
    );
  }, [files, userRole]);

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
        size: 150,
      },
    ],
    [handleDownload, handleDelete]
  );

  if (userRole !== 'user') {
    return <div className='text-center'>
      <h1 className='bg-danger p-2 text-light'>You are not authorized to view this page.</h1>
    </div>;
  }

  if (status === "loading") return (
    <>
        <div className='text-center mt-5'><img src={Hourglass} alt="" height={40} width={40} /></div>
    </>
)
  if (status === 'failed') return <div>Error: {error}</div>;

  return <MaterialReactTable columns={columns} data={filteredFiles} />;
};

export default RfpReceived;

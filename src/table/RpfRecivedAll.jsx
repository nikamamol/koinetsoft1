import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import { downloadFile, fetchFileData, fetchFileDataAll } from '../redux/reducer/rpf/getcsvfiledata';
import { pink } from '@mui/material/colors';
import { IconButton, Tooltip } from '@mui/material';

const RfpReceivedAll = () => {
  const dispatch = useDispatch();
  const { files, status, error } = useSelector((state) => state.fileData);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFileDataAll());
    }
  }, [status, dispatch]);

  const handleDownload = (fileId, filename) => {
    dispatch(downloadFile({ fileId, filename }))
      .unwrap()
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'serialNumber',
        header: 'S.No',
        size: 50,
        Cell: ({ row }) => row.index + 1,
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
        size: 200,
      },
      {
        accessorKey: 'createdAt',
        header: 'Date',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 400,
        Cell: ({ row }) => (
          <div className='d-flex gap-2 '>
            {row.original.status.length > 0 ? (
              row.original.status.map((statusItem) => (
                <p key={statusItem._id}>
                  <Checkbox
                    defaultChecked={statusItem.checked}
                    checked={statusItem.checked}
                    disabled
                    sx={{
                      color: pink[800],
                      '&.Mui-checked': {
                        color: pink[600],
                      },
                    }}
                  />
                  {/* <br /> */}
                  {statusItem.userType === "Employee" ? "RA" : statusItem.userType}
                </p>
              ))
            ) : (
              <p>No status available</p>
            )}
          </div>
        ),
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        size: 50,
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

            {/* <EditIcon
              style={{ cursor: 'pointer', color: 'blue', width: '30px', height: '30px' }}
              onClick={() => alert(`Editing ${row.original.filename}`)}
            />
            <DeleteIcon
              style={{ cursor: 'pointer', color: 'red', width: '30px', height: '30px' }}
              onClick={() => alert(`Deleting ${row.original.filename}`)}
            /> */}
          </div>
        ),
      },
    ],
    [handleDownload]
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return <MaterialReactTable columns={columns} data={files} />;
};

export default RfpReceivedAll;

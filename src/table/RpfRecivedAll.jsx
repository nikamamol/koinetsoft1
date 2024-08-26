import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Checkbox from '@mui/material/Checkbox';
import { downloadFile, fetchFileDataAll } from '../redux/reducer/rpf/getcsvfiledata';
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
        Cell: ({ row }) => {
          const allChecked = row.original.status.every((statusItem) => statusItem.checked);

          return (
            <div className='d-flex gap-2'>
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
                    {statusItem.userType === "Employee" ? "RA" : statusItem.userType}
                  </p>
                ))
              ) : (
                <p>No status available</p>
              )}
              <Tooltip title="Download File">
                <IconButton disabled={!allChecked}>
                  <CloudDownloadIcon
                    className={allChecked ? 'enabled' : 'disabled'}
                    style={{
                      cursor: allChecked ? 'pointer' : 'not-allowed',
                      color: allChecked ? 'black' : 'secondary', // Apply 'secondary' color when disabled
                      width: '30px',
                      height: '30px'
                    }}
                    onClick={() => allChecked && handleDownload(row.original.fileId, row.original.filename)}
                  />
                </IconButton>
              </Tooltip>

            </div>
          );
        },
      },
    ],
    [handleDownload]
  );

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return <MaterialReactTable columns={columns} data={files} />;
};

export default RfpReceivedAll;

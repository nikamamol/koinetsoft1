import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchFileData, downloadFile } from '../redux/reducer/rpf/getcsvfiledata';

const RfpQualityCheck = () => {
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

  // Filter files to include only those with status entries where userType is "Quality Data" and checked is true
  const filteredFiles = useMemo(() => {
    return files.filter(file =>
      file.status.some(statusItem => statusItem.userType === 'Quality' && statusItem.checked)
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
        size: 200,
        Cell: ({ row }) => (
          <div>
            {row.original.status
              .filter(statusItem => statusItem.userType === 'Quality' && statusItem.checked)
              .map((statusItem) => (
                <p key={statusItem._id}>
                  {statusItem.userType}: Checked
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

  // Create the table instance with filtered data
  const table = useMaterialReactTable({
    columns,
    data: filteredFiles,
  });

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return <MaterialReactTable table={table} />;
};

export default RfpQualityCheck;

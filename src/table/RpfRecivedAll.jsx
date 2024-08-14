// src/components/RfpReceivedAll.js

import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchFileData, downloadFile } from '../redux/reducer/rpf/getcsvfiledata';

const RfpReceivedAll = () => {
  const dispatch = useDispatch();
  const { files, status, error } = useSelector((state) => state.fileData);

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
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div className='d-flex gap-3'>
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

  const table = useMaterialReactTable({
    columns,
    data: files,
  });

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return <MaterialReactTable table={table} />;
};

export default RfpReceivedAll;

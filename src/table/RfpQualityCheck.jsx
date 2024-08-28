import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { fetchFileData, readFile, updateFileStatus, fetchFileDataAll } from '../redux/reducer/rpf/getcsvfiledata';
import { Checkbox, IconButton, Tooltip, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';

const RfpQualityCheck = () => {
  const dispatch = useDispatch();
  const { files, error, status } = useSelector((state) => ({
    files: state.fileData.files,
    error: state.fileData.error,
    status: state.fileData.status,
  }));

  const [checkboxes, setCheckboxes] = useState({});
  const [excelData, setExcelData] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFileDataAll());
    }
  }, [status, dispatch]);

  useEffect(() => {
    const updatedCheckboxes = {};
    files.forEach(file => {
      file.status.forEach(statusItem => {
        if (statusItem.userType === 'Quality') {
          updatedCheckboxes[statusItem._id] = statusItem.checked;
        }
      });
    });
    setCheckboxes(updatedCheckboxes);
  }, [files]);

  const handleRead = (fileId) => {
    dispatch(readFile({ fileId }))
      .unwrap()
      .then(({ arrayBuffer }) => {
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
        const sheetName = workbook.SheetNames[0]; // Assumes the first sheet
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet);
        setExcelData(data);
      })
      .catch((error) => {
        console.error('Error reading file:', error);
      });
  };

  const handleCheckboxChange = (fileId, statusId, checked) => {
    dispatch(updateFileStatus({ fileId, statusId, checked }))
      .unwrap()
      .then(() => {
        setCheckboxes(prev => ({ ...prev, [statusId]: checked }));
        toast.success('Status updated successfully!');
      })
      .catch((error) => {
        toast.error('Error updating status. Please try again.');
        console.error('Error updating status:', error);
      });
  };

  const handleDownloadExcel = () => {
    if (excelData.length === 0) {
      toast.error('No data to download.');
      return;
    }
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'data.xlsx');
  };

  const handleCellEdit = (rowIndex, columnId, value) => {
    setExcelData((prev) =>
      prev.map((row, index) =>
        index === rowIndex ? { ...row, [columnId]: value } : row
      )
    );
  };

  const role = localStorage.getItem('role');

  const filteredFiles = useMemo(() => {
    if (role !== 'quality' && role !== 'admin') return [];
    return files.filter(file =>
      file.status.some(statusItem => statusItem.userType === 'Quality')
    );
  }, [files, role]);

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
        size: 100,
        Cell: ({ row }) => (
          <div>
            {row.original.status
              .filter(statusItem => statusItem.userType === 'Quality')
              .map((statusItem) => (
                <div key={statusItem._id} style={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox
                    color="success"
                    checked={checkboxes[statusItem._id] || false}
                    onChange={(e) => handleCheckboxChange(row.original.fileId, statusItem._id, e.target.checked)}
                  />
                  {statusItem.userType}
                </div>
              ))}
          </div>
        ),
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        Cell: ({ row }) => (
          <div className="d-flex gap-3">
            <Tooltip title="Read File">
              <IconButton>
                <RemoveRedEyeIcon
                  style={{ cursor: 'pointer', color: 'black', width: '30px', height: '30px' }}
                  onClick={() => handleRead(row.original.fileId)}
                />
              </IconButton>
            </Tooltip>
          </div>
        ),
        size: 200,
      },
    ],
    [handleRead, handleCheckboxChange, checkboxes]
  );

  const excelColumns = useMemo(
    () => (excelData.length > 0 ? Object.keys(excelData[0]).map(key => ({
      accessorKey: key,
      header: key,
      Cell: ({ row, column }) => (
        <TextField
          value={row.original[column.id]}
          onChange={(e) => handleCellEdit(row.index, column.id, e.target.value)}
          size="small"
          variant="outlined"
          fullWidth
        />
      ),
    })) : []),
    [excelData]
  );

  if (role !== 'quality' && role !== 'admin') {
    return <div className='text-center'>
      <h1 className='bg-danger p-2 text-light'>You are not authorized to view this page.</h1>
    </div>;
  }

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <>
      <MaterialReactTable columns={columns} data={filteredFiles} />
      <div>

        {excelData.length > 0 && (
          <>
            <Button
              variant="contained"
              color="primary"
              onClick={handleDownloadExcel}
              startIcon={<CloudDownloadIcon />}
              className="my-3"
            >
              Download Excel
            </Button>
            <MaterialReactTable
              columns={excelColumns}
              data={excelData}
            />
          </>
        )}
      </div>
    </>
  );
};

export default RfpQualityCheck;

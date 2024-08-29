import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import { fetchFileDataAll, readFile, updateFileStatus } from '../redux/reducer/rpf/getcsvfiledata';
import { Checkbox, IconButton, Tooltip } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';
import { SpreadsheetComponent, SheetDirective, SheetsDirective, ColumnsDirective, ColumnDirective, RangeDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-calendars/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-lists/styles/material.css';
import '@syncfusion/ej2-react-spreadsheet/styles/material.css';

// SpreadsheetViewer Component
const SpreadsheetViewer = ({ data }) => {
  let spreadsheetRef;

  return (
    <div style={{ width: '100%' }}>
      {data.length > 0 && (
        <SpreadsheetComponent 
          ref={(s) => (spreadsheetRef = s)} 
          allowOpen={true} 
          allowSave={true} 
          showRibbon={true}
        >
          <SheetsDirective>
            <SheetDirective>
              <RangesDirective>
                <RangeDirective dataSource={data} />
              </RangesDirective>
              <ColumnsDirective>
                {data[0].map((_, idx) => (
                  <ColumnDirective key={idx} width={120} />
                ))}
              </ColumnsDirective>
            </SheetDirective>
          </SheetsDirective>
        </SpreadsheetComponent>
      )}
    </div>
  );
};

// Main Component
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
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Including headers
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
      <SpreadsheetViewer data={excelData} />
    </>
  );
};

export default RfpQualityCheck;

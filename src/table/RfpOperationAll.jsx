import React, { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { IconButton, Tooltip, Checkbox } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles, readFile } from '../redux/reducer/rpf/operatilallfile';
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
import * as XLSX from 'xlsx';

// SpreadsheetViewer Component
const SpreadsheetViewer = ({ data }) => {
    return (
        <div style={{ width: '100%' }}>
            {data.length > 0 && (
                <SpreadsheetComponent allowOpen={true} allowSave={true} showRibbon={true}>
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

const RfpOperationAll = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // State to store Excel data and selected file info
    const [excelData, setExcelData] = useState([]);
    const [currentFileName, setCurrentFileName] = useState('');

    // Use Redux selectors to access the state
    const { files, status, error } = useSelector((state) => state.rfp);

    useEffect(() => {
        const userType = localStorage.getItem('role');
        if (userType !== 'oxmanager' && userType !== 'admin') {
            alert('Access Denied: You do not have permission to view this page.');
            navigate('/dashboard');
        } else {
            dispatch(fetchFiles()); // Dispatch the action to fetch files
        }
    }, [dispatch, navigate]);

    const handleRead = (fileId) => {
        const file = files.find(file => file._id === fileId);
        if (file) {
            setCurrentFileName(file.originalname); // Use originalname for display
        }
        dispatch(readFile({ fileId }))
            .unwrap()
            .then((response) => {
                // Ensure the response contains the file buffer
                if (response && response.buffer) {
                    const arrayBuffer = response.buffer;

                    // Convert ArrayBuffer to Uint8Array
                    const uint8Array = new Uint8Array(arrayBuffer);

                    // Read the workbook from the Uint8Array
                    const workbook = XLSX.read(uint8Array, { type: 'array' });

                    // Get the first sheet
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];

                    // Convert the sheet to JSON
                    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                    setExcelData(data);
                } else {
                    console.error('No file buffer found in the response');
                }
            })
            .catch((error) => {
                console.error('Error reading file:', error);
            });
    };


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).format(date);
    };

    const handleCheckboxChange = (fileId, status, checked) => {
        // Logic to update the file status should be added here
    };

    const columns = useMemo(
        () => [
            { accessorKey: '_id', header: 'S.No', size: 50, Cell: ({ row }) => row.index + 1 },
            { accessorKey: 'originalname', header: 'Filename', size: 200 },
            { accessorKey: 'campaignName', header: 'Campaign Name', size: 200 },
            { accessorKey: 'campaignCode', header: 'Campaign Code', size: 150 },
            { accessorKey: 'createdAt', header: 'Date', size: 150, Cell: ({ cell }) => formatDate(cell.getValue()) },
            {
                accessorKey: 'status',
                header: 'Status',
                size: 200,
                Cell: ({ row }) => (
                    <>
                        <Checkbox
                            color="success"
                            checked={row.original.status === 'Done'}
                            onChange={(e) => handleCheckboxChange(row.original._id, row.original.status, e.target.checked)}
                        />
                        {row.original.status}
                    </>
                ),
            },
            {
                accessorKey: 'actions',
                header: 'Actions',
                size: 150,
                Cell: ({ row }) => (
                    <Tooltip title="View File">
                        <IconButton onClick={() => handleRead(row.original._id)}>
                            <VisibilityIcon style={{ cursor: 'pointer', color: 'blue', width: '30px', height: '30px' }} />
                        </IconButton>
                    </Tooltip>
                ),
            },
        ],
        []
    );

    return (
        <div>
            {excelData.length === 0 ? (
                <MaterialReactTable columns={columns} data={files} />
            ) : (
                <>
                    {currentFileName && (
                        <div className='p-4 bg_color_Email my-3 fw-bold text-center'>
                            File name: {currentFileName}
                        </div>
                    )}

                    <SpreadsheetViewer data={excelData} />

                </>
            )}
        </div>
    );
};

export default RfpOperationAll;

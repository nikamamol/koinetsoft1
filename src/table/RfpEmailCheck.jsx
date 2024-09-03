import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { fetchFileDataAll, updateFileStatusEmail, readFile, updateCsvFileById } from '../redux/reducer/rpf/getcsvfiledata';
import { Checkbox, IconButton, Tooltip, Button } from '@mui/material';
import { toast } from 'react-toastify';
import * as XLSX from 'xlsx';
import { SpreadsheetComponent, SheetDirective, SheetsDirective, ColumnsDirective, ColumnDirective, RangeDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import '@syncfusion/ej2-react-spreadsheet/styles/material.css';

const SpreadsheetViewer = ({ data }) => {
    return (
        <div style={{ width: '100%' }}>
            {data.length > 0 && (
                <SpreadsheetComponent 
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

const RfpEmailCheck = () => {
    const dispatch = useDispatch();
    const { files, error, status } = useSelector((state) => ({
        files: state.fileData.files,
        error: state.fileData.error,
        status: state.fileData.status,
    }));

    const [checkboxes, setCheckboxes] = useState({});
    const [excelData, setExcelData] = useState([]);
    const [currentFileName, setCurrentFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchFileDataAll());
        }
    }, [status, dispatch]);

    useEffect(() => {
        const updatedCheckboxes = {};
        files.forEach(file => {
            file.status.forEach(statusItem => {
                if (statusItem.userType === 'Email Marketing') {
                    updatedCheckboxes[statusItem._id] = statusItem.checked;
                }
            });
        });
        setCheckboxes(updatedCheckboxes);
    }, [files]);

    const handleRead = (fileId) => {
        const file = files.find(file => file.fileId === fileId);
        if (file) {
            setCurrentFileName(file.filename);
            setSelectedFile(file);
        }
        dispatch(readFile({ fileId }))
            .unwrap()
            .then(({ arrayBuffer }) => {
                const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                setExcelData(data);
            })
            .catch((error) => {
                console.error('Error reading file:', error);
            });
    };

    const handleCheckboxChange = (fileId, statusId, checked) => {
        dispatch(updateFileStatusEmail({ fileId, statusId, checked }))
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

    const handleUpdateFile = () => {
        if (selectedFile && excelData.length > 0) {
            const worksheet = XLSX.utils.aoa_to_sheet(excelData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    
            const binaryString = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
    
            const buffer = new ArrayBuffer(binaryString.length);
            const view = new Uint8Array(buffer);
            for (let i = 0; i < binaryString.length; i++) {
                view[i] = binaryString.charCodeAt(i) & 0xFF;
            }
    
            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    
            const fileData = {
                file: new File([blob], selectedFile.filename, { type: blob.type }),
                path: selectedFile.path || ''
            };
    
            dispatch(updateCsvFileById({ fileId: selectedFile.fileId, fileData }))
                .unwrap()
                .then(() => {
                    toast.success('File updated successfully!');
                })
                .catch((error) => {
                    toast.error('Error updating file. Please try again.');
                    console.error('Error updating file:', error);
                });
        }
    };

    const role = localStorage.getItem('role');

    const filteredFiles = useMemo(() => {
        if (role !== 'email_marketing' && role !== 'admin') return [];
        return files.filter(file =>
            file.status.some(statusItem => statusItem.userType === 'Email Marketing')
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
                            .filter(statusItem => statusItem.userType === 'Email Marketing')
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
                            <IconButton onClick={() => handleRead(row.original.fileId)}>
                                <RemoveRedEyeIcon
                                    style={{ cursor: 'pointer', color: 'black', width: '30px', height: '30px' }}
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

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    if (role !== 'email_marketing' && role !== 'admin') {
        return <div className='text-center'>
            <h1 className='bg-danger p-2 text-light'>You are not authorized to view this page.</h1>
        </div>;
    }

    return (
        <>
            {excelData.length === 0 ? (
                <MaterialReactTable columns={columns} data={filteredFiles} />
            ) : (
                <>
                    {currentFileName && (
                        <div className='p-4 bg_color_Email my-3 fw-bold text-center'>
                            File name: {currentFileName}
                        </div>
                    )}
                    <SpreadsheetViewer data={excelData} />
                    <Button variant="contained" color="primary" onClick={handleUpdateFile}>
                        Update File
                    </Button>
                </>
            )}
        </>
    );
};

export default RfpEmailCheck;

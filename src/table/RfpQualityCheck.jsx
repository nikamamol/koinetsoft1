import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import { fetchFileDataAll, readFile, updateFileStatus, updateCsvFileById, downloadFile } from '../redux/reducer/rpf/getcsvfiledata';
import { Checkbox, IconButton, Tooltip } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Hourglass from "../assets/Hourglass.gif";


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
    const [currentFileName, setCurrentFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [updatedData, setUpdatedData] = useState([]);

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
        const file = files.find(file => file.fileId === fileId);
        if (file) {
            setCurrentFileName(file.filename);
            setSelectedFile(file); // Set selected file for update
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

    const handleDownload = (fileId, filename) => {
        dispatch(downloadFile({ fileId, filename }))
            .unwrap()
            .catch((error) => {
                console.error('Error downloading file:', error);
            });
    };
    // Handle row edit and update the excelData state, then call the update API
    const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
        try {
            // Create a new array from excelData to update the values
            const updatedExcelData = [...excelData];
            const rowIndex = row.index + 2; // Adjust for header row

            // Update the row with the new values
            updatedExcelData[rowIndex] = Object.values(values); // Map values to the row

            // Set updatedExcelData to excelData
            setExcelData(updatedExcelData);

            // Create a Blob from the updated data
            const worksheet = XLSX.utils.aoa_to_sheet(updatedExcelData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

            const binaryString = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
            const buffer = new ArrayBuffer(binaryString.length);
            const view = new Uint8Array(buffer);
            for (let i = 0; i < binaryString.length; i++) {
                view[i] = binaryString.charCodeAt(i) & 0xFF;
            }

            const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            let newFile;
            const formData = new FormData();

            // Check selectedFile to ensure it's valid
            if (selectedFile && selectedFile.filename && selectedFile.fileId) {
                newFile = new File([blob], selectedFile.filename, { type: blob.type });
                formData.append('file', newFile);
                if (selectedFile.path) {
                    formData.append('path', selectedFile.path);
                }
            } else {
                throw new Error("Invalid selectedFile object: No file selected or invalid fileId.");
            }

            formData.append('updatedData', JSON.stringify(updatedExcelData));
            await dispatch(updateCsvFileById({
                fileId: selectedFile.fileId,
                fileData: { file: newFile, path: selectedFile.path },
                updatedData: updatedExcelData,
            })).unwrap();

            toast.success('File updated successfully!');

        } catch (error) {
            toast.error('Error updating file. Please try again.');
            console.error('Error updating file:', error);
        } finally {
            exitEditingMode(); // Close the editing mode after saving
        }
    };

    const role = localStorage.getItem('role');

    const filteredFiles = useMemo(() => {
        if (role !== 'quality' && role !== 'oxmanager' && role !== 'admin') return [];
        return files.filter(file =>
            file.status.some(statusItem => statusItem.userType === 'Quality')
        );
    }, [files, role]);

    const excelColumns = useMemo(() => {
        if (excelData.length > 0) {
            const headers = excelData[1]; // First row contains headers
            return headers.map((header, index) => ({
                accessorKey: `${index}`, // String literal for unique accessor keys
                header, // Use header directly
                enableEditing: true, // Allow editing of cells
            }));
        }
        return [];
    }, [excelData]);

    const excelTableData = useMemo(() => {
        if (excelData.length > 1) {
            return excelData.slice(2).map((row, rowIndex) => {
                const rowData = {};
                row.forEach((cell, cellIndex) => {
                    rowData[cellIndex] = cell;
                });
                return rowData;
            });
        }
        return [];
    }, [excelData]);

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
                                        disabled={role !== 'quality'}
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
                        <Tooltip title="Download File">
                            <IconButton >
                                <CloudDownloadIcon

                                    style={{
                                        color: "black",
                                        width: '30px',
                                        height: '30px'
                                    }}
                                    onClick={() => handleDownload(row.original.fileId, row.original.filename)}
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                ),
                size: 150,
            },
        ],
        [handleRead, handleCheckboxChange, checkboxes]
    );


    if (status === "loading") return (
        <>
            <div className='text-center mt-5'><img src={Hourglass} alt="" height={40} width={40} /></div>
        </>
    )
    if (status === 'failed') return <div>Error: {error}</div>;

    if (role !== 'quality' && role !== 'admin' && role !== 'oxmanager') {
        return <div className='text-center'>
            <h1 className='bg-danger p-2 text-light'>You are not authorized to view this page</h1>
        </div>;
    }

    return (
        <div>
            {excelData.length === 0 ? (
                <MaterialReactTable columns={columns} data={filteredFiles} />
            ) : (
                <MaterialReactTable
                    columns={excelColumns}
                    data={excelTableData}
                    editingMode="row"
                    enableEditing
                    onEditingRowSave={handleSaveRowEdits}
                />
            )}
        </div>
    );
};

export default RfpQualityCheck;

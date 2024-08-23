import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialReactTable } from 'material-react-table';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { fetchFileDataAll, downloadFile, updateFileStatusEmail } from '../redux/reducer/rpf/getcsvfiledata';
import { Checkbox, IconButton, Tooltip } from '@mui/material';
import { toast } from 'react-toastify';

const RfpEmailCheck = () => {
    const dispatch = useDispatch();
    const { files, error, status } = useSelector((state) => ({
        files: state.fileData.files,
        error: state.fileData.error,
        status: state.fileData.status,
    }));

    const [checkboxes, setCheckboxes] = useState({});

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

    const handleDownload = (fileId, filename) => {
        dispatch(downloadFile({ fileId, filename }))
            .unwrap()
            .catch((error) => {
                console.error('Error downloading file:', error);
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
                        <Tooltip title="Download File">
                            <IconButton>
                                <CloudDownloadIcon
                                    style={{ cursor: 'pointer', color: 'black', width: '30px', height: '30px' }}
                                    onClick={() => handleDownload(row.original.fileId, row.original.filename)}
                                />
                            </IconButton>
                        </Tooltip>
                    </div>
                ),
                size: 200,
            },
        ],
        [handleDownload, handleCheckboxChange, checkboxes]
    );

    if (status === 'loading') return <div>Loading...</div>;
    if (status === 'failed') return <div>Error: {error}</div>;

    if (role !== 'email_marketing' && role !== 'admin') {
        return <div className='text-center'>
        <h1 className='bg-danger p-2 text-light'>You are not authorized to view this page.</h1>
      </div>;
    }

    return <MaterialReactTable columns={columns} data={filteredFiles} />;
};

export default RfpEmailCheck;

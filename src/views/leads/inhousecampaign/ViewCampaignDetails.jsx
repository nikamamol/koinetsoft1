import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Row, Tab, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaignById } from '../../../redux/reducer/createcampaign/GetCampaignData';
import { useParams } from 'react-router-dom';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { toast } from 'react-toastify';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function ViewCampaignDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentCampaign, status, error } = useSelector(state => state.campaigns);
    const [key, setKey] = useState('active');

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }).replace(/ /g, ' ');
    };

    useEffect(() => {
        if (id) {
            dispatch(fetchCampaignById(id));
        }
    }, [id, dispatch]);

    // console.log(currentCampaign);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    if (!currentCampaign) {
        return <div>No campaign data available.</div>;
    }

    const formatRevenue = (revenueArray) => {
        if (Array.isArray(revenueArray) && revenueArray.length > 0) {
            return revenueArray[0].replace(/[\[\]"]/g, '');
        }
        return '';
    };
    const downloadFile = (fileData, fileName, fileType) => {
        // Convert fileData to a Uint8Array
        const arrayBuffer = new Uint8Array(fileData).buffer;

        switch (fileType) {
            case 'csv':
                // Handle CSV files
                const csvText = new TextDecoder().decode(new Uint8Array(arrayBuffer));
                saveAs(new Blob([csvText], { type: 'text/csv' }), fileName);
                break;

            case 'excel':
                // Handle Excel files
                try {
                    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
                    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
                    saveAs(new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), fileName);
                } catch (error) {
                    toast.error('Error processing Excel file:', error);
                    // console.error('Error processing Excel file:', error);
                }
                break;

            case 'pdf':
                // Handle PDF files
                const pdfBlob = new Blob([arrayBuffer], { type: 'application/pdf' });
                saveAs(pdfBlob, fileName);
                break;

            case 'doc':
            case 'docx':
                // Handle DOC/DOCX files
                const docBlob = new Blob([arrayBuffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
                saveAs(docBlob, fileName);
                break;

            default:
                console.error('Unsupported file type');
                break;
        }
    };


    const asset = currentCampaign.assets[0]?.content?.data;


    const fileName = currentCampaign.assets[0]?.originalname || 'file.xlsx'; // Default filename
    const fileType = 'excel'; // Adjust based on file type

    const script2 = currentCampaign.script[0]?.content?.data;
    const fileName2 = currentCampaign.script[0]?.originalname || 'file.xlsx'; // Default filename
    const fileType2 = 'excel'; // Adjust based on file type


    const suppressionList3 = currentCampaign.suppressionList[0]?.content?.data;
    const fileName3 = currentCampaign.suppressionList[0]?.originalname || 'file.xlsx'; // Default filename
    const fileType3 = 'excel'; // Adjust based on file type

    const tal4 = currentCampaign.tal[0]?.content?.data;
    const fileName4 = currentCampaign.tal[0]?.originalname || 'file.xlsx'; // Default filename
    const fileType4 = 'excel'; // Adjust based on file type

    // const tal = currentCampaign.tal && currentCampaign.tal[0].content.data;
    // console.log(script)
    return (
        <div>
            <Container fluid className='my-5 '>
                <Row className=''>
                    <Col lg={3}>
                    </Col>
                    <Col lg={8}>
                        <div className='bgColor rounded-3 shadow'>
                            <h4 className='fw-bold py-3 ms-3 text_color'>Campaign Detail</h4>
                        </div>
                        <div className="row mt-3">
                            <div>
                                <h5 className="card-title text-center mb-3  rounded-4 p-2">
                                    <h4 className="fw-bold">Campaign Name</h4>
                                    <p className='mt-4'><span className='bg-primary px-5 py-2 rounded-4 w-50 text-white'>{currentCampaign.campaignName}</span></p>
                                </h5>
                            </div>
                            <div className="col-lg-6 mb-sm-3">
                                <div className="card border-0 shadow p-2 h-100">
                                    <div className="card-body">
                                        {/* General Campaign Details */}
                                        <h6 className="d-flex justify-content-between">
                                            <span className="fw-bold">Client:</span>
                                            <span>{currentCampaign.clientSelect}</span>
                                        </h6>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Campaign Code:</span>
                                            <span>{currentCampaign.campaignCode}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Campaign Nature:</span>
                                            <span>{currentCampaign.campaignNature}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Campaign Status:</span>
                                            <span>{currentCampaign.campaignStatus}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Campaign Type:</span>
                                            <span>{currentCampaign.campaignType}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Campaign Size:</span>
                                            <span>{currentCampaign.companySize}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">CPL:</span>
                                            <span>{currentCampaign.cpl}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Start Date:</span>
                                            <span>{formatDate(currentCampaign.startDate)}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">End Date:</span>
                                            <span>{formatDate(currentCampaign.endDate)}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Billing Day:</span>
                                            <span>{currentCampaign.billingDay}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Template:</span>
                                            <span>{currentCampaign.template}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Target:</span>
                                            <span>{currentCampaign.target}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mb-sm-3">
                                <div className="card border-0 shadow p-2 h-100">
                                    <div className="card-body">
                                        {/* Responsibilities and Additional Details */}
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Industry:</span>
                                            <span>{currentCampaign.industry}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Job Title:</span>
                                            <span>{currentCampaign.jobTitle}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Revenue:</span>
                                            <span>{currentCampaign.revenue}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Voice Log Required:</span>
                                            <span>{currentCampaign.voiceLogRequired}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Supervisor:</span>
                                            <span>{currentCampaign.supervisor}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Supervisor Target:</span>
                                            <span>{currentCampaign.supervisorTarget}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Lead Per Day:</span>
                                            <span>{currentCampaign.leadPerDay}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">GEO:</span>
                                            <span>{currentCampaign.geo}</span>
                                        </p>

                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">ABM CPC:</span>
                                            <span>{currentCampaign.abmCpc}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">No.of Contact:</span>
                                            <span>{currentCampaign.noOfContacts}</span>
                                        </p>
                                        <p className="card-text d-flex justify-content-between">
                                            <span className="fw-bold">Note:</span>
                                            <span>{currentCampaign.note}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3 bg_Color_campaign p-4">
                            <div className="col-lg-12">
                                <Tab.Container id="left-tabs-example" activeKey={key} onSelect={(k) => setKey(k)}>
                                    <Nav variant="tabs">
                                        <Nav.Item>
                                            <Nav.Link eventKey="active">Asset / Whitepaper</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="script">Script</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="suppression" >
                                                Suppression
                                            </Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="tal" >
                                                TAL
                                            </Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="active">
                                            {currentCampaign.assets && currentCampaign.assets.length > 0 ? (
                                                currentCampaign.assets.map((asset, index) => (
                                                    <Button
                                                        key={index}
                                                        className="mt-3 me-2"
                                                        onClick={() => downloadFile(asset.content.data, asset.originalname, 'pdf')}
                                                    >
                                                        <CloudDownloadIcon />  {asset.originalname}
                                                    </Button>
                                                ))
                                            ) : (
                                                <p>No assets available for download.</p>
                                            )}
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="script">
                                            {currentCampaign.script?.map((file, index) => {
                                                const fileName = file?.name || `file_${index}.xlsx`; // Default filename with index
                                                const fileType = 'doc'; // Adjust based on file type (assuming .doc for example)
                                                const fileData = file?.content?.data;

                                                return (
                                                    fileData && (
                                                        <Button
                                                            key={index}
                                                            className="mt-3 me-2"
                                                            onClick={() => downloadFile(fileData, fileName, fileType)}
                                                        >
                                                            <CloudDownloadIcon /> {fileName}
                                                        </Button>
                                                    )
                                                );
                                            })}
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="suppression">
                                            {currentCampaign.suppressionList?.map((file, index) => {
                                                const fileName = file?.originalname || `file_${index}.xlsx`; // Default filename with index
                                                const fileType = 'excel'; // Adjust based on file type
                                                const fileData = file?.content?.data;

                                                return (
                                                    fileData && (
                                                        <Button
                                                            key={index}
                                                            className="mt-3 me-2"
                                                            onClick={() => downloadFile(fileData, fileName, fileType)}
                                                        >
                                                            <CloudDownloadIcon />  {fileName}
                                                        </Button>
                                                    )
                                                );
                                            })}
                                        </Tab.Pane>

                                        <Tab.Pane eventKey="tal">
                                            {currentCampaign.tal?.map((file, index) => {
                                                const fileName = file?.originalname || `file_${index}.xlsx`; // Default filename with index
                                                const fileType = 'excel'; // Adjust based on file type (assuming excel in this case)
                                                const fileData = file?.content?.data;

                                                return (
                                                    fileData && (
                                                        <Button
                                                            key={index}
                                                            className="mt-3 me-2"
                                                            onClick={() => downloadFile(fileData, fileName, fileType)}
                                                        >
                                                            <CloudDownloadIcon />  {fileName}
                                                        </Button>
                                                    )
                                                );
                                            })}
                                        </Tab.Pane>

                                    </Tab.Content>
                                </Tab.Container>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ViewCampaignDetails;

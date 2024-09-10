import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Row, Tab, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaignById } from '../../../redux/reducer/createcampaign/GetCampaignData';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { saveAs } from 'file-saver';
import baseUrl from '../../../constant/ConstantApi';

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

    console.log(currentCampaign);

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

    const downloadFile = async (fileId, fileName) => {
        const getToken = () => localStorage.getItem('authToken');
        const token = getToken();
        try {
            const response = await axios.get(`${baseUrl}user/downloadCampaignFile/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`, // If using token-based auth
                },
                responseType: 'blob',
            });
    
            const fileBlob = new Blob([response.data]);
            saveAs(fileBlob, fileName);
        } catch (error) {
            console.error('Error downloading the file', error);
        }
    };
    const asset = currentCampaign.assets && currentCampaign.assets[0];
    const script = currentCampaign.script && currentCampaign.script[0];
    const suppressionList = currentCampaign.suppression && currentCampaign.suppression[0];
    const tal = currentCampaign.tal && currentCampaign.tal[0];

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
                                <h5 className="card-title text-center mb-3 bg-danger text-white rounded-4 p-2">
                                    <h4 className="fw-bold">Campaign Name</h4>
                                    <h5>{currentCampaign.campaignName}</h5>
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
                    <Nav.Link eventKey="suppression">Suppression</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="tal">TAL</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="active">
                    {asset && (
                        <Button className='mt-3' onClick={() => downloadFile(asset.fileId, asset.originalName)}>
                            Download Asset {asset.originalName}
                        </Button>
                    )}
                </Tab.Pane>
                <Tab.Pane eventKey="script">
                    {script && (
                        <Button className='mt-3' onClick={() => downloadFile(script.fileId, script.originalName)}>
                            Download Script ({script.originalName})
                        </Button>
                    )}
                </Tab.Pane>
                <Tab.Pane eventKey="suppression">
                    {suppressionList && (
                        <Button className='mt-3' onClick={() => downloadFile(suppressionList.fileId, suppressionList.originalName)}>
                            Download Suppression ({suppressionList.originalName})
                        </Button>
                    )}
                </Tab.Pane>
                <Tab.Pane eventKey="tal">
                    {tal && (
                        <Button className='mt-3' onClick={() => downloadFile(tal.fileId, tal.originalName)}>
                            Download TAL ({tal.originalName})
                        </Button>
                    )}
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

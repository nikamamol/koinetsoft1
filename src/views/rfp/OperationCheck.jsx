// components/OperationCheck.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row, Button, Modal, Form } from 'react-bootstrap';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import RfpOperation from '../../table/RfpOperation';
import { uploadOperationFile } from '../../redux/reducer/rpf/operationcsvupload';
import { fetchCampaigns } from '../../redux/reducer/createcampaign/GetCampaignData'; // Import fetchCampaigns action

function OperationCheck() {
  const [show, setShow] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const uploadStatus = useSelector((state) => state.operationfileUpload);
  const { campaigns, status, error } = useSelector((state) => state.campaigns);

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleCampaignChange = (e) => {
    setSelectedCampaign(e.target.value);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!selectedCampaign || !selectedFile) {
      alert('Please select a campaign and a file.');
      return;
    }

    const formData = new FormData();
    const selectedCampaignData = campaigns.find(c => c._id === selectedCampaign);
    
    formData.append('campaignName', selectedCampaignData?.campaignName || '');
    formData.append('campaignCode', selectedCampaignData?.campaignCode || '');
    formData.append('file', selectedFile);

    dispatch(uploadOperationFile(formData))
      .unwrap()
      .then(() => {
        alert('File uploaded successfully!');
        handleClose();
      })
      .catch(() => {
        alert('File upload failed. Please try again.');
      });
  };

  return (
    <div>
      <Container fluid className="my-5">
        <Row>
          <Col lg={3}></Col>
          <Col lg={8}>
            <div className="bgColor rounded-3 shadow">
              <h4 className="fw-bold py-3 ms-3 text_color">Operation Final Check RFP List</h4>
            </div>
            <div className="my-3 d-flex justify-content-end">
              <Button variant="primary" className="p-2" onClick={handleShow}>
                <CloudUploadIcon /> Upload RFP File
              </Button>
              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Upload Your RFP File (.csv format)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formCampaign">
                      <Form.Label>Select Campaign</Form.Label>
                      <Form.Control as="select" onChange={handleCampaignChange} value={selectedCampaign}>
                        <option value="">Select Campaign</option>
                        {status === 'succeeded' && campaigns.length > 0 ? (
                          campaigns.map((campaign) => (
                            <option key={campaign._id} value={campaign._id}>
                              {campaign.campaignName}
                            </option>
                          ))
                        ) : (
                          <option>Loading campaigns...</option>
                        )}
                      </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mt-3">
                      <Form.Label>Upload CSV</Form.Label>
                      <Form.Control type="file" onChange={handleFileChange} />
                    </Form.Group>
                    <div className="mt-3">
                      <Button
                        variant="success"
                        onClick={handleFileUpload}
                        disabled={uploadStatus === 'loading'}
                      >
                        <SendIcon /> Send
                      </Button>
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>
            </div>

            <RfpOperation />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OperationCheck;

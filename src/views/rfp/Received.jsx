import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button, Modal, Form } from 'react-bootstrap';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import RfpReceived from '../../table/RfpReceived';
import { fetchCampaigns } from '../../redux/reducer/createcampaign/GetCampaignData';
import { uploadFile } from '../../redux/reducer/rpf/uploadcsvbyemploy';

function Received() {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [selectedCampaign, setSelectedCampaign] = useState('');
  const [selectedCampaignCode, setSelectedCampaignCode] = useState('');

  const dispatch = useDispatch();
  const campaigns = useSelector((state) => state.campaigns.campaigns);
  const uploadStatus = useSelector((state) => state.fileUpload.status);
  const uploadMessage = useSelector((state) => state.fileUpload.message);

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCampaignChange = (e) => {
    const selectedCampaignId = e.target.value;
    const campaign = campaigns.find((campaign) => campaign._id === selectedCampaignId);
    if (campaign) {
      setSelectedCampaign(campaign.campaignName);
      setSelectedCampaignCode(campaign.campaignCode);
    }
  };
  const userRole = localStorage.getItem('role')

  const handleFileUpload = async () => {
    if (!file || !selectedCampaign || !selectedCampaignCode) {
      alert('Please select a file and a campaign!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('campaignName', selectedCampaign);
    formData.append('campaignCode', selectedCampaignCode);

    try {
      // Dispatch the uploadFile thunk
      await dispatch(uploadFile(formData)).unwrap();
      alert(uploadMessage || 'File uploaded successfully!');
      setShow(false);
    } catch (error) {
      console.error('There was an error uploading the file!', error);
      alert('Failed to upload the file.');
    }
  };

  return (
    <div>
      <Container fluid className='my-5'>
        <Row>
          <Col lg={3}></Col>
          <Col lg={8}>
            <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'>Your RFP File List</h4>
            </div>
            {(userRole === "user" || userRole === "admin") && (
              <div className='my-3 d-flex justify-content-end'>
                <Button variant="primary" className='p-2' onClick={handleShow}>
                  <CloudUploadIcon /> Upload RPF File
                </Button>
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Header closeButton>
                    <Modal.Title>Upload Your RPF File (.csv format)</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group controlId="formFile">
                        <Form.Label>Select Campaign</Form.Label>
                        <Form.Control as="select" onChange={handleCampaignChange}>
                          <option value="">Select Campaign</option>
                          {campaigns.map((campaign) => (
                            <option key={campaign._id} value={campaign._id}>
                              {campaign.campaignName}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId="formFile" className="mt-3">
                        <Form.Label>Upload CSV</Form.Label>
                        <Form.Control type="file" onChange={handleFileChange} />
                      </Form.Group>
                      <div className='mt-3'>
                        <Button variant="success" onClick={handleFileUpload} disabled={uploadStatus === 'loading'}>
                          <SendIcon /> Send
                        </Button>
                      </div>
                    </Form>
                  </Modal.Body>
                </Modal>
              </div>
            )}

            <RfpReceived />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Received;

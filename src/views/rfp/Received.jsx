import React, { useState } from 'react';
import { Col, Container, Row, Button, Modal, Form } from 'react-bootstrap';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SendIcon from '@mui/icons-material/Send';
import RfpReceived from '../../table/RfpReceived';

function Received() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Container fluid className='my-5'>
        <Row>
          <Col lg={3}></Col>
          <Col lg={8}>
            <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'>RFP List</h4>
            </div>
            <div className='my-3 d-flex justify-content-end'>
              <Button
                variant="primary"
                className='p-2'
                onClick={handleShow}
              >
                <CloudUploadIcon /> Upload RPF File
              </Button>
              <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Upload Your RPF File (.csv format)</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formFile">
                      <Form.Control type="file" />
                    </Form.Group>
                    <div className='mt-3'>
                      <Button variant="success" onClick={handleClose}>
                        <SendIcon /> Send
                      </Button>
                    </div>
                  </Form>
                </Modal.Body>
              </Modal>
            </div>
            <RfpReceived />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Received;

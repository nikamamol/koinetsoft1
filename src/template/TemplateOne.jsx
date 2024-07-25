import React, { useRef, useState } from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import EmailEditor from 'react-email-editor';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const TemplateOne = () => {
    const emailEditorRef = useRef(null);
    const [savedHtml, setSavedHtml] = useState(null);

    const saveTemplate = () => {
        emailEditorRef.current.editor.exportHtml((data) => {
            const { design, html } = data;
            setSavedHtml(html);
            console.log('Template saved', design);
        });
    };

    const onLoad = () => {
        // Load the saved template if available
        // Use emailEditorRef.current.editor.loadDesign(savedDesign) if you have a design to load
    };

    const onReady = () => {
        // Editor is ready
        console.log('onReady');
    };

    return (
        <div>
            <Container fluid className='my-5'>
                <Row>
                    {/* <Col lg={3}></Col> */}
                    <Col lg={12}>
                        <div>
                            <Link to='/' className='btn btn-outline-danger my-4 btn-sm'><KeyboardBackspaceIcon className='me-2' />Back to Dashboard</Link>
                        </div>
                        <div className='bgColor rounded-3 shadow'>
                            <h4 className='fw-bold py-3 ms-3 text_color'>Create Email Template</h4>
                        </div>
                        <EmailEditor
                            ref={emailEditorRef}
                            onLoad={onLoad}
                            onReady={onReady}
                        />
                        <div className='my-3 d-flex gap-2'>
                            <Button variant='primary' onClick={saveTemplate}>Save Template</Button>
                            <Button variant='danger' href='/landingpages/viewalllandingpages'>View All Template</Button>
                        </div>
                        {savedHtml && (
                            <Card className='mt-3'>
                                <Card.Header>Saved Template Design</Card.Header>
                                <Card.Body>
                                    <div dangerouslySetInnerHTML={{ __html: savedHtml }} />
                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TemplateOne;

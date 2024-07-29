import React, { useRef, useState } from 'react';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import EmailEditor from 'react-email-editor';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom';

const TemplateOne = () => {
    const emailEditorRef = useRef(null);
    const [savedHtml, setSavedHtml] = useState(null);
    const [formType, setFormType] = useState('0');
    const [logoPreview, setLogoPreview] = useState('');
    const [bannerPreview, setBannerPreview] = useState('');
    const [documentPreview, setDocumentPreview] = useState('');
    const [formLink, setFormLink] = useState('');

    const handleFormTypeChange = (e) => {
        setFormType(e.target.value);
    };

    const handleFileChange = (e, setter) => {
        const file = e.target.files[0];
        if (file) {
            setter(URL.createObjectURL(file));
        }
    };

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
                            <Link to='/dashboard' className='btn btn-outline-danger my-4 btn-sm'><KeyboardBackspaceIcon className='me-2' />Back to Dashboard</Link>
                        </div>
                        <div className='bgColor rounded-3 shadow'>
                            <h4 className='fw-bold py-3 ms-3 text_color'>Create Email Template</h4>
                        </div>

                        <div className="row">
                            <div className="col-xxl">
                                <div className="card mb-4">
                                    <div className="card-header p-3 d-flex align-items-center justify-content-between">
                                        <small className="text-muted float-end">Fields marked <span className="text-danger">*</span> are mandatory</small>
                                    </div>
                                    <div className="card-body">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="template_title" className="form-label">Title/Header<span className="text-danger">*</span></label>
                                                        <input type="text" name="template_title" className="form-control" id="template_title" placeholder="Beyond on-demand for DDoS defense" />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="logo" className="form-label">Logo</label> (.png, .jpeg, .jpg, .svg) 200px × 74 px <span className="text-danger"> *</span>
                                                        {logoPreview && <a href={logoPreview} target="_blank" id="view_logo">View Logo</a>}
                                                        <input className="form-control" type="file" id="logo" name="logo" accept=".png, .jpeg, .jpg, .svg" onChange={(e) => handleFileChange(e, setLogoPreview)} />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="banner" className="form-label">Banner Image</label> (.png, .jpeg, .jpg) 1170px × 267 px <span className="text-danger"> *</span>
                                                        {bannerPreview && <a href={bannerPreview} target="_blank" id="view_banner">View Banner</a>}
                                                        <input className="form-control" type="file" id="banner" name="banner" accept=".png, .jpeg, .jpg" onChange={(e) => handleFileChange(e, setBannerPreview)} />
                                                    </div>
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="client_form" className="form-label">Script / Custom Form</label>
                                                        <span className="text-danger"> *</span>
                                                        <select id="client_form" className="form-select" onChange={handleFormTypeChange}>
                                                            <option value="1">Script</option>
                                                            <option value="0" selected="">Custom</option>
                                                        </select>
                                                    </div>
                                                    {formType === '0' && (
                                                        <div className="mb-3 col-md-6">
                                                            <label htmlFor="form_link" className="form-label">Client Form Link</label>
                                                            <span className="text-danger"> *</span>
                                                            <input className="form-control" type="text" placeholder="" name="form_link" id="form_link" value={formLink} onChange={(e) => setFormLink(e.target.value)} />
                                                        </div>
                                                    )}
                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="receive_comminication" className="form-label">Receive marketing communications</label>
                                                        <span className="text-danger"> *</span>
                                                        <input className="form-control" type="text" placeholder="I agree to receive marketing communications and promotional offers from Cloudflare." name="receive_comminication" id="receive_comminication" />
                                                    </div>

                                                    <div className="mb-3 col-md-6">
                                                        <label htmlFor="document" className="form-label">Browse/Documents</label>
                                                        <span className="text-danger"> *</span>
                                                        {documentPreview && <a href={documentPreview} target="_blank" id="view_document">View Document</a>}
                                                        <input className="form-control" type="file" id="document" name="document" onChange={(e) => handleFileChange(e, setDocumentPreview)} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

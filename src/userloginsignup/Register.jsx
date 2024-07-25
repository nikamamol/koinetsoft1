import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import LogoImge1 from "../assets/koinetlogo.png"


const Register = () => {
    const submitForm = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log("Form submitted");
    };

    return (
        <Container fluid className='bgGradinet'>
            <Row>
                <Col lg={12} className="d-flex justify-content-center align-items-center vh-100 ">
                    <Col lg={6}>
                        <Card className=" border-0 shadow p-5" style={{ backgroundColor: '#F8F4E1' }}>
                            <div className='text-center'>
                                <p >
                                    <img src={LogoImge1} alt="" width={200} height={100} />
                                    <p>Koinet Media Ites Pvt Ltd.</p>
                                </p>
                                <div>
                                    <h4> Welcome to Koinet-Media! 👋 </h4>
                                    <p>
                                        Sign-up to your account and roll up your sleeves to work on the campaign!
                                    </p>
                                </div>
                            </div>
                            <Form id="registrationForm" onSubmit={submitForm}>
                                <Form.Group className="mb-2">
                                    <Row className="mb-2">
                                        <Col md={6}>
                                            <Form.Label htmlFor="firstName">First Name</Form.Label>
                                            <Form.Control type="text" id="firstName" name="firstName" />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Label htmlFor="lastName">Last Name</Form.Label>
                                            <Form.Control type="text" id="lastName" name="lastName" />
                                        </Col>
                                    </Row>
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control type="email" id="email" name="email" />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control type="password" id="password" name="password" />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label htmlFor="phone">Phone</Form.Label>
                                    <Form.Control type="text" id="phone" name="phone" />
                                </Form.Group>
                                <Form.Group className="mb-2">
                                    <Form.Label htmlFor="role">Role</Form.Label>
                                    <Form.Control as="select" id="role" name="role" required>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                        <option value="supervisor">Supervisor</option>
                                        <option value="oxmanager">OX Manager</option>
                                        <option value="agent">Agent</option>
                                        <option value="client">Client</option>
                                        <option value="quality">Quality</option>
                                        <option value="delivery">Delivery</option>
                                    </Form.Control>
                                </Form.Group>
                                <div className="g-recaptcha" data-sitekey="6Ld3OPYpAAAAAEFwTbe61yzBBwg07nogKwTY82iu"></div>
                                <div className="text-center mt-3">
                                    <Button type="submit" className="btn btn-danger w-50">
                                        Register Now
                                    </Button>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;

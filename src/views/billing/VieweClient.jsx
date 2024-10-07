import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BillingViewClient from '../../table/BillingViewClient';

function VieweClient() {
  // Get the user role from local storage
  const userRole = localStorage.getItem('role');

  return (
    <div>
      <Container fluid className='my-5'>
        <Row>
          <Col lg={3}></Col>
          <Col lg={8}>
            <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'>View Client</h4>
            </div>
            {/* Conditionally render BillingViewClient if userRole is 'admin' or 'oxmanager' */}
            {(userRole === 'admin' || userRole === 'oxmanager') ? (
              <BillingViewClient />
            ) : (
              <div className="text-center mt-4">
                <h5 className='text-danger'>User not authorized to view this page</h5>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default VieweClient;

import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AgencyMyAgency from '../../table/AgencyMyAgency'
import Navbar from "../../components/HeadNavbar"

function MyEngencies() {
  const userType = localStorage.getItem("role");
  return (
    <div>
      <Navbar />
      <Container fluid className='my-5 '>
        <Row className=''>
          <Col lg={3}>
          </Col>
          <Col lg={8}>
            <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'>View All Agency</h4>
            </div>
            {(userType === 'admin' || userType === 'oxmanager') ? (
              <AgencyMyAgency />
            ) : (
              <div className="text-center mt-4">
                <h5 className='text-danger'>User not authorized to view this page</h5>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyEngencies

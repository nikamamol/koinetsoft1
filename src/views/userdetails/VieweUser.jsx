import React from 'react'
import VieweUserTable from '../../table/VieweUserTable'
import { Col, Container, Row } from 'react-bootstrap'


function VieweUser() {
  return (
    <div>
      <Container fluid className='my-5 '>
        <Row className=''>
          <Col lg={3}>
          </Col>
          <Col lg={8}>
          <div className='bg-secondary rounded-3'>
            <h3 className='fw-bold py-3 ms-3 text-white'>User List</h3>
          </div>
            <VieweUserTable />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VieweUser

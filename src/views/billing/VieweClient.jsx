import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BillingViewClient from '../../table/BillingViewClient'

function VieweClient() {
  return (
    <div>
      <Container fluid className='my-5 '>
        <Row>
          <Col lg={3}>
          </Col>
          <Col lg={8}>
          <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'>View Client</h4>
            </div>
            <BillingViewClient />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VieweClient

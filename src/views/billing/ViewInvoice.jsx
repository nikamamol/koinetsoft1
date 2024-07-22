import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BillingViewInvoice from '../../table/BillingViewInvoice'

function ViewInvoice() {
  return (
    <div>
       <Container fluid className='my-5 '>
        <Row>
          <Col lg={3}>
          </Col>
          <Col lg={8}>
          <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'>Invoice List</h4>
            </div>
            <BillingViewInvoice />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ViewInvoice

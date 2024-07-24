import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function ViewLandingPages() {
  return (
    <div>
      <Container fluid className="my-5">
        <Row>
          <Col lg={3}>
            {/* Add content here if needed */}
          </Col>
          <Col lg={8}>
            <div className="bgColor rounded-3 shadow">
              <h4 className="fw-bold py-3 ms-3 text_color">View All Landing Pages</h4>
            </div>
            <div className="container-xxl flex-grow-1 container-p-y">
          

              {/* Hoverable Table rows */}
              <div className="card border-0 rounded-4 shadow">
                <div className="table-responsive text-nowrap">
                  <table className="table table-hover" id="myTable">
                    <thead>
                      <tr>
                        <th>Sr No</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Edit</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      <tr key="1">
                        <td>
                          <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>1</strong>
                        </td>
                        <td>
                          <a target="_blank" href="https://reportpub.co/landing/test-jl" rel="noopener noreferrer">Test</a>
                        </td>
                        <td>2024-07-23</td>
                        <td>
                          <a className="dropdown-item delete" href="/edit-landing-template/33">
                            <i className="bx bx-edit me-1"></i> Edit
                          </a>
                        </td>
                      </tr>

                      <tr key="2">
                        <td>
                          <i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>2</strong>
                        </td>
                        <td>
                          <a target="_blank" href="https://reportpub.co/landing/dsds" rel="noopener noreferrer">dsds</a>
                        </td>
                        <td>2024-07-23</td>
                        <td>
                          <a className="dropdown-item delete" href="/edit-landing-template/32">
                            <i className="bx bx-edit me-1"></i> Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ViewLandingPages;

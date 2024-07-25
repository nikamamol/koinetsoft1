import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


function AddUser() {
  return (
    <div>
      
      <Container fluid className="mt-5">
        <Row>
          <Col lg={3}></Col>
          <Col lg={8}>
            <div className="row">
              <div className="col-xxl">
                <div className='bgColor rounded-3 shadow'>
                  <h4 className='fw-bold py-3 ms-3 text_color'>Add New User</h4>
                </div>
                <div className="card border-0 shadow mb-4">
                  <div className="card-header  d-flex align-items-center justify-content-between">
                    <small className="text-muted float-end p-2">
                      Fields marked <span className="text-danger">*</span> are mandatory
                    </small>
                  </div>
                  <div className="card-body">
                    <form action="#" method="post">
                      <input type="hidden" name="_token" value="#" />
                      <input type="hidden" name="vendor_id" id="vendor_id" value="#" />
                      <input type="hidden" name="self_user" id="self_user" value="Yes" />
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="fullname">
                            Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="fullname"
                            name="fullname"

                            placeholder="John Doe"
                            aria-label="John Doe"
                            aria-describedby="basic-icon-default-fullname2"
                            required
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="basic-icon-default-phone">
                            Phone No <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            name="mobile"
                            required

                            id="mobile"
                            className="form-control phone-mask"
                            placeholder="658 799 8941"
                            aria-label="658 799 8941"
                            aria-describedby="basic-icon-default-phone2"
                            maxLength="12"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="basic-icon-default-email">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            required

                            name="email"
                            id="email"
                            className="form-control"
                            placeholder="john.doe@domain.com"
                            aria-label="john.doe"
                            aria-describedby="basic-icon-default-email2"
                          />
                          <div className="form-text">You can use letters, numbers &amp; periods</div>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="basic-icon-default-company">
                            Password <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"

                            required
                            className="form-control"
                            placeholder="············"
                            aria-describedby="basic-default-password"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="date_of_hiring" className="col-sm-3 col-form-label">
                            Date of hiring <span className="text-danger">*</span>
                          </label>
                          <input className="form-control" type="date" name="date_of_hiring" required id="date_of_hiring" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="designation" className="col-sm-6 col-form-label">
                            Primary Designation <span className="text-danger">*</span>
                          </label>
                          <select id="designation" required name="designation" className="form-select">
                            <option >--Select Designation--</option>
                            <option value="3">OX Manager</option>
                            <option value="4">Agent</option>
                            <option value="5">Quality</option>
                            <option value="6">Delivery</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="supervisor">
                            Supervisor <span className="text-danger">*</span>
                          </label>
                          <select id="supervisor" required name="supervisor" className="form-select">
                            <option >--Select Supervisor--</option>
                            <option value="134">supriya mhaske</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="basic-icon-default-phone">
                            Monthly Salary (in Rs.) <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            name="salary"
                            required

                            id="salary"
                            className="form-control phone-mask"
                            placeholder="45000"
                            aria-label="45000"
                            aria-describedby="basic-icon-default-phone2"
                            maxLength="7"
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="shift">
                            Primary Shift <span className="text-danger">*</span>
                          </label>
                          <select id="shift" required name="shift" className="form-select">
                            <option >--Select Primary Shift--</option>
                            <option value="1">APAC Shift-4 am to 1 pm</option>
                            <option value="2">APAC Shift-6 am to 3 pm</option>
                            <option value="3">Europe Shift-12 noon to 9 pm</option>
                            <option value="4">Europe Shift-1 pm to 10 pm</option>
                            <option value="5">Europe Shift-2 pm to 11 pm</option>
                            <option value="6">Europe Shift-3 pm to 12 am</option>
                            <option value="7">US Shift-6 pm to 3 am</option>
                            <option value="8">US Shift-9 pm to 6 am</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-12">
                          <label htmlFor="campaign_nature" className="form-label">
                            Other Designation <span className="text-danger">*</span>
                          </label>
                          <div className="list-group">
                            <label className="list-group-item">
                              <input className="form-check-input me-1 checkbox_designation" id="user_type_3" name="other_designation" type="checkbox" value="3" />
                              Supervisor
                            </label>
                            <label className="list-group-item">
                              <input className="form-check-input me-1 checkbox_designation" id="user_type_4" name="other_designation" type="checkbox" value="4" />
                              Agent
                            </label>
                            <label className="list-group-item">
                              <input className="form-check-input me-1 checkbox_designation" id="user_type_5" name="other_designation" type="checkbox" value="5" />
                              Quality
                            </label>
                            <label className="list-group-item">
                              <input className="form-check-input me-1 checkbox_designation" id="user_type_6" name="other_designation" type="checkbox" value="6" />
                              Delivery
                            </label>
                            <input type="hidden" id="other_designation" name="other_designation" />
                          </div>
                        </div>
                        <div className="row gap-2 text-center">
                          <div className="col-12">
                            <button type="submit" className="btn btn-danger me-2">
                              Save
                            </button>
                            <button type="button" id="reset"  className="btn btn-outline-secondary">
                              Clear
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AddUser

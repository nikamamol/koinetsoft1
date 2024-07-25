import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import UserProfile from "../../assets/userProfile.jpeg"


function Profile() {
    const previewImage = (event) => {
        const reader = new FileReader();
        reader.onload = () => {
            const output = document.getElementById('uploadedAvatar');
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    const resetPage = () => {
        // Implement your reset logic here
    };

    return (
        <div>
            <Container fluid className="mt-5">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={8}>
                        <div className="row">
                            <div className="col-xxl">
                                <div className='bgColor rounded-3 shadow'>
                                    <h4 className='fw-bold py-3 ms-3 text_color'>User Profile</h4>
                                </div>
                                <div className="card mb-4">

                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="align-items-start align-items-sm-center">
                                                <img
                                                    src={UserProfile}
                                                    alt="user-avatar"
                                                    className="d-block rounded-pill ms-3"
                                                    height="150"
                                                    width="150"
                                                    id="uploadedAvatar"
                                                />
                                                <div className='text-center mt-2'>
                                                    <label htmlFor="upload" className="btn btn-outline-primary me-2 mb-2" tabIndex="0">
                                                        <span className="d-none d-sm-block">Change Profile Picture</span>
                                                        <i className="bx bx-upload d-block d-sm-none"></i>
                                                        <input
                                                            type="file"
                                                            id="upload"
                                                            className="account-file-input"
                                                            name="profile_photo"
                                                            hidden
                                                            accept="image/*"
                                                            onChange={previewImage}
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* <div className="ms-auto">
                                                <div className="mb-3 col-md-10">
                                                    <select id="user_type" required name="user_type" className="form-select">
                                                        <option value="2">Admin</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <input type="submit" className="btn btn-outline-danger" name="button_1" value="Switch Profile" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                    <hr className="my-0" />
                                    <div className="card-body">
                                        <input type="hidden" id="bank_name_fetched" name="bank_name_fetched" value="" />
                                        <input type="hidden" id="id" name="id" value="114" />
                                        <div className="row">
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="fullname">Name <span className="text-danger">*</span></label>
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
                                                <label htmlFor="basic-icon-default-phone">Phone No <span className="text-danger">*</span></label>
                                                <input
                                                    type="number"
                                                    onInput={(e) => {
                                                        if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength);
                                                    }}
                                                    maxLength="12"
                                                    name="mobile"
                                                    required
                                                   
                                                    id="mobile"
                                                    className="form-control phone-mask"
                                                    placeholder="658 799 8941"
                                                    aria-label="658 799 8941"
                                                    aria-describedby="basic-icon-default-phone2"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="basic-icon-default-email">Email <span className="text-danger">*</span></label>
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
                                                <div className="form-text">You can use letters, numbers & periods</div>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="panno">PAN No <span className="text-danger">*</span></label>
                                                <input
                                                    style={{ textTransform: 'uppercase' }}
                                                    type="text"
                                                    maxLength="10"
                                                    className="form-control"
                                                    id="panno"
                                                    name="panno"
                                                  
                                                    placeholder="ABCDE1234F"
                                                    aria-label="ABCDE1234F"
                                                    aria-describedby="basic-icon-default-fullname2"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="adhar">Adhar No <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="adhar"
                                                    name="adhar"
                                                    maxLength="12"
                                                  
                                                    placeholder="1234 5678 1234"
                                                    aria-label="1234 5678 1234"
                                                    aria-describedby="adhar"
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="dob">Date of Birth <span className="text-danger">*</span></label>
                                                <input
                                                    className="form-control"
                                                    type="date"
                                                    name="dob"
                                                
                                                    required
                                                    id="dob"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="ifsccode">IFSC Code</label>
                                                <input
                                                    type="text"
                                                    maxLength="11"
                                                    name="ifsccode"
                                                    required
                                                   
                                                    id="ifsccode"
                                                    className="form-control phone-mask"
                                                    placeholder=""
                                                    aria-label="HDFC0000001"
                                                    aria-describedby="basic-icon-default-phone2"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="bank_name">Bank Name</label>
                                                <input
                                                    type="text"
                                                    name="bank_name"
                                                    required
                                                    maxLength="20"
                                            
                                                    id="bank_name"
                                                    className="form-control phone-mask"
                                                    aria-label="HDFC Bank"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="account_no">Bank Account No</label>
                                                <input
                                                    type="text"
                                                    required
                                                 
                                                    name="account_no"
                                                    id="account_no"
                                                    className="form-control"
                                                    placeholder="1234567890"
                                                    aria-label="john.doe"
                                                    aria-describedby="account_no"
                                                    maxLength="20"
                                                    onInput={(e) => {
                                                        if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength);
                                                    }}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="bank_beneficiary_account">Bank Account Beneficiary Name</label>
                                                <input
                                                    type="text"
                                                    name="bank_beneficiary_account"
                                                    id="bank_beneficiary_account"
                                                    maxLength="30"
                                                  
                                                    required
                                                    className="form-control"
                                                    placeholder="Bob Martin"
                                                    aria-describedby="basic-default-password"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="gender">Gender <span className="text-danger">*</span></label>
                                                <select id="gender" required name="gender" className="form-select">
                                                    <option value="">--Select Gender--</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="permanent_address">Permanent Address <span className="text-danger">*</span></label>
                                                <textarea name="permanent_address" className="form-control" id="permanent_address"></textarea>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="current_address">Current Address <span className="text-danger">*</span></label>
                                                <textarea name="current_address" className="form-control" id="current_address"></textarea>
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="emergency_contact_no">Emergency Contact No <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    required
                                                    
                                                    name="emergency_contact_no"
                                                    id="emergency_contact_no"
                                                    className="form-control"
                                                    placeholder="9000000000"
                                                    maxLength="12"
                                                    onInput={(e) => {
                                                        if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength);
                                                    }}
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="emergency_contact_name">Emergency Contact Name <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    required
                                             
                                                    name="emergency_contact_name"
                                                    id="emergency_contact_name"
                                                    className="form-control"
                                                    maxLength="30"
                                                    placeholder="John Smith"
                                                />
                                            </div>
                                            <div className="mb-3 col-md-6">
                                                <label htmlFor="previous_employeer">Previous Employer <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    required
                                                   
                                                    name="previous_employeer"
                                                    id="previous_employeer"
                                                    className="form-control"
                                                    maxLength="50"
                                                    placeholder="ABC Pvt Ltd"
                                                />
                                            </div>
                                            <div className="row text-center">
                                                <div>
                                                    <button type="submit" name="button_2" value="button_2" className="btn btn-danger me-2">Save</button>
                                                    <button type="button" id="reset" onClick={resetPage} className="btn btn-outline-secondary">Clear</button>
                                                </div>
                                            </div>
                                        </div>
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

export default Profile;

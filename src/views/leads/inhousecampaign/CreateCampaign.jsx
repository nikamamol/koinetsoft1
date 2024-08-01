import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from "react";
import {
  Stack,
  OutlinedInput,
  InputLabel,
  MenuItem,
  Chip,
  Select,
  FormControl,
  Autocomplete,
  TextField
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CancelIcon from "@mui/icons-material/Cancel";
import EmailText from '../../../texteditor/EmailText';
import InitialEmail from '../../../texteditor/InitialEmail';

function CreateCampaign() {
  const [selectedNames, setSelectedNames] = useState([]);
  const [selectEmploySize, setSelectEmploySize] = useState([]);
  const [companyRevenue, setCompanyRevenue] = useState([]);
  const names = [
    "Administrator",
    "C-Level",
    "CXO",
    "Director",
    "Entry",
    "Executive",
    "Head of Department",
    "Manager",
    "Managing Director",
    "Owner",
    "Partner",
    "Senior",
    "Senior Management",
    "Supervisor",
    "Training",
    "Unpaid",
    "VP"
  ];

  const EmploySize = [
    "0-24",
    "25-99",
    "100-249",
    "250-499",
    "500-999",
    "1000-4999",
    "5000-9999",
    "10000-49999",
    "50000-100000",
    ">100000"
  ];
  const revenueOptions = [
    "$0 - $5 Million",
    "$5 - $49 Million",
    "$50 - $99 Million",
    "$100 - $249 Million",
    "$250 - $499 Million",
    "$500 - $999 Million",
    "$1 Billion+"
  ];

  return (
    <div>
      <Container fluid className='my-5 '>
        <Row className=''>
          <Col lg={3}>
          </Col>
          <Col lg={8}>
            <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'>Create Campaign</h4>
            </div>
            <div className="row">

              <div className="col-xxl">
                <div className="card mb-4">
                  <div className="card-header d-flex align-items-center justify-content-between p-3">
                    <small className="text-muted float-end">Fields marked <span className="text-danger">*</span> are mandatory</small>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="mb-3 col-md-6 client_select">
                        <label for="client_select" className="form-label">Campaign For Client  <span className="text-danger">*</span></label>
                        <select id="client_select" required="" name="client_select" className="form-select">
                          <option value="">--Select Client Name--</option>
                          <option value="-1">Add New Client</option>
                        </select>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="campaign_name" className="form-label">Campaign Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="campaign_name" name="campaign_name" value="" placeholder="Melt the Ice Campaign" aria-label="Melt the Ice Campaign" aria-describedby="basic-icon-default-fullname2" required="" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="campaign_code" className="form-label">Campaign Code <span className="text-danger">*</span></label>
                        <input type="text" name="campaign_code" id="campaign_code" className="form-control phone-mask" placeholder="ICE" aria-label="ICE" aria-describedby="basic-icon-default-phone2" required />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="start_date" className="form-label">Start Date <span className="text-danger">*</span></label>
                        <input type="date" name="start_date" id="start_date" className="form-control" min="2024-07-19" required />
                      </div>

                      <div className="mb-3 col-md-6">
                        <label for="end_date" className="form-label">End Date <span className="text-danger">*</span></label>
                        <input className="form-control" type="date" value="" min="2024-07-19" required="" name="end_date" id="end_date" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="campaign_type" className="form-label">Type Of Campaign  <span className="text-danger">*</span></label>
                        <select id="campaign_type" required="" name="campaign_type" className="form-select">
                          <option value="">--Select Campaign Type--</option>
                          <option value="Telemarketing">Telemarketing</option>
                          <option value="Email Marketing">Email Marketing</option>
                        </select>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="campaign_nature" className="form-label">Nature Of Campaign<span className="text-danger">*</span></label>
                        <select id="campaign_nature" required="" name="campaign_nature" className="form-select">
                          <option value="">--Select Campaign Nature--</option>
                          <option value="HQL">HQL</option>
                          <option value="SQL">SQL</option>
                          <option value="MQL">MQL</option>
                          <option value="WP">WP</option>
                          <option value="AG">AG</option>
                          <option value="EM">EM</option>

                        </select>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="target" className="form-label">Target</label>  <span className="text-danger"> *</span>
                        <input className="form-control" type="number" required="" placeholder="3000" name="target" value="" id="target" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="lead_per_day" className="form-label">Lead Per Day</label> <span className="text-danger"> *</span>
                        <input className="form-control" type="number" placeholder="100" value="" name="lead_per_day" required="" id="lead_per_day" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="voice_log_required" className="form-label">Voice Log Required</label> <span className="text-danger"> *</span>
                        <select id="voice_log_required" required="" name="voice_log_required" className="form-select">
                          <option value="">--Voice Log Required--</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="billing_day" className="form-label">Billing Day</label> <span className="text-danger"> *</span>
                        <select id="billing_day" required="" name="billing_day" className="form-select">
                          <option value="">--Billing Day--</option>
                          <option value="1">1st of the month</option>
                          <option value="2">2nd of the month</option>
                          <option value="3">3rd of the month</option>
                          <option value="4">4th of the month</option>
                          <option value="5">5th of the month</option>
                          <option value="6">6th of the month</option>
                          <option value="7">7th of the month</option>
                          <option value="8">8th of the month</option>
                          <option value="9">9th of the month</option>
                          <option value="10">10th of the month</option>
                          <option value="11">11th of the month</option>
                          <option value="12">12th of the month</option>
                          <option value="13">13th of the month</option>
                          <option value="14">14th of the month</option>
                          <option value="15">15th of the month</option>
                          <option value="16">16th of the month</option>
                          <option value="17">17th of the month</option>
                          <option value="18">18th of the month</option>
                          <option value="19">19th of the month</option>
                          <option value="20">20th of the month</option>
                          <option value="21">21st of the month</option>
                          <option value="22">22nd of the month</option>
                          <option value="23">23rd of the month</option>
                          <option value="24">24th of the month</option>
                          <option value="25">25th of the month</option>
                          <option value="26">26th of the month</option>
                          <option value="27">27th of the month</option>
                          <option value="28">28th of the month</option>
                          <option value="29">29th of the month (if applicable)</option>
                          <option value="30">30th of the month (if applicable)</option>

                        </select>
                      </div>
                      <div className="mb-3 col-md-6 client_select">
                        <label for="lead_per_day" className="form-label">CPL</label> <span className="text-danger"> *</span>
                        <input className="form-control" type="number" placeholder="100" name="cpl" required="" id="cpl" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="template" className="form-label">Landing Page</label>
                        <select id="template" required="" name="template" className="form-select">
                          <option value="">--Landing Template--</option>
                          <option value="1">
                            Template - 1
                          </option>
                          <option value="2">
                            Template - 2
                          </option>
                          <option value="3">
                            Template - 3
                          </option>

                        </select>
                        <a href="#" style={{ display: 'none' }} target="_blank" id="view_sample"> View Sample</a>
                        <a href="#" style={{ display: 'none' }} target="_blank" id="view_landing"> View Landing Page</a>
                      </div>
                      {/* sceocond part */}
                      <div className="">
                        <div className="text-center py-2 bg-light">Supervisor</div>
                      </div>
                      <div className="d-flex mt-2 ">
                        <div className="col-md-6 ">
                          <label for="campaign_nature" className="form-label">Supervisor<span className="text-danger">*</span></label>
                        </div>
                        <div className="col-md-6">
                          <label for="campaign_nature" className="form-label">Target<span className="text-danger">*</span></label>
                        </div>
                      </div>
                      <div className="list-group" id="supervisor_list" >
                        <div className="mb-3 col-md-12 d-flex">
                          <div className="col-md-6">
                            <label className="list-group-item">
                              <input className="form-check-input me-1 " name="" type="checkbox" value="ankush" />
                              Ankush Surywanshi
                            </label>
                          </div>
                          <div className="col-md-6">
                            <input className="form-control list-group-item" type="number" maxlength="5" disabled="" id="target_134" name="" min="1" placeholder="100" />
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="text-center py-2 bg-light">Assets</div>
                      </div>

                      <div className="mb-3 col-md-6 mt-2">
                        <label for="assets" className="form-label">Assets/Whitepaper</label> (.pdf) <span className="text-danger" id="validation_assets"> *</span>
                        <input className="form-control" type="file" required="" id="assets" name="assets[]" accept=".pdf" multiple="" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="script" className="form-label">Script</label> (.docx, .doc) <span className="text-danger" id="validation_script"> *</span>
                        <input className="form-control" type="file" id="script" accept=".docx, .doc" required="" name="script[]" multiple="" />

                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="supression" className="form-label">Supression</label> (.xlsx, .xls, .csv) <span className="text-danger" id="validation_suppression"> *</span>
                        <input className="form-control" type="file" required="" accept=".xlsx, .xls, .csv" id="supression" name="supression[]" multiple="" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="tal" className="form-label">TAL</label> (.xlsx, .xls, .csv) <span className="text-danger" id="validation_tal"> *</span>
                        <input className="form-control" required="" type="file" id="tal" accept=".xlsx, .xls, .csv" name="tal[]" multiple="" />
                      </div>
                      {/* third part */}
                      <div className="">
                        <div className="text-center py-2 bg-light">Additional</div>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="revenue" className="form-label">Revenue</label> <span className="text-danger"> *</span>
                        <input className="form-control" type="text" placeholder="1000000" name="revenue" value="" required="" id="revenue" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="company_size" className="form-label">Company Size</label><span className="text-danger"> *</span>
                        <input className="form-control" type="text" placeholder="50" name="company_size" value="" required="" id="company_size" />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="job_title" className="form-label">Job Title</label> <span className="text-danger"> *</span>
                        <textarea className="form-control enablebutton" type="text" placeholder="Director" name="job_title" required="" id="job_title"></textarea>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="geo" className="form-label">Geo</label> <span className="text-danger"> *</span>
                        <textarea className="form-control enablebutton" type="text" placeholder="USA" name="geo" required="" id="geo"></textarea>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="industry" className="form-label">Industry</label>  <span className="text-danger"> *</span>
                        <textarea className="form-control enablebutton" type="text" placeholder="Information Technology" name="industry" required="" id="industry"></textarea>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label for="note" className="form-label">Note</label> <span className="text-danger"> *</span>
                        <textarea className="form-control enablebutton" type="text" placeholder="Note" name="note" required="" id="note"></textarea>
                      </div>

                      {/* forth part */}
                      <div className="text-center py-2 bg-light">Supression &amp; ABM List</div>
                      <div className="mb-3 col-md-6 mt-2">
                        <label for="supression_list" className="form-label">Supression</label> (.xlsx, .xls, .csv) <span><a target="_blank" style={{ pointerEvents: 'visible' }} href=""> Download Template</a>
                          <a target="_blank" id="a_supression_list" style={{ display: 'none', pointerEvents: 'visible' }} href="/campaign-supression-list/">| View </a>
                        </span>
                        <input className="form-control" type="file" required="" accept=".xlsx, .xls, .csv" id="supression_list" name="supression_list" />
                      </div>
                      <div className="mb-3 col-md-6 mt-2">
                        <label for="abm" className="form-label">ABM</label> (.xlsx, .xls, .csv) <span><a target="_blank" style={{ pointerEvents: 'visible' }} href="/templates/abm_template.xls"> Download Template</a>
                          <a target="_blank" id="a_abm_list" style={{ display: 'none', pointerEvents: 'visible' }} href="#">| View </a></span>
                        <input className="form-control" type="file" required="" accept=".xlsx, .xls, .csv" id="abm_list" name="abm_list" />
                      </div>

                      <div id="div_view_contact_per_campaign">
                        <div className="text-center py-2 bg-light">Contacts Per Campaign</div>

                        <div className="mb-3 form-check form-switch mt-2">
                          <input className="form-check-input" name="contacts_per_campaign" type="checkbox" id="contacts_per_campaign" />
                          <label className="form-check-label" for="contacts_per_campaign">Does this campaign have contacts per campaign?</label>
                        </div>
                        <div id="div_contacts_per_campaign" style={{ display: 'block' }}>
                          <div className="row">
                            <div className="mb-3 col-md-6" id="div_abm_cpc" style={{ display: 'bkock' }}>
                              <label for="abm_cpc" className="form-label">ABM CPC</label> <span className="text-danger"> *</span>
                              <select id="abm_cpc" required="" name="abm_cpc" className="form-select">
                                <option value="">--Select--</option>
                                <option value="Company">Company</option>
                                <option value="Domain">Domain</option>
                                <option value="State">State</option>
                                <option value="Zipcode">Zipcode</option>
                              </select>
                            </div>
                            <div className="mb-3 col-md-6" id="div_non_abm_cpc" style={{ display: 'block' }}>
                              <label for="non_abm_cpc" className="form-label">Non ABM CPC</label> <span className="text-danger"> *</span>
                              <select id="non_abm_cpc" required="" name="non_abm_cpc" className="form-select">
                                <option value="">--Select--</option>
                                <option value="Company">Company</option>
                                <option value="Domain">Domain</option>
                                <option value="Zipcode">Zipcode</option>
                              </select>
                            </div>
                            <div className="mb-3 col-md-6 client_select">
                              <label for="no_of_contacts" className="form-label">No Of Contacts</label> <span className="text-danger"> *</span>
                              <input className="form-control" type="number" placeholder="100" name="no_of_contacts" required="" id="no_of_contacts" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* five part */}

                      <div className="text-center py-2 bg-light">Data Filter</div>
                      <div id="div_data_filter" >
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label for="industry_filter" className="form-label">Industry</label>
                            <div className="autocomplete-container">

                              <input type="text" id="industry_filter" name="industry_filter" placeholder="Select Industry" value="" className="form-control choices__inner" />
                              <ul className="autocomplete-list" id="industry-list"></ul>
                              <div className="selected-items" id="industry-items"></div>
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="function_filter" className="form-label">Function  <span className="text-danger">*</span></label>
                            <div className="autocomplete-container">

                              <input type="text" id="function_filter" name="function_filter" placeholder="Select Function" value="" className="form-control choices__inner" />
                              <ul className="autocomplete-list" id="function-list"></ul>
                              <div className="selected-items" id="function-items"></div>
                            </div>
                          </div>
                          {/* Senority Level */}
                          <div className="mb-3 col-md-6">
                            <Autocomplete

                              multiple
                              id="tags-standard"
                              options={names}
                              getOptionLabel={(option) => option}
                              defaultValue={[]} // set default value

                              disableCloseOnSelect
                              renderOption={(props, option, { selected }) => (
                                <MenuItem
                                  key={option}
                                  value={option}
                                  sx={{ justifyContent: "space-between" }}
                                  {...props}
                                >
                                  {option}
                                  {selected ? <CheckIcon color="info" /> : null}
                                </MenuItem>
                              )}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  variant="outlined"
                                  label="Senority Level"
                                  placeholder="Favorites"
                                />
                              )}
                            />
                          </div>

                          {/* employ size */}
                          <div className="mb-3 col-md-6">

                            <FormControl sx={{ width: '100%' }}>
                              <InputLabel>Employee Size</InputLabel>
                              <Select
                                multiple
                                value={selectEmploySize}
                                onChange={(e) => setSelectEmploySize(e.target.value)}
                                input={<OutlinedInput label="Employee Size" />}
                                renderValue={(selected) => (
                                  <Stack gap={1} direction="row" flexWrap="wrap">
                                    {selected.map((value) => (
                                      <Chip
                                        key={value}
                                        label={value}
                                        onDelete={() =>
                                          setSelectEmploySize(selectEmploySize.filter((item) => item !== value))
                                        }
                                        deleteIcon={
                                          <CancelIcon
                                            onMouseDown={(event) => event.stopPropagation()}
                                          />
                                        }
                                      />
                                    ))}
                                  </Stack>
                                )}
                              >
                                {EmploySize.map((name) => (
                                  <MenuItem
                                    key={name}
                                    value={name}
                                    sx={{ justifyContent: 'space-between' }}
                                  >
                                    {name}
                                    {selectEmploySize.includes(name) ? <CheckIcon color="info" /> : null}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>


                          <div className="mb-3 col-md-6">
                            <label for="company_filter" className="form-label">Company</label>
                            <div className="autocomplete-container">

                              <input type="text" id="company_filter" name="company_filter" placeholder="Select Company" value="" className="form-control choices__inner" />
                              <ul className="autocomplete-list" id="company-list"></ul>
                              <div className="selected-items" id="company-items"></div>
                            </div>
                          </div>

                          <div className=" col-md-6">
                            <label for="jobtitle_filter" className="form-label">Job Title</label>
                            <div className="autocomplete-container">

                              <input type="text" id="jobtitle_filter" name="jobtitle_filter" placeholder="Select Jobtile" value="" className="form-control choices__inner" />
                              <ul className="autocomplete-list" id="jobtitle-list"></ul>
                              <div className="selected-items" id="jobtitle-items"></div>
                            </div>
                          </div>
                          {/* revenue */}
                          <div className="mb-3 col-md-6">
                            {/* <label for="country_filter" className="form-label">Revenue</label> */}
                            <FormControl sx={{ width: '100%' }}>
                              <InputLabel>Revenue</InputLabel>
                              <Select
                                multiple
                                value={companyRevenue}
                                onChange={(e) => setCompanyRevenue(e.target.value)}
                                input={<OutlinedInput label="Revenue" />}
                                renderValue={(selected) => (
                                  <Stack gap={1} direction="row" flexWrap="wrap">
                                    {selected.map((value) => (
                                      <Chip
                                        key={value}
                                        label={value}
                                        onDelete={() =>
                                          setCompanyRevenue(companyRevenue.filter((item) => item !== value))
                                        }
                                        deleteIcon={
                                          <CancelIcon
                                            onMouseDown={(event) => event.stopPropagation()}
                                          />
                                        }
                                      />
                                    ))}
                                  </Stack>
                                )}
                              >
                                {revenueOptions.map((option) => (
                                  <MenuItem
                                    key={option}
                                    value={option}
                                    sx={{ justifyContent: 'space-between' }}
                                  >
                                    {option}
                                    {companyRevenue.includes(option) ? <CheckIcon color="info" /> : null}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label for="country_filter" className="form-label">Country</label>
                            <div className="autocomplete-container">

                              <input type="text" id="company_filter" name="country_filter" placeholder="Select Country" value="" className="form-control choices__inner" />
                              <ul className="autocomplete-list" id="country-list"></ul>
                              <div className="selected-items" id="country-items"></div>
                            </div>
                          </div>

                          <div className=" col-md-6">
                            <label for="city_filter" className="form-label">City</label>
                            <div className="autocomplete-container">

                              <input type="text" id="city_filter" name="company_filter" placeholder="Select Company" value="" className="form-control choices__inner" />
                              <ul className="autocomplete-list" id="city-list"></ul>
                              <div className="selected-items" id="city-items"></div>
                            </div>
                          </div>

                          <div className=" col-md-6">
                            <label for="zipCode_filter" className="form-label">Zip Code</label>
                            <div className="autocomplete-container">

                              <input type="text" id="jobtitle_filter" name="zipCode_filter" placeholder="Select Zip Code" value="" className="form-control choices__inner" />
                              <ul className="autocomplete-list" id="zipCode-list"></ul>
                              <div className="selected-items" id="zipCode-items"></div>
                            </div>
                          </div>

                          {/* seven part */}
                          <div id="div_additional_questions" >
                            {/* <div className="text-center py-2 bg-light">Save</div> */}
                            <button className="btn btn-outline-danger w-100 mt-2">
                              Save Campaign
                            </button>
                          </div>
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
  )
}

export default CreateCampaign

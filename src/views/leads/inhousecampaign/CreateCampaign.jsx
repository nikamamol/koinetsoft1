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
                      <div className="d-flex mt-2">
                        <div className="col-md-6">
                          <label for="campaign_nature" className="form-label">SUPERVISOR<span className="text-danger">*</span></label>
                        </div>
                        <div className="col-md-6">
                          <label for="campaign_nature" className="form-label">Target<span className="text-danger">*</span></label>
                        </div>
                      </div>
                      <div className="list-group" id="supervisor_list" >
                        <div className="mb-3 col-md-12 d-flex">
                          <div className="col-md-6">
                            <label className="list-group-item">
                              <input className="form-check-input me-1 supervisor_check" name="" type="checkbox" value="134" id="134" />
                              Supriya Mhaske
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
                      {/* display none part  add text editor*/}
                      {/* <div className="row"  id="div_landing_page">
                        <div className="divider">
                          <div className="divider-text">Landing Page</div>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label for="template_title" className="form-label">Title/Header<span className="text-danger">*</span>
                          </label>
                          <input type="text" name="template_title" className="form-control" id="template_title" placeholder="Beyond on-demand for DDoS defense" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label for="logo" className="form-label">Logo</label> (.png, .jpeg, .jpg, .svg) 200px × 74 px <span className="text-danger"> *</span>
                          <a href="#" target="_blank" id="view_logo" style={{display: 'none'}}>View Logo</a>
                          <input className="form-control" type="file" id="logo" name="logo" accept=".png, .jpeg, .jpg, .svg" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label for="banner" className="form-label">Banner Image</label> (.png, .jpeg, .jpg) 1170px × 267 px <span className="text-danger"> *</span>
                          <a href="#" target="_blank" id="view_banner" style={{display: 'none'}}>View Banner</a>
                          <input className="form-control" type="file" id="banner" name="banner" accept=".png, .jpeg, .jpg" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label for="receive_comminication" className="form-label">receive marketing communications</label>
                          <span className="text-danger"> *</span>
                          <input className="form-control" type="text" placeholder="I agree to receive marketing communications and promotional offers from Cloudflare." name="receive_comminication" id="receive_comminication" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label for="button_text" className="form-label">Button Text</label>
                          <span className="text-danger"> *</span>
                          <input className="form-control" type="text" placeholder="Download Now" name="button_text" id="button_text" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label for="document" className="form-label">Browse/Documents</label>
                          <span className="text-danger"> *</span>
                          <a href="#" target="_blank" id="view_document" style={{display: 'none'}}>View Document</a>
                          <input className="form-control" type="file" id="document" name="document" />
                        </div>
                        <div className="mb-3">
                          <label for="form_desc" className="form-label">Description in form</label>
                          <textarea id="form_desc" name="form_desc" style="visibility: hidden; display: none;"></textarea><div id="cke_form_desc" className="cke_3 cke cke_reset cke_chrome cke_editor_form_desc cke_ltr cke_browser_webkit" dir="ltr" lang="en" role="application" aria-labelledby="cke_form_desc_arialbl"><span id="cke_form_desc_arialbl" className="cke_voice_label">Rich Text Editor, form_desc</span><div className="cke_inner cke_reset" role="presentation"><span id="cke_3_top" className="cke_top cke_reset_all" role="presentation" style="height: auto; user-select: none;"><span id="cke_126" className="cke_voice_label">Editor toolbars</span><span id="cke_3_toolbox" className="cke_toolbox" role="group" aria-labelledby="cke_126" onmousedown="return false;"><span id="cke_129" className="cke_toolbar" aria-labelledby="cke_129_label" role="toolbar"><span id="cke_129_label" className="cke_voice_label">Clipboard/Undo</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_130" className="cke_button cke_button__cut cke_button_disabled " href="javascript:void('Cut')" title="Cut (Ctrl+X)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_130_label" aria-describedby="cke_130_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(198,event);" onfocus="return CKEDITOR.tools.callFunction(199,event);" onclick="CKEDITOR.tools.callFunction(200,this);return false;"><span className="cke_button_icon cke_button__cut_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -312px;background-size:auto;">&nbsp;</span><span id="cke_130_label" className="cke_button_label cke_button__cut_label" aria-hidden="false">Cut</span><span id="cke_130_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+X</span></a><a id="cke_131" className="cke_button cke_button__copy cke_button_disabled " href="javascript:void('Copy')" title="Copy (Ctrl+C)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_131_label" aria-describedby="cke_131_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(201,event);" onfocus="return CKEDITOR.tools.callFunction(202,event);" onclick="CKEDITOR.tools.callFunction(203,this);return false;"><span className="cke_button_icon cke_button__copy_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -264px;background-size:auto;">&nbsp;</span><span id="cke_131_label" className="cke_button_label cke_button__copy_label" aria-hidden="false">Copy</span><span id="cke_131_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+C</span></a><a id="cke_132" className="cke_button cke_button__paste cke_button_off" href="javascript:void('Paste')" title="Paste (Ctrl+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_132_label" aria-describedby="cke_132_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(204,event);" onfocus="return CKEDITOR.tools.callFunction(205,event);" onclick="CKEDITOR.tools.callFunction(206,this);return false;"><span className="cke_button_icon cke_button__paste_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -360px;background-size:auto;">&nbsp;</span><span id="cke_132_label" className="cke_button_label cke_button__paste_label" aria-hidden="false">Paste</span><span id="cke_132_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+V</span></a><a id="cke_133" className="cke_button cke_button__pastetext cke_button_off" href="javascript:void('Paste as plain text')" title="Paste as plain text (Ctrl+Shift+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_133_label" aria-describedby="cke_133_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(207,event);" onfocus="return CKEDITOR.tools.callFunction(208,event);" onclick="CKEDITOR.tools.callFunction(209,this);return false;"><span className="cke_button_icon cke_button__pastetext_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1872px;background-size:auto;">&nbsp;</span><span id="cke_133_label" className="cke_button_label cke_button__pastetext_label" aria-hidden="false">Paste as plain text</span><span id="cke_133_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+Shift+V</span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_134" className="cke_button cke_button__undo cke_button_disabled " href="javascript:void('Undo')" title="Undo (Ctrl+Z)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_134_label" aria-describedby="cke_134_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(210,event);" onfocus="return CKEDITOR.tools.callFunction(211,event);" onclick="CKEDITOR.tools.callFunction(212,this);return false;"><span className="cke_button_icon cke_button__undo_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2448px;background-size:auto;">&nbsp;</span><span id="cke_134_label" className="cke_button_label cke_button__undo_label" aria-hidden="false">Undo</span><span id="cke_134_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+Z</span></a><a id="cke_135" className="cke_button cke_button__redo cke_button_disabled " href="javascript:void('Redo')" title="Redo (Ctrl+Y)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_135_label" aria-describedby="cke_135_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(213,event);" onfocus="return CKEDITOR.tools.callFunction(214,event);" onclick="CKEDITOR.tools.callFunction(215,this);return false;"><span className="cke_button_icon cke_button__redo_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2400px;background-size:auto;">&nbsp;</span><span id="cke_135_label" className="cke_button_label cke_button__redo_label" aria-hidden="false">Redo</span><span id="cke_135_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+Y</span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_136" className="cke_toolbar" aria-labelledby="cke_136_label" role="toolbar"><span id="cke_136_label" className="cke_voice_label">Editing</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_137" className="cke_button cke_button__scayt cke_button_off cke_button_expandable" href="javascript:void('Spell Check As You Type')" title="Spell Check As You Type" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_137_label" aria-describedby="cke_137_description" aria-haspopup="menu" aria-disabled="false" aria-expanded="false" onkeydown="return CKEDITOR.tools.callFunction(216,event);" onfocus="return CKEDITOR.tools.callFunction(217,event);" onclick="CKEDITOR.tools.callFunction(218,this);return false;"><span className="cke_button_icon cke_button__scayt_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2040px;background-size:auto;">&nbsp;</span><span id="cke_137_label" className="cke_button_label cke_button__scayt_label" aria-hidden="false">Spell Check As You Type</span><span id="cke_137_description" className="cke_button_label" aria-hidden="false"></span><span className="cke_button_arrow"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_138" className="cke_toolbar" aria-labelledby="cke_138_label" role="toolbar"><span id="cke_138_label" className="cke_voice_label">Links</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_139" className="cke_button cke_button__link cke_button_off" href="javascript:void('Link')" title="Link (Ctrl+K)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_139_label" aria-describedby="cke_139_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(219,event);" onfocus="return CKEDITOR.tools.callFunction(220,event);" onclick="CKEDITOR.tools.callFunction(221,this);return false;"><span className="cke_button_icon cke_button__link_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1512px;background-size:auto;">&nbsp;</span><span id="cke_139_label" className="cke_button_label cke_button__link_label" aria-hidden="false">Link</span><span id="cke_139_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+K</span></a><a id="cke_140" className="cke_button cke_button__unlink cke_button_disabled " href="javascript:void('Unlink')" title="Unlink" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_140_label" aria-describedby="cke_140_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(222,event);" onfocus="return CKEDITOR.tools.callFunction(223,event);" onclick="CKEDITOR.tools.callFunction(224,this);return false;"><span className="cke_button_icon cke_button__unlink_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1536px;background-size:auto;">&nbsp;</span><span id="cke_140_label" className="cke_button_label cke_button__unlink_label" aria-hidden="false">Unlink</span><span id="cke_140_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_141" className="cke_button cke_button__anchor cke_button_off" href="javascript:void('Anchor')" title="Anchor" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_141_label" aria-describedby="cke_141_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(225,event);" onfocus="return CKEDITOR.tools.callFunction(226,event);" onclick="CKEDITOR.tools.callFunction(227,this);return false;"><span className="cke_button_icon cke_button__anchor_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1488px;background-size:auto;">&nbsp;</span><span id="cke_141_label" className="cke_button_label cke_button__anchor_label" aria-hidden="false">Anchor</span><span id="cke_141_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_142" className="cke_toolbar" aria-labelledby="cke_142_label" role="toolbar"><span id="cke_142_label" className="cke_voice_label">Insert</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_143" className="cke_button cke_button__image cke_button_off" href="javascript:void('Image')" title="Image" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_143_label" aria-describedby="cke_143_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(228,event);" onfocus="return CKEDITOR.tools.callFunction(229,event);" onclick="CKEDITOR.tools.callFunction(230,this);return false;"><span className="cke_button_icon cke_button__image_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1224px;background-size:auto;">&nbsp;</span><span id="cke_143_label" className="cke_button_label cke_button__image_label" aria-hidden="false">Image</span><span id="cke_143_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_144" className="cke_button cke_button__table cke_button_off" href="javascript:void('Table')" title="Table" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_144_label" aria-describedby="cke_144_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(231,event);" onfocus="return CKEDITOR.tools.callFunction(232,event);" onclick="CKEDITOR.tools.callFunction(233,this);return false;"><span className="cke_button_icon cke_button__table_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2280px;background-size:auto;">&nbsp;</span><span id="cke_144_label" className="cke_button_label cke_button__table_label" aria-hidden="false">Table</span><span id="cke_144_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_145" className="cke_button cke_button__horizontalrule cke_button_off" href="javascript:void('Insert Horizontal Line')" title="Insert Horizontal Line" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_145_label" aria-describedby="cke_145_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(234,event);" onfocus="return CKEDITOR.tools.callFunction(235,event);" onclick="CKEDITOR.tools.callFunction(236,this);return false;"><span className="cke_button_icon cke_button__horizontalrule_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1176px;background-size:auto;">&nbsp;</span><span id="cke_145_label" className="cke_button_label cke_button__horizontalrule_label" aria-hidden="false">Insert Horizontal Line</span><span id="cke_145_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_146" className="cke_button cke_button__specialchar cke_button_off" href="javascript:void('Insert Special Character')" title="Insert Special Character" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_146_label" aria-describedby="cke_146_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(237,event);" onfocus="return CKEDITOR.tools.callFunction(238,event);" onclick="CKEDITOR.tools.callFunction(239,this);return false;"><span className="cke_button_icon cke_button__specialchar_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2256px;background-size:auto;">&nbsp;</span><span id="cke_146_label" className="cke_button_label cke_button__specialchar_label" aria-hidden="false">Insert Special Character</span><span id="cke_146_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_147" className="cke_toolbar" aria-labelledby="cke_147_label" role="toolbar"><span id="cke_147_label" className="cke_voice_label">Tools</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_148" className="cke_button cke_button__maximize cke_button_off" href="javascript:void('Maximize')" title="Maximize" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_148_label" aria-describedby="cke_148_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(240,event);" onfocus="return CKEDITOR.tools.callFunction(241,event);" onclick="CKEDITOR.tools.callFunction(242,this);return false;"><span className="cke_button_icon cke_button__maximize_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1680px;background-size:auto;">&nbsp;</span><span id="cke_148_label" className="cke_button_label cke_button__maximize_label" aria-hidden="false">Maximize</span><span id="cke_148_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_149" className="cke_toolbar" aria-labelledby="cke_149_label" role="toolbar"><span id="cke_149_label" className="cke_voice_label">Document</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_150" className="cke_button cke_button__sourcedialog cke_button_off" href="javascript:void('Source')" title="Source" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_150_label" aria-describedby="cke_150_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(243,event);" onfocus="return CKEDITOR.tools.callFunction(244,event);" onclick="CKEDITOR.tools.callFunction(245,this);return false;"><span className="cke_button_icon cke_button__sourcedialog_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2232px;background-size:auto;">&nbsp;</span><span id="cke_150_label" className="cke_button_label cke_button__sourcedialog_label" aria-hidden="false">Source</span><span id="cke_150_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span className="cke_toolbar_break"></span><span id="cke_151" className="cke_toolbar" aria-labelledby="cke_151_label" role="toolbar"><span id="cke_151_label" className="cke_voice_label">Basic Styles</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_152" className="cke_button cke_button__bold cke_button_off" href="javascript:void('Bold')" title="Bold (Ctrl+B)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_152_label" aria-describedby="cke_152_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(246,event);" onfocus="return CKEDITOR.tools.callFunction(247,event);" onclick="CKEDITOR.tools.callFunction(248,this);return false;"><span className="cke_button_icon cke_button__bold_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -24px;background-size:auto;">&nbsp;</span><span id="cke_152_label" className="cke_button_label cke_button__bold_label" aria-hidden="false">Bold</span><span id="cke_152_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+B</span></a><a id="cke_153" className="cke_button cke_button__italic cke_button_off" href="javascript:void('Italic')" title="Italic (Ctrl+I)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_153_label" aria-describedby="cke_153_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(249,event);" onfocus="return CKEDITOR.tools.callFunction(250,event);" onclick="CKEDITOR.tools.callFunction(251,this);return false;"><span className="cke_button_icon cke_button__italic_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -48px;background-size:auto;">&nbsp;</span><span id="cke_153_label" className="cke_button_label cke_button__italic_label" aria-hidden="false">Italic</span><span id="cke_153_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+I</span></a><a id="cke_154" className="cke_button cke_button__underline cke_button_off" href="javascript:void('Underline')" title="Underline (Ctrl+U)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_154_label" aria-describedby="cke_154_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(252,event);" onfocus="return CKEDITOR.tools.callFunction(253,event);" onclick="CKEDITOR.tools.callFunction(254,this);return false;"><span className="cke_button_icon cke_button__underline_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -144px;background-size:auto;">&nbsp;</span><span id="cke_154_label" className="cke_button_label cke_button__underline_label" aria-hidden="false">Underline</span><span id="cke_154_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+U</span></a><a id="cke_155" className="cke_button cke_button__strike cke_button_off" href="javascript:void('Strikethrough')" title="Strikethrough" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_155_label" aria-describedby="cke_155_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(255,event);" onfocus="return CKEDITOR.tools.callFunction(256,event);" onclick="CKEDITOR.tools.callFunction(257,this);return false;"><span className="cke_button_icon cke_button__strike_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -72px;background-size:auto;">&nbsp;</span><span id="cke_155_label" className="cke_button_label cke_button__strike_label" aria-hidden="false">Strikethrough</span><span id="cke_155_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_156" className="cke_button cke_button__subscript cke_button_off" href="javascript:void('Subscript')" title="Subscript" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_156_label" aria-describedby="cke_156_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(258,event);" onfocus="return CKEDITOR.tools.callFunction(259,event);" onclick="CKEDITOR.tools.callFunction(260,this);return false;"><span className="cke_button_icon cke_button__subscript_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -96px;background-size:auto;">&nbsp;</span><span id="cke_156_label" className="cke_button_label cke_button__subscript_label" aria-hidden="false">Subscript</span><span id="cke_156_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_157" className="cke_button cke_button__superscript cke_button_off" href="javascript:void('Superscript')" title="Superscript" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_157_label" aria-describedby="cke_157_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(261,event);" onfocus="return CKEDITOR.tools.callFunction(262,event);" onclick="CKEDITOR.tools.callFunction(263,this);return false;"><span className="cke_button_icon cke_button__superscript_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -120px;background-size:auto;">&nbsp;</span><span id="cke_157_label" className="cke_button_label cke_button__superscript_label" aria-hidden="false">Superscript</span><span id="cke_157_description" className="cke_button_label" aria-hidden="false"></span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_158" className="cke_button cke_button__removeformat cke_button_off" href="javascript:void('Remove Format')" title="Remove Format" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_158_label" aria-describedby="cke_158_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(264,event);" onfocus="return CKEDITOR.tools.callFunction(265,event);" onclick="CKEDITOR.tools.callFunction(266,this);return false;"><span className="cke_button_icon cke_button__removeformat_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1992px;background-size:auto;">&nbsp;</span><span id="cke_158_label" className="cke_button_label cke_button__removeformat_label" aria-hidden="false">Remove Format</span><span id="cke_158_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_159" className="cke_toolbar" aria-labelledby="cke_159_label" role="toolbar"><span id="cke_159_label" className="cke_voice_label">Paragraph</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_160" className="cke_button cke_button__numberedlist cke_button_off" href="javascript:void('Insert/Remove Numbered List')" title="Insert/Remove Numbered List" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_160_label" aria-describedby="cke_160_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(267,event);" onfocus="return CKEDITOR.tools.callFunction(268,event);" onclick="CKEDITOR.tools.callFunction(269,this);return false;"><span className="cke_button_icon cke_button__numberedlist_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1632px;background-size:auto;">&nbsp;</span><span id="cke_160_label" className="cke_button_label cke_button__numberedlist_label" aria-hidden="false">Insert/Remove Numbered List</span><span id="cke_160_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_161" className="cke_button cke_button__bulletedlist cke_button_off" href="javascript:void('Insert/Remove Bulleted List')" title="Insert/Remove Bulleted List" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_161_label" aria-describedby="cke_161_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(270,event);" onfocus="return CKEDITOR.tools.callFunction(271,event);" onclick="CKEDITOR.tools.callFunction(272,this);return false;"><span className="cke_button_icon cke_button__bulletedlist_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1584px;background-size:auto;">&nbsp;</span><span id="cke_161_label" className="cke_button_label cke_button__bulletedlist_label" aria-hidden="false">Insert/Remove Bulleted List</span><span id="cke_161_description" className="cke_button_label" aria-hidden="false"></span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_162" className="cke_button cke_button__outdent cke_button_disabled " href="javascript:void('Decrease Indent')" title="Decrease Indent" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_162_label" aria-describedby="cke_162_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(273,event);" onfocus="return CKEDITOR.tools.callFunction(274,event);" onclick="CKEDITOR.tools.callFunction(275,this);return false;"><span className="cke_button_icon cke_button__outdent_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1320px;background-size:auto;">&nbsp;</span><span id="cke_162_label" className="cke_button_label cke_button__outdent_label" aria-hidden="false">Decrease Indent</span><span id="cke_162_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_163" className="cke_button cke_button__indent cke_button_off" href="javascript:void('Increase Indent')" title="Increase Indent" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_163_label" aria-describedby="cke_163_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(276,event);" onfocus="return CKEDITOR.tools.callFunction(277,event);" onclick="CKEDITOR.tools.callFunction(278,this);return false;"><span className="cke_button_icon cke_button__indent_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1272px;background-size:auto;">&nbsp;</span><span id="cke_163_label" className="cke_button_label cke_button__indent_label" aria-hidden="false">Increase Indent</span><span id="cke_163_description" className="cke_button_label" aria-hidden="false"></span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_164" className="cke_button cke_button__blockquote cke_button_off" href="javascript:void('Block Quote')" title="Block Quote" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_164_label" aria-describedby="cke_164_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(279,event);" onfocus="return CKEDITOR.tools.callFunction(280,event);" onclick="CKEDITOR.tools.callFunction(281,this);return false;"><span className="cke_button_icon cke_button__blockquote_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -216px;background-size:auto;">&nbsp;</span><span id="cke_164_label" className="cke_button_label cke_button__blockquote_label" aria-hidden="false">Block Quote</span><span id="cke_164_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_165" className="cke_toolbar" aria-labelledby="cke_165_label" role="toolbar"><span id="cke_165_label" className="cke_voice_label">Styles</span><span className="cke_toolbar_start"></span><span id="cke_127" className="cke_combo cke_combo__styles cke_combo_off" role="presentation"><span id="cke_127_label" className="cke_combo_label">Styles</span><a className="cke_combo_button" title="Formatting Styles" tabindex="-1" href="javascript:void('Formatting Styles')" hidefocus="true" role="button" aria-labelledby="cke_127_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(283,event,this);" onfocus="return CKEDITOR.tools.callFunction(284,event);" onclick="CKEDITOR.tools.callFunction(282,this);return false;" aria-expanded="false"><span id="cke_127_text" className="cke_combo_text cke_combo_inlinelabel">Styles</span><span className="cke_combo_open"><span className="cke_combo_arrow"></span></span></a></span><span id="cke_128" className="cke_combo cke_combo__format cke_combo_off" role="presentation"><span id="cke_128_label" className="cke_combo_label">Format</span><a className="cke_combo_button" title="Paragraph Format" tabindex="-1" href="javascript:void('Paragraph Format')" hidefocus="true" role="button" aria-labelledby="cke_128_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(286,event,this);" onfocus="return CKEDITOR.tools.callFunction(287,event);" onclick="CKEDITOR.tools.callFunction(285,this);return false;" aria-expanded="false"><span id="cke_128_text" className="cke_combo_text cke_combo_inlinelabel">Format</span><span className="cke_combo_open"><span className="cke_combo_arrow"></span></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_166" className="cke_toolbar cke_toolbar_last" aria-labelledby="cke_166_label" role="toolbar"><span id="cke_166_label" className="cke_voice_label">about</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_167" className="cke_button cke_button__about cke_button_off" href="javascript:void('About CKEditor 4')" title="About CKEditor 4" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_167_label" aria-describedby="cke_167_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(288,event);" onfocus="return CKEDITOR.tools.callFunction(289,event);" onclick="CKEDITOR.tools.callFunction(290,this);return false;"><span className="cke_button_icon cke_button__about_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 0px;background-size:auto;">&nbsp;</span><span id="cke_167_label" className="cke_button_label cke_button__about_label" aria-hidden="false">About CKEditor 4</span><span id="cke_167_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span></span></span><div id="cke_3_contents" className="cke_contents cke_reset" role="presentation" style="height: 200px;"><span id="cke_171" className="cke_voice_label">Press ALT 0 for help</span><iframe src="" frameborder="0" className="cke_wysiwyg_frame cke_reset" title="Editor, form_desc" aria-describedby="cke_171" tabindex="0" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div><span id="cke_3_bottom" className="cke_bottom cke_reset_all" role="presentation" style="user-select: none;"><span id="cke_3_resizer" className="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Resize" onmousedown="CKEDITOR.tools.callFunction(197, event)">◢</span><span id="cke_3_path_label" className="cke_voice_label">Elements path</span><span id="cke_3_path" className="cke_path" role="group" aria-labelledby="cke_3_path_label"><span className="cke_path_empty">&nbsp;</span></span></span></div></div>
                        </div>
                        <div className="mb-3">
                          <label for="main_desc" className="form-label">Main Description</label>
                          <textarea id="main_desc" name="main_desc" style="visibility: hidden; display: none;"></textarea><div id="cke_main_desc" className="cke_4 cke cke_reset cke_chrome cke_editor_main_desc cke_ltr cke_browser_webkit" dir="ltr" lang="en" role="application" aria-labelledby="cke_main_desc_arialbl"><span id="cke_main_desc_arialbl" className="cke_voice_label">Rich Text Editor, main_desc</span><div className="cke_inner cke_reset" role="presentation"><span id="cke_4_top" className="cke_top cke_reset_all" role="presentation" style="height: auto; user-select: none;"><span id="cke_178" className="cke_voice_label">Editor toolbars</span><span id="cke_4_toolbox" className="cke_toolbox" role="group" aria-labelledby="cke_178" onmousedown="return false;"><span id="cke_181" className="cke_toolbar" aria-labelledby="cke_181_label" role="toolbar"><span id="cke_181_label" className="cke_voice_label">Clipboard/Undo</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_182" className="cke_button cke_button__cut cke_button_disabled " href="javascript:void('Cut')" title="Cut (Ctrl+X)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_182_label" aria-describedby="cke_182_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(296,event);" onfocus="return CKEDITOR.tools.callFunction(297,event);" onclick="CKEDITOR.tools.callFunction(298,this);return false;"><span className="cke_button_icon cke_button__cut_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -312px;background-size:auto;">&nbsp;</span><span id="cke_182_label" className="cke_button_label cke_button__cut_label" aria-hidden="false">Cut</span><span id="cke_182_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+X</span></a><a id="cke_183" className="cke_button cke_button__copy cke_button_disabled " href="javascript:void('Copy')" title="Copy (Ctrl+C)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_183_label" aria-describedby="cke_183_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(299,event);" onfocus="return CKEDITOR.tools.callFunction(300,event);" onclick="CKEDITOR.tools.callFunction(301,this);return false;"><span className="cke_button_icon cke_button__copy_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -264px;background-size:auto;">&nbsp;</span><span id="cke_183_label" className="cke_button_label cke_button__copy_label" aria-hidden="false">Copy</span><span id="cke_183_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+C</span></a><a id="cke_184" className="cke_button cke_button__paste cke_button_off" href="javascript:void('Paste')" title="Paste (Ctrl+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_184_label" aria-describedby="cke_184_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(302,event);" onfocus="return CKEDITOR.tools.callFunction(303,event);" onclick="CKEDITOR.tools.callFunction(304,this);return false;"><span className="cke_button_icon cke_button__paste_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -360px;background-size:auto;">&nbsp;</span><span id="cke_184_label" className="cke_button_label cke_button__paste_label" aria-hidden="false">Paste</span><span id="cke_184_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+V</span></a><a id="cke_185" className="cke_button cke_button__pastetext cke_button_off" href="javascript:void('Paste as plain text')" title="Paste as plain text (Ctrl+Shift+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_185_label" aria-describedby="cke_185_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(305,event);" onfocus="return CKEDITOR.tools.callFunction(306,event);" onclick="CKEDITOR.tools.callFunction(307,this);return false;"><span className="cke_button_icon cke_button__pastetext_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1872px;background-size:auto;">&nbsp;</span><span id="cke_185_label" className="cke_button_label cke_button__pastetext_label" aria-hidden="false">Paste as plain text</span><span id="cke_185_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+Shift+V</span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_186" className="cke_button cke_button__undo cke_button_disabled " href="javascript:void('Undo')" title="Undo (Ctrl+Z)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_186_label" aria-describedby="cke_186_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(308,event);" onfocus="return CKEDITOR.tools.callFunction(309,event);" onclick="CKEDITOR.tools.callFunction(310,this);return false;"><span className="cke_button_icon cke_button__undo_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2448px;background-size:auto;">&nbsp;</span><span id="cke_186_label" className="cke_button_label cke_button__undo_label" aria-hidden="false">Undo</span><span id="cke_186_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+Z</span></a><a id="cke_187" className="cke_button cke_button__redo cke_button_disabled " href="javascript:void('Redo')" title="Redo (Ctrl+Y)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_187_label" aria-describedby="cke_187_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(311,event);" onfocus="return CKEDITOR.tools.callFunction(312,event);" onclick="CKEDITOR.tools.callFunction(313,this);return false;"><span className="cke_button_icon cke_button__redo_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2400px;background-size:auto;">&nbsp;</span><span id="cke_187_label" className="cke_button_label cke_button__redo_label" aria-hidden="false">Redo</span><span id="cke_187_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+Y</span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_188" className="cke_toolbar" aria-labelledby="cke_188_label" role="toolbar"><span id="cke_188_label" className="cke_voice_label">Editing</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_189" className="cke_button cke_button__scayt cke_button_off cke_button_expandable" href="javascript:void('Spell Check As You Type')" title="Spell Check As You Type" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_189_label" aria-describedby="cke_189_description" aria-haspopup="menu" aria-disabled="false" aria-expanded="false" onkeydown="return CKEDITOR.tools.callFunction(314,event);" onfocus="return CKEDITOR.tools.callFunction(315,event);" onclick="CKEDITOR.tools.callFunction(316,this);return false;"><span className="cke_button_icon cke_button__scayt_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2040px;background-size:auto;">&nbsp;</span><span id="cke_189_label" className="cke_button_label cke_button__scayt_label" aria-hidden="false">Spell Check As You Type</span><span id="cke_189_description" className="cke_button_label" aria-hidden="false"></span><span className="cke_button_arrow"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_190" className="cke_toolbar" aria-labelledby="cke_190_label" role="toolbar"><span id="cke_190_label" className="cke_voice_label">Links</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_191" className="cke_button cke_button__link cke_button_off" href="javascript:void('Link')" title="Link (Ctrl+K)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_191_label" aria-describedby="cke_191_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(317,event);" onfocus="return CKEDITOR.tools.callFunction(318,event);" onclick="CKEDITOR.tools.callFunction(319,this);return false;"><span className="cke_button_icon cke_button__link_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1512px;background-size:auto;">&nbsp;</span><span id="cke_191_label" className="cke_button_label cke_button__link_label" aria-hidden="false">Link</span><span id="cke_191_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+K</span></a><a id="cke_192" className="cke_button cke_button__unlink cke_button_disabled " href="javascript:void('Unlink')" title="Unlink" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_192_label" aria-describedby="cke_192_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(320,event);" onfocus="return CKEDITOR.tools.callFunction(321,event);" onclick="CKEDITOR.tools.callFunction(322,this);return false;"><span className="cke_button_icon cke_button__unlink_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1536px;background-size:auto;">&nbsp;</span><span id="cke_192_label" className="cke_button_label cke_button__unlink_label" aria-hidden="false">Unlink</span><span id="cke_192_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_193" className="cke_button cke_button__anchor cke_button_off" href="javascript:void('Anchor')" title="Anchor" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_193_label" aria-describedby="cke_193_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(323,event);" onfocus="return CKEDITOR.tools.callFunction(324,event);" onclick="CKEDITOR.tools.callFunction(325,this);return false;"><span className="cke_button_icon cke_button__anchor_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1488px;background-size:auto;">&nbsp;</span><span id="cke_193_label" className="cke_button_label cke_button__anchor_label" aria-hidden="false">Anchor</span><span id="cke_193_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_194" className="cke_toolbar" aria-labelledby="cke_194_label" role="toolbar"><span id="cke_194_label" className="cke_voice_label">Insert</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_195" className="cke_button cke_button__image cke_button_off" href="javascript:void('Image')" title="Image" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_195_label" aria-describedby="cke_195_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(326,event);" onfocus="return CKEDITOR.tools.callFunction(327,event);" onclick="CKEDITOR.tools.callFunction(328,this);return false;"><span className="cke_button_icon cke_button__image_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1224px;background-size:auto;">&nbsp;</span><span id="cke_195_label" className="cke_button_label cke_button__image_label" aria-hidden="false">Image</span><span id="cke_195_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_196" className="cke_button cke_button__table cke_button_off" href="javascript:void('Table')" title="Table" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_196_label" aria-describedby="cke_196_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(329,event);" onfocus="return CKEDITOR.tools.callFunction(330,event);" onclick="CKEDITOR.tools.callFunction(331,this);return false;"><span className="cke_button_icon cke_button__table_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2280px;background-size:auto;">&nbsp;</span><span id="cke_196_label" className="cke_button_label cke_button__table_label" aria-hidden="false">Table</span><span id="cke_196_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_197" className="cke_button cke_button__horizontalrule cke_button_off" href="javascript:void('Insert Horizontal Line')" title="Insert Horizontal Line" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_197_label" aria-describedby="cke_197_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(332,event);" onfocus="return CKEDITOR.tools.callFunction(333,event);" onclick="CKEDITOR.tools.callFunction(334,this);return false;"><span className="cke_button_icon cke_button__horizontalrule_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1176px;background-size:auto;">&nbsp;</span><span id="cke_197_label" className="cke_button_label cke_button__horizontalrule_label" aria-hidden="false">Insert Horizontal Line</span><span id="cke_197_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_198" className="cke_button cke_button__specialchar cke_button_off" href="javascript:void('Insert Special Character')" title="Insert Special Character" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_198_label" aria-describedby="cke_198_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(335,event);" onfocus="return CKEDITOR.tools.callFunction(336,event);" onclick="CKEDITOR.tools.callFunction(337,this);return false;"><span className="cke_button_icon cke_button__specialchar_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2256px;background-size:auto;">&nbsp;</span><span id="cke_198_label" className="cke_button_label cke_button__specialchar_label" aria-hidden="false">Insert Special Character</span><span id="cke_198_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_199" className="cke_toolbar" aria-labelledby="cke_199_label" role="toolbar"><span id="cke_199_label" className="cke_voice_label">Tools</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_200" className="cke_button cke_button__maximize cke_button_off" href="javascript:void('Maximize')" title="Maximize" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_200_label" aria-describedby="cke_200_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(338,event);" onfocus="return CKEDITOR.tools.callFunction(339,event);" onclick="CKEDITOR.tools.callFunction(340,this);return false;"><span className="cke_button_icon cke_button__maximize_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1680px;background-size:auto;">&nbsp;</span><span id="cke_200_label" className="cke_button_label cke_button__maximize_label" aria-hidden="false">Maximize</span><span id="cke_200_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_201" className="cke_toolbar" aria-labelledby="cke_201_label" role="toolbar"><span id="cke_201_label" className="cke_voice_label">Document</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_202" className="cke_button cke_button__sourcedialog cke_button_off" href="javascript:void('Source')" title="Source" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_202_label" aria-describedby="cke_202_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(341,event);" onfocus="return CKEDITOR.tools.callFunction(342,event);" onclick="CKEDITOR.tools.callFunction(343,this);return false;"><span className="cke_button_icon cke_button__sourcedialog_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2232px;background-size:auto;">&nbsp;</span><span id="cke_202_label" className="cke_button_label cke_button__sourcedialog_label" aria-hidden="false">Source</span><span id="cke_202_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span className="cke_toolbar_break"></span><span id="cke_203" className="cke_toolbar" aria-labelledby="cke_203_label" role="toolbar"><span id="cke_203_label" className="cke_voice_label">Basic Styles</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_204" className="cke_button cke_button__bold cke_button_off" href="javascript:void('Bold')" title="Bold (Ctrl+B)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_204_label" aria-describedby="cke_204_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(344,event);" onfocus="return CKEDITOR.tools.callFunction(345,event);" onclick="CKEDITOR.tools.callFunction(346,this);return false;"><span className="cke_button_icon cke_button__bold_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -24px;background-size:auto;">&nbsp;</span><span id="cke_204_label" className="cke_button_label cke_button__bold_label" aria-hidden="false">Bold</span><span id="cke_204_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+B</span></a><a id="cke_205" className="cke_button cke_button__italic cke_button_off" href="javascript:void('Italic')" title="Italic (Ctrl+I)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_205_label" aria-describedby="cke_205_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(347,event);" onfocus="return CKEDITOR.tools.callFunction(348,event);" onclick="CKEDITOR.tools.callFunction(349,this);return false;"><span className="cke_button_icon cke_button__italic_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -48px;background-size:auto;">&nbsp;</span><span id="cke_205_label" className="cke_button_label cke_button__italic_label" aria-hidden="false">Italic</span><span id="cke_205_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+I</span></a><a id="cke_206" className="cke_button cke_button__underline cke_button_off" href="javascript:void('Underline')" title="Underline (Ctrl+U)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_206_label" aria-describedby="cke_206_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(350,event);" onfocus="return CKEDITOR.tools.callFunction(351,event);" onclick="CKEDITOR.tools.callFunction(352,this);return false;"><span className="cke_button_icon cke_button__underline_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -144px;background-size:auto;">&nbsp;</span><span id="cke_206_label" className="cke_button_label cke_button__underline_label" aria-hidden="false">Underline</span><span id="cke_206_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+U</span></a><a id="cke_207" className="cke_button cke_button__strike cke_button_off" href="javascript:void('Strikethrough')" title="Strikethrough" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_207_label" aria-describedby="cke_207_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(353,event);" onfocus="return CKEDITOR.tools.callFunction(354,event);" onclick="CKEDITOR.tools.callFunction(355,this);return false;"><span className="cke_button_icon cke_button__strike_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -72px;background-size:auto;">&nbsp;</span><span id="cke_207_label" className="cke_button_label cke_button__strike_label" aria-hidden="false">Strikethrough</span><span id="cke_207_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_208" className="cke_button cke_button__subscript cke_button_off" href="javascript:void('Subscript')" title="Subscript" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_208_label" aria-describedby="cke_208_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(356,event);" onfocus="return CKEDITOR.tools.callFunction(357,event);" onclick="CKEDITOR.tools.callFunction(358,this);return false;"><span className="cke_button_icon cke_button__subscript_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -96px;background-size:auto;">&nbsp;</span><span id="cke_208_label" className="cke_button_label cke_button__subscript_label" aria-hidden="false">Subscript</span><span id="cke_208_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_209" className="cke_button cke_button__superscript cke_button_off" href="javascript:void('Superscript')" title="Superscript" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_209_label" aria-describedby="cke_209_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(359,event);" onfocus="return CKEDITOR.tools.callFunction(360,event);" onclick="CKEDITOR.tools.callFunction(361,this);return false;"><span className="cke_button_icon cke_button__superscript_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -120px;background-size:auto;">&nbsp;</span><span id="cke_209_label" className="cke_button_label cke_button__superscript_label" aria-hidden="false">Superscript</span><span id="cke_209_description" className="cke_button_label" aria-hidden="false"></span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_210" className="cke_button cke_button__removeformat cke_button_off" href="javascript:void('Remove Format')" title="Remove Format" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_210_label" aria-describedby="cke_210_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(362,event);" onfocus="return CKEDITOR.tools.callFunction(363,event);" onclick="CKEDITOR.tools.callFunction(364,this);return false;"><span className="cke_button_icon cke_button__removeformat_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1992px;background-size:auto;">&nbsp;</span><span id="cke_210_label" className="cke_button_label cke_button__removeformat_label" aria-hidden="false">Remove Format</span><span id="cke_210_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_211" className="cke_toolbar" aria-labelledby="cke_211_label" role="toolbar"><span id="cke_211_label" className="cke_voice_label">Paragraph</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_212" className="cke_button cke_button__numberedlist cke_button_off" href="javascript:void('Insert/Remove Numbered List')" title="Insert/Remove Numbered List" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_212_label" aria-describedby="cke_212_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(365,event);" onfocus="return CKEDITOR.tools.callFunction(366,event);" onclick="CKEDITOR.tools.callFunction(367,this);return false;"><span className="cke_button_icon cke_button__numberedlist_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1632px;background-size:auto;">&nbsp;</span><span id="cke_212_label" className="cke_button_label cke_button__numberedlist_label" aria-hidden="false">Insert/Remove Numbered List</span><span id="cke_212_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_213" className="cke_button cke_button__bulletedlist cke_button_off" href="javascript:void('Insert/Remove Bulleted List')" title="Insert/Remove Bulleted List" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_213_label" aria-describedby="cke_213_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(368,event);" onfocus="return CKEDITOR.tools.callFunction(369,event);" onclick="CKEDITOR.tools.callFunction(370,this);return false;"><span className="cke_button_icon cke_button__bulletedlist_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1584px;background-size:auto;">&nbsp;</span><span id="cke_213_label" className="cke_button_label cke_button__bulletedlist_label" aria-hidden="false">Insert/Remove Bulleted List</span><span id="cke_213_description" className="cke_button_label" aria-hidden="false"></span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_214" className="cke_button cke_button__outdent cke_button_disabled " href="javascript:void('Decrease Indent')" title="Decrease Indent" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_214_label" aria-describedby="cke_214_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(371,event);" onfocus="return CKEDITOR.tools.callFunction(372,event);" onclick="CKEDITOR.tools.callFunction(373,this);return false;"><span className="cke_button_icon cke_button__outdent_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1320px;background-size:auto;">&nbsp;</span><span id="cke_214_label" className="cke_button_label cke_button__outdent_label" aria-hidden="false">Decrease Indent</span><span id="cke_214_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_215" className="cke_button cke_button__indent cke_button_off" href="javascript:void('Increase Indent')" title="Increase Indent" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_215_label" aria-describedby="cke_215_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(374,event);" onfocus="return CKEDITOR.tools.callFunction(375,event);" onclick="CKEDITOR.tools.callFunction(376,this);return false;"><span className="cke_button_icon cke_button__indent_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1272px;background-size:auto;">&nbsp;</span><span id="cke_215_label" className="cke_button_label cke_button__indent_label" aria-hidden="false">Increase Indent</span><span id="cke_215_description" className="cke_button_label" aria-hidden="false"></span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_216" className="cke_button cke_button__blockquote cke_button_off" href="javascript:void('Block Quote')" title="Block Quote" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_216_label" aria-describedby="cke_216_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(377,event);" onfocus="return CKEDITOR.tools.callFunction(378,event);" onclick="CKEDITOR.tools.callFunction(379,this);return false;"><span className="cke_button_icon cke_button__blockquote_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -216px;background-size:auto;">&nbsp;</span><span id="cke_216_label" className="cke_button_label cke_button__blockquote_label" aria-hidden="false">Block Quote</span><span id="cke_216_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_217" className="cke_toolbar" aria-labelledby="cke_217_label" role="toolbar"><span id="cke_217_label" className="cke_voice_label">Styles</span><span className="cke_toolbar_start"></span><span id="cke_179" className="cke_combo cke_combo__styles cke_combo_off" role="presentation"><span id="cke_179_label" className="cke_combo_label">Styles</span><a className="cke_combo_button" title="Formatting Styles" tabindex="-1" href="javascript:void('Formatting Styles')" hidefocus="true" role="button" aria-labelledby="cke_179_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(381,event,this);" onfocus="return CKEDITOR.tools.callFunction(382,event);" onclick="CKEDITOR.tools.callFunction(380,this);return false;" aria-expanded="false"><span id="cke_179_text" className="cke_combo_text cke_combo_inlinelabel">Styles</span><span className="cke_combo_open"><span className="cke_combo_arrow"></span></span></a></span><span id="cke_180" className="cke_combo cke_combo__format cke_combo_off" role="presentation"><span id="cke_180_label" className="cke_combo_label">Format</span><a className="cke_combo_button" title="Paragraph Format" tabindex="-1" href="javascript:void('Paragraph Format')" hidefocus="true" role="button" aria-labelledby="cke_180_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(384,event,this);" onfocus="return CKEDITOR.tools.callFunction(385,event);" onclick="CKEDITOR.tools.callFunction(383,this);return false;" aria-expanded="false"><span id="cke_180_text" className="cke_combo_text cke_combo_inlinelabel">Format</span><span className="cke_combo_open"><span className="cke_combo_arrow"></span></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_218" className="cke_toolbar cke_toolbar_last" aria-labelledby="cke_218_label" role="toolbar"><span id="cke_218_label" className="cke_voice_label">about</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_219" className="cke_button cke_button__about cke_button_off" href="javascript:void('About CKEditor 4')" title="About CKEditor 4" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_219_label" aria-describedby="cke_219_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(386,event);" onfocus="return CKEDITOR.tools.callFunction(387,event);" onclick="CKEDITOR.tools.callFunction(388,this);return false;"><span className="cke_button_icon cke_button__about_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 0px;background-size:auto;">&nbsp;</span><span id="cke_219_label" className="cke_button_label cke_button__about_label" aria-hidden="false">About CKEditor 4</span><span id="cke_219_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span></span></span><div id="cke_4_contents" className="cke_contents cke_reset" role="presentation" style="height: 200px;"><span id="cke_223" className="cke_voice_label">Press ALT 0 for help</span><iframe src="" frameborder="0" className="cke_wysiwyg_frame cke_reset" title="Editor, main_desc" aria-describedby="cke_223" tabindex="0" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div><span id="cke_4_bottom" className="cke_bottom cke_reset_all" role="presentation" style="user-select: none;"><span id="cke_4_resizer" className="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Resize" onmousedown="CKEDITOR.tools.callFunction(295, event)">◢</span><span id="cke_4_path_label" className="cke_voice_label">Elements path</span><span id="cke_4_path" className="cke_path" role="group" aria-labelledby="cke_4_path_label"><span className="cke_path_empty">&nbsp;</span></span></span></div></div>
                        </div>
                        <div className="mb-3" style={{display: 'none'}}>
                          <label className="form-label" for="basic-default-phone">Active</label>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" checked="" type="radio" name="active" id="active" value="yes" />
                            <label className="form-check-label" for="active">Yes</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inactive" id="inactive" value="no" />
                            <label className="form-check-label" for="inactive">No</label>
                          </div>
                        </div>
                        <div className="divider">
                          <div className="divider-text">Landing Page Form Settings</div>

                        </div>

                        <div className="row gx-3 gy-2 align-items-center mb-4">
                          <div className="col-md-3">
                            <label for="input_title" className="form-label">Input Name<span className="text-danger">*</span>
                            </label>
                            <input type="text" name="input_title" className="form-control" id="input_title" placeholder="First Name" />
                          </div>
                          <div className="col-md-3">
                            <label for="form_select" className="form-label">Option<span className="text-danger">*</span>
                            </label>
                            <select id="form_select" className="form-select">
                              <option value="">--Select--</option>
                              <option value="Textbox">TextBox</option>
                              <option value="Email">Email</option>
                              <option value="All Countries">All Countries</option>
                              <option value="List">List</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                            <label for="form_select_optional" className="form-label">Mandatory<span className="text-danger">*</span>
                            </label>
                            <select id="form_select_optional" className="form-select">
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                          <div className="col-md-6" id="div_select_option" style="display:none;">
                            <label for="select_option" className="form-label">Select Option<span className="text-danger">*</span>
                            </label>(comma seperated values)
                            <textarea type="text" name="select_option" className="form-control" id="select_option"></textarea>
                          </div>
                        </div>
                        <div className="row mb-4">
                          <div className="row justify-content-end">
                            <div className="col-sm-10">
                              <button type="button" className="btn btn-primary">Add</button>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="card">
                            <div className="table-responsive text-nowrap">
                              <table className="table table-hover" id="input_table">
                                <thead>
                                  <tr>

                                    <th>Input</th>
                                    <th>Option</th>
                                    <th>Mandatory</th>
                                    <th>Value</th>
                                    <th>Actions</th>
                                  </tr>
                                </thead>
                                <tbody className="table-border-bottom-0" id="table_input">

                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                      </div> */}
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
                      <div className="text-center py-2 bg-light">Initial Email On Lead Upload</div>
                      <div className="mb-3 form-check form-switch mt-3">
                        <input className="form-check-input" name="send_initial_email" type="checkbox" id="send_initial_email" />
                        <label className="form-check-label" for="send_initial_email">First Touch</label>
                      </div>

                      <div className="mb-3">
                        <label for="initial_email_subject" className="form-label">Email Subject</label>
                        <input className="form-control" type="text" required="" disabled="" placeholder="Looking for business opportunity" name="initial_email_subject" id="initial_subject" />
                      </div>

                      {/* add text editor */}
                      <p>Email Body</p>
                      <InitialEmail />

                      {/* six part */}
                      <div className="text-center py-2 bg-light">Email</div>

                      <div className="mb-3 form-check form-switch mt-2">
                        <input className="form-check-input" name="send_email" type="checkbox" id="send_email" />
                        <label className="form-check-label" for="send_email">Second Touch/Follow up</label>
                      </div>
                      <div className="mb-3">
                        <label for="note" className="form-label">Email Subject</label>
                        <input className="form-control" type="text" required="" placeholder="Looking for business opportunity" name="subject" value="" id="subject" />
                      </div>
                      {/* text editor */}
                      <p>Email Body</p>
                      <EmailText />
                      {/* <div className="mb-3">
                        <label for="note" className="form-label">Email Body</label>
                        <textarea id="editor3" name="editor3" style="visibility: hidden; display: none;"></textarea><div id="cke_editor3" className="cke_1 cke cke_reset cke_chrome cke_editor_editor3 cke_ltr cke_browser_webkit" dir="ltr" lang="en" role="application" aria-labelledby="cke_editor3_arialbl"><span id="cke_editor3_arialbl" className="cke_voice_label">Rich Text Editor, editor3</span><div className="cke_inner cke_reset" role="presentation"><span id="cke_1_top" className="cke_top cke_reset_all" role="presentation" style="height: auto; user-select: none;"><span id="cke_21" className="cke_voice_label">Editor toolbars</span><span id="cke_1_toolbox" className="cke_toolbox" role="group" aria-labelledby="cke_21" onmousedown="return false;"><span id="cke_24" className="cke_toolbar" aria-labelledby="cke_24_label" role="toolbar"><span id="cke_24_label" className="cke_voice_label">Clipboard/Undo</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_25" className="cke_button cke_button__cut cke_button_disabled " href="javascript:void('Cut')" title="Cut (Ctrl+X)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_25_label" aria-describedby="cke_25_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(2,event);" onfocus="return CKEDITOR.tools.callFunction(3,event);" onclick="CKEDITOR.tools.callFunction(4,this);return false;"><span className="cke_button_icon cke_button__cut_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -312px;background-size:auto;">&nbsp;</span><span id="cke_25_label" className="cke_button_label cke_button__cut_label" aria-hidden="false">Cut</span><span id="cke_25_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+X</span></a><a id="cke_26" className="cke_button cke_button__copy cke_button_disabled " href="javascript:void('Copy')" title="Copy (Ctrl+C)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_26_label" aria-describedby="cke_26_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(5,event);" onfocus="return CKEDITOR.tools.callFunction(6,event);" onclick="CKEDITOR.tools.callFunction(7,this);return false;"><span className="cke_button_icon cke_button__copy_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -264px;background-size:auto;">&nbsp;</span><span id="cke_26_label" className="cke_button_label cke_button__copy_label" aria-hidden="false">Copy</span><span id="cke_26_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+C</span></a><a id="cke_27" className="cke_button cke_button__paste cke_button_off" href="javascript:void('Paste')" title="Paste (Ctrl+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_27_label" aria-describedby="cke_27_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(8,event);" onfocus="return CKEDITOR.tools.callFunction(9,event);" onclick="CKEDITOR.tools.callFunction(10,this);return false;"><span className="cke_button_icon cke_button__paste_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -360px;background-size:auto;">&nbsp;</span><span id="cke_27_label" className="cke_button_label cke_button__paste_label" aria-hidden="false">Paste</span><span id="cke_27_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+V</span></a><a id="cke_28" className="cke_button cke_button__pastetext cke_button_off" href="javascript:void('Paste as plain text')" title="Paste as plain text (Ctrl+Shift+V)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_28_label" aria-describedby="cke_28_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(11,event);" onfocus="return CKEDITOR.tools.callFunction(12,event);" onclick="CKEDITOR.tools.callFunction(13,this);return false;"><span className="cke_button_icon cke_button__pastetext_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1872px;background-size:auto;">&nbsp;</span><span id="cke_28_label" className="cke_button_label cke_button__pastetext_label" aria-hidden="false">Paste as plain text</span><span id="cke_28_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+Shift+V</span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_29" className="cke_button cke_button__undo cke_button_disabled " href="javascript:void('Undo')" title="Undo (Ctrl+Z)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_29_label" aria-describedby="cke_29_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(14,event);" onfocus="return CKEDITOR.tools.callFunction(15,event);" onclick="CKEDITOR.tools.callFunction(16,this);return false;"><span className="cke_button_icon cke_button__undo_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2448px;background-size:auto;">&nbsp;</span><span id="cke_29_label" className="cke_button_label cke_button__undo_label" aria-hidden="false">Undo</span><span id="cke_29_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+Z</span></a><a id="cke_30" className="cke_button cke_button__redo cke_button_disabled " href="javascript:void('Redo')" title="Redo (Ctrl+Y)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_30_label" aria-describedby="cke_30_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(17,event);" onfocus="return CKEDITOR.tools.callFunction(18,event);" onclick="CKEDITOR.tools.callFunction(19,this);return false;"><span className="cke_button_icon cke_button__redo_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2400px;background-size:auto;">&nbsp;</span><span id="cke_30_label" className="cke_button_label cke_button__redo_label" aria-hidden="false">Redo</span><span id="cke_30_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+Y</span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_31" className="cke_toolbar" aria-labelledby="cke_31_label" role="toolbar"><span id="cke_31_label" className="cke_voice_label">Editing</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_32" className="cke_button cke_button__scayt cke_button_off cke_button_expandable" href="javascript:void('Spell Check As You Type')" title="Spell Check As You Type" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_32_label" aria-describedby="cke_32_description" aria-haspopup="menu" aria-disabled="false" aria-expanded="false" onkeydown="return CKEDITOR.tools.callFunction(20,event);" onfocus="return CKEDITOR.tools.callFunction(21,event);" onclick="CKEDITOR.tools.callFunction(22,this);return false;"><span className="cke_button_icon cke_button__scayt_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2040px;background-size:auto;">&nbsp;</span><span id="cke_32_label" className="cke_button_label cke_button__scayt_label" aria-hidden="false">Spell Check As You Type</span><span id="cke_32_description" className="cke_button_label" aria-hidden="false"></span><span className="cke_button_arrow"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_33" className="cke_toolbar" aria-labelledby="cke_33_label" role="toolbar"><span id="cke_33_label" className="cke_voice_label">Links</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_34" className="cke_button cke_button__link cke_button_off" href="javascript:void('Link')" title="Link (Ctrl+K)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_34_label" aria-describedby="cke_34_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(23,event);" onfocus="return CKEDITOR.tools.callFunction(24,event);" onclick="CKEDITOR.tools.callFunction(25,this);return false;"><span className="cke_button_icon cke_button__link_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1512px;background-size:auto;">&nbsp;</span><span id="cke_34_label" className="cke_button_label cke_button__link_label" aria-hidden="false">Link</span><span id="cke_34_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+K</span></a><a id="cke_35" className="cke_button cke_button__unlink cke_button_disabled " href="javascript:void('Unlink')" title="Unlink" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_35_label" aria-describedby="cke_35_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(26,event);" onfocus="return CKEDITOR.tools.callFunction(27,event);" onclick="CKEDITOR.tools.callFunction(28,this);return false;"><span className="cke_button_icon cke_button__unlink_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1536px;background-size:auto;">&nbsp;</span><span id="cke_35_label" className="cke_button_label cke_button__unlink_label" aria-hidden="false">Unlink</span><span id="cke_35_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_36" className="cke_button cke_button__anchor cke_button_off" href="javascript:void('Anchor')" title="Anchor" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_36_label" aria-describedby="cke_36_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(29,event);" onfocus="return CKEDITOR.tools.callFunction(30,event);" onclick="CKEDITOR.tools.callFunction(31,this);return false;"><span className="cke_button_icon cke_button__anchor_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1488px;background-size:auto;">&nbsp;</span><span id="cke_36_label" className="cke_button_label cke_button__anchor_label" aria-hidden="false">Anchor</span><span id="cke_36_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_37" className="cke_toolbar" aria-labelledby="cke_37_label" role="toolbar"><span id="cke_37_label" className="cke_voice_label">Insert</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_38" className="cke_button cke_button__image cke_button_off" href="javascript:void('Image')" title="Image" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_38_label" aria-describedby="cke_38_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(32,event);" onfocus="return CKEDITOR.tools.callFunction(33,event);" onclick="CKEDITOR.tools.callFunction(34,this);return false;"><span className="cke_button_icon cke_button__image_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1224px;background-size:auto;">&nbsp;</span><span id="cke_38_label" className="cke_button_label cke_button__image_label" aria-hidden="false">Image</span><span id="cke_38_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_39" className="cke_button cke_button__table cke_button_off" href="javascript:void('Table')" title="Table" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_39_label" aria-describedby="cke_39_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(35,event);" onfocus="return CKEDITOR.tools.callFunction(36,event);" onclick="CKEDITOR.tools.callFunction(37,this);return false;"><span className="cke_button_icon cke_button__table_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2280px;background-size:auto;">&nbsp;</span><span id="cke_39_label" className="cke_button_label cke_button__table_label" aria-hidden="false">Table</span><span id="cke_39_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_40" className="cke_button cke_button__horizontalrule cke_button_off" href="javascript:void('Insert Horizontal Line')" title="Insert Horizontal Line" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_40_label" aria-describedby="cke_40_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(38,event);" onfocus="return CKEDITOR.tools.callFunction(39,event);" onclick="CKEDITOR.tools.callFunction(40,this);return false;"><span className="cke_button_icon cke_button__horizontalrule_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1176px;background-size:auto;">&nbsp;</span><span id="cke_40_label" className="cke_button_label cke_button__horizontalrule_label" aria-hidden="false">Insert Horizontal Line</span><span id="cke_40_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_41" className="cke_button cke_button__specialchar cke_button_off" href="javascript:void('Insert Special Character')" title="Insert Special Character" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_41_label" aria-describedby="cke_41_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(41,event);" onfocus="return CKEDITOR.tools.callFunction(42,event);" onclick="CKEDITOR.tools.callFunction(43,this);return false;"><span className="cke_button_icon cke_button__specialchar_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2256px;background-size:auto;">&nbsp;</span><span id="cke_41_label" className="cke_button_label cke_button__specialchar_label" aria-hidden="false">Insert Special Character</span><span id="cke_41_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_42" className="cke_toolbar" aria-labelledby="cke_42_label" role="toolbar"><span id="cke_42_label" className="cke_voice_label">Tools</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_43" className="cke_button cke_button__maximize cke_button_off" href="javascript:void('Maximize')" title="Maximize" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_43_label" aria-describedby="cke_43_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(44,event);" onfocus="return CKEDITOR.tools.callFunction(45,event);" onclick="CKEDITOR.tools.callFunction(46,this);return false;"><span className="cke_button_icon cke_button__maximize_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1680px;background-size:auto;">&nbsp;</span><span id="cke_43_label" className="cke_button_label cke_button__maximize_label" aria-hidden="false">Maximize</span><span id="cke_43_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_44" className="cke_toolbar" aria-labelledby="cke_44_label" role="toolbar"><span id="cke_44_label" className="cke_voice_label">Document</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_45" className="cke_button cke_button__sourcedialog cke_button_off" href="javascript:void('Source')" title="Source" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_45_label" aria-describedby="cke_45_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(47,event);" onfocus="return CKEDITOR.tools.callFunction(48,event);" onclick="CKEDITOR.tools.callFunction(49,this);return false;"><span className="cke_button_icon cke_button__sourcedialog_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -2232px;background-size:auto;">&nbsp;</span><span id="cke_45_label" className="cke_button_label cke_button__sourcedialog_label" aria-hidden="false">Source</span><span id="cke_45_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span className="cke_toolbar_break"></span><span id="cke_46" className="cke_toolbar" aria-labelledby="cke_46_label" role="toolbar"><span id="cke_46_label" className="cke_voice_label">Basic Styles</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_47" className="cke_button cke_button__bold cke_button_off" href="javascript:void('Bold')" title="Bold (Ctrl+B)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_47_label" aria-describedby="cke_47_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(50,event);" onfocus="return CKEDITOR.tools.callFunction(51,event);" onclick="CKEDITOR.tools.callFunction(52,this);return false;"><span className="cke_button_icon cke_button__bold_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -24px;background-size:auto;">&nbsp;</span><span id="cke_47_label" className="cke_button_label cke_button__bold_label" aria-hidden="false">Bold</span><span id="cke_47_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+B</span></a><a id="cke_48" className="cke_button cke_button__italic cke_button_off" href="javascript:void('Italic')" title="Italic (Ctrl+I)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_48_label" aria-describedby="cke_48_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(53,event);" onfocus="return CKEDITOR.tools.callFunction(54,event);" onclick="CKEDITOR.tools.callFunction(55,this);return false;"><span className="cke_button_icon cke_button__italic_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -48px;background-size:auto;">&nbsp;</span><span id="cke_48_label" className="cke_button_label cke_button__italic_label" aria-hidden="false">Italic</span><span id="cke_48_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+I</span></a><a id="cke_49" className="cke_button cke_button__underline cke_button_off" href="javascript:void('Underline')" title="Underline (Ctrl+U)" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_49_label" aria-describedby="cke_49_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(56,event);" onfocus="return CKEDITOR.tools.callFunction(57,event);" onclick="CKEDITOR.tools.callFunction(58,this);return false;"><span className="cke_button_icon cke_button__underline_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -144px;background-size:auto;">&nbsp;</span><span id="cke_49_label" className="cke_button_label cke_button__underline_label" aria-hidden="false">Underline</span><span id="cke_49_description" className="cke_button_label" aria-hidden="false">&nbsp;Keyboard shortcut Ctrl+U</span></a><a id="cke_50" className="cke_button cke_button__strike cke_button_off" href="javascript:void('Strikethrough')" title="Strikethrough" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_50_label" aria-describedby="cke_50_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(59,event);" onfocus="return CKEDITOR.tools.callFunction(60,event);" onclick="CKEDITOR.tools.callFunction(61,this);return false;"><span className="cke_button_icon cke_button__strike_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -72px;background-size:auto;">&nbsp;</span><span id="cke_50_label" className="cke_button_label cke_button__strike_label" aria-hidden="false">Strikethrough</span><span id="cke_50_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_51" className="cke_button cke_button__subscript cke_button_off" href="javascript:void('Subscript')" title="Subscript" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_51_label" aria-describedby="cke_51_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(62,event);" onfocus="return CKEDITOR.tools.callFunction(63,event);" onclick="CKEDITOR.tools.callFunction(64,this);return false;"><span className="cke_button_icon cke_button__subscript_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -96px;background-size:auto;">&nbsp;</span><span id="cke_51_label" className="cke_button_label cke_button__subscript_label" aria-hidden="false">Subscript</span><span id="cke_51_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_52" className="cke_button cke_button__superscript cke_button_off" href="javascript:void('Superscript')" title="Superscript" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_52_label" aria-describedby="cke_52_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(65,event);" onfocus="return CKEDITOR.tools.callFunction(66,event);" onclick="CKEDITOR.tools.callFunction(67,this);return false;"><span className="cke_button_icon cke_button__superscript_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -120px;background-size:auto;">&nbsp;</span><span id="cke_52_label" className="cke_button_label cke_button__superscript_label" aria-hidden="false">Superscript</span><span id="cke_52_description" className="cke_button_label" aria-hidden="false"></span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_53" className="cke_button cke_button__removeformat cke_button_off" href="javascript:void('Remove Format')" title="Remove Format" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_53_label" aria-describedby="cke_53_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(68,event);" onfocus="return CKEDITOR.tools.callFunction(69,event);" onclick="CKEDITOR.tools.callFunction(70,this);return false;"><span className="cke_button_icon cke_button__removeformat_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1992px;background-size:auto;">&nbsp;</span><span id="cke_53_label" className="cke_button_label cke_button__removeformat_label" aria-hidden="false">Remove Format</span><span id="cke_53_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_54" className="cke_toolbar" aria-labelledby="cke_54_label" role="toolbar"><span id="cke_54_label" className="cke_voice_label">Paragraph</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_55" className="cke_button cke_button__numberedlist cke_button_off" href="javascript:void('Insert/Remove Numbered List')" title="Insert/Remove Numbered List" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_55_label" aria-describedby="cke_55_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(71,event);" onfocus="return CKEDITOR.tools.callFunction(72,event);" onclick="CKEDITOR.tools.callFunction(73,this);return false;"><span className="cke_button_icon cke_button__numberedlist_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1632px;background-size:auto;">&nbsp;</span><span id="cke_55_label" className="cke_button_label cke_button__numberedlist_label" aria-hidden="false">Insert/Remove Numbered List</span><span id="cke_55_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_56" className="cke_button cke_button__bulletedlist cke_button_off" href="javascript:void('Insert/Remove Bulleted List')" title="Insert/Remove Bulleted List" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_56_label" aria-describedby="cke_56_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(74,event);" onfocus="return CKEDITOR.tools.callFunction(75,event);" onclick="CKEDITOR.tools.callFunction(76,this);return false;"><span className="cke_button_icon cke_button__bulletedlist_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1584px;background-size:auto;">&nbsp;</span><span id="cke_56_label" className="cke_button_label cke_button__bulletedlist_label" aria-hidden="false">Insert/Remove Bulleted List</span><span id="cke_56_description" className="cke_button_label" aria-hidden="false"></span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_57" className="cke_button cke_button__outdent cke_button_disabled " href="javascript:void('Decrease Indent')" title="Decrease Indent" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_57_label" aria-describedby="cke_57_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(77,event);" onfocus="return CKEDITOR.tools.callFunction(78,event);" onclick="CKEDITOR.tools.callFunction(79,this);return false;"><span className="cke_button_icon cke_button__outdent_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1320px;background-size:auto;">&nbsp;</span><span id="cke_57_label" className="cke_button_label cke_button__outdent_label" aria-hidden="false">Decrease Indent</span><span id="cke_57_description" className="cke_button_label" aria-hidden="false"></span></a><a id="cke_58" className="cke_button cke_button__indent cke_button_disabled" href="javascript:void('Increase Indent')" title="Increase Indent" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_58_label" aria-describedby="cke_58_description" aria-haspopup="false" aria-disabled="true" onkeydown="return CKEDITOR.tools.callFunction(80,event);" onfocus="return CKEDITOR.tools.callFunction(81,event);" onclick="CKEDITOR.tools.callFunction(82,this);return false;"><span className="cke_button_icon cke_button__indent_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -1272px;background-size:auto;">&nbsp;</span><span id="cke_58_label" className="cke_button_label cke_button__indent_label" aria-hidden="false">Increase Indent</span><span id="cke_58_description" className="cke_button_label" aria-hidden="false"></span></a><span className="cke_toolbar_separator" role="separator"></span><a id="cke_59" className="cke_button cke_button__blockquote cke_button_off" href="javascript:void('Block Quote')" title="Block Quote" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_59_label" aria-describedby="cke_59_description" aria-haspopup="false" aria-disabled="false" aria-pressed="false" onkeydown="return CKEDITOR.tools.callFunction(83,event);" onfocus="return CKEDITOR.tools.callFunction(84,event);" onclick="CKEDITOR.tools.callFunction(85,this);return false;"><span className="cke_button_icon cke_button__blockquote_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 -216px;background-size:auto;">&nbsp;</span><span id="cke_59_label" className="cke_button_label cke_button__blockquote_label" aria-hidden="false">Block Quote</span><span id="cke_59_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_60" className="cke_toolbar" aria-labelledby="cke_60_label" role="toolbar"><span id="cke_60_label" className="cke_voice_label">Styles</span><span className="cke_toolbar_start"></span><span id="cke_22" className="cke_combo cke_combo__styles cke_combo_off" role="presentation"><span id="cke_22_label" className="cke_combo_label">Styles</span><a className="cke_combo_button" title="Formatting Styles" tabindex="-1" href="javascript:void('Formatting Styles')" hidefocus="true" role="button" aria-labelledby="cke_22_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(87,event,this);" onfocus="return CKEDITOR.tools.callFunction(88,event);" onclick="CKEDITOR.tools.callFunction(86,this);return false;" aria-expanded="false"><span id="cke_22_text" className="cke_combo_text cke_combo_inlinelabel">Styles</span><span className="cke_combo_open"><span className="cke_combo_arrow"></span></span></a></span><span id="cke_23" className="cke_combo cke_combo__format cke_combo_off" role="presentation"><span id="cke_23_label" className="cke_combo_label">Normal, Format</span><a className="cke_combo_button" title="Paragraph Format" tabindex="-1" href="javascript:void('Paragraph Format')" hidefocus="true" role="button" aria-labelledby="cke_23_label" aria-haspopup="listbox" onkeydown="return CKEDITOR.tools.callFunction(90,event,this);" onfocus="return CKEDITOR.tools.callFunction(91,event);" onclick="CKEDITOR.tools.callFunction(89,this);return false;" aria-expanded="false"><span id="cke_23_text" className="cke_combo_text">Normal</span><span className="cke_combo_open"><span className="cke_combo_arrow"></span></span></a></span><span className="cke_toolbar_end"></span></span><span id="cke_61" className="cke_toolbar cke_toolbar_last" aria-labelledby="cke_61_label" role="toolbar"><span id="cke_61_label" className="cke_voice_label">about</span><span className="cke_toolbar_start"></span><span className="cke_toolgroup" role="presentation"><a id="cke_62" className="cke_button cke_button__about cke_button_off" href="javascript:void('About CKEditor 4')" title="About CKEditor 4" tabindex="-1" hidefocus="true" role="button" aria-labelledby="cke_62_label" aria-describedby="cke_62_description" aria-haspopup="false" aria-disabled="false" onkeydown="return CKEDITOR.tools.callFunction(92,event);" onfocus="return CKEDITOR.tools.callFunction(93,event);" onclick="CKEDITOR.tools.callFunction(94,this);return false;"><span className="cke_button_icon cke_button__about_icon" style="background-image:url('https://cdn.ckeditor.com/4.20.1/standard-all/plugins/icons.png?t=MB2G');background-position:0 0px;background-size:auto;">&nbsp;</span><span id="cke_62_label" className="cke_button_label cke_button__about_label" aria-hidden="false">About CKEditor 4</span><span id="cke_62_description" className="cke_button_label" aria-hidden="false"></span></a></span><span className="cke_toolbar_end"></span></span></span></span><div id="cke_1_contents" className="cke_contents cke_reset" role="presentation" style="height: 200px;"><span id="cke_67" className="cke_voice_label">Press ALT 0 for help</span><iframe src="" frameborder="0" className="cke_wysiwyg_frame cke_reset" title="Editor, editor3" aria-describedby="cke_67" tabindex="0" allowtransparency="true" style="width: 100%; height: 100%;"></iframe></div><span id="cke_1_bottom" className="cke_bottom cke_reset_all" role="presentation" style="user-select: none;"><span id="cke_1_resizer" className="cke_resizer cke_resizer_vertical cke_resizer_ltr" title="Resize" onmousedown="CKEDITOR.tools.callFunction(1, event)">◢</span><span id="cke_1_path_label" className="cke_voice_label">Elements path</span><span id="cke_1_path" className="cke_path" role="group" aria-labelledby="cke_1_path_label"><a id="cke_elementspath_19_1" href="javascript:void('body')" tabindex="-1" className="cke_path_item" title="body element" hidefocus="true" draggable="false" ondragstart="return false;" onkeydown="return CKEDITOR.tools.callFunction(96,1, event );" onclick="CKEDITOR.tools.callFunction(95,1); return false;" role="button" aria-label="body element">body</a><a id="cke_elementspath_19_0" href="javascript:void('p')" tabindex="-1" className="cke_path_item" title="p element" hidefocus="true" draggable="false" ondragstart="return false;" onkeydown="return CKEDITOR.tools.callFunction(96,0, event );" onclick="CKEDITOR.tools.callFunction(95,0); return false;" role="button" aria-label="p element">p</a><span className="cke_path_empty">&nbsp;</span></span></span></div></div>

                      </div> */}

                      <div className="text-center py-2 bg-light">Data Filter</div>

                      <div className="mb-3 form-check form-switch" id="data_filter_checkbox">
                        <input className="form-check-input" name="data_filter" type="checkbox" id="data_filter" />
                        <label className="form-check-label" for="data_filter">Select filter to obtain precise results from databank</label>
                      </div>

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
                          <div className="text-center py-2 bg-light">Campaign Questions</div>
                          <div className="mb-3 form-check form-switch mt-2" id="campaign_question_checkbox">
                            <input className="form-check-input" name="additional_questions" type="checkbox" id="additional_questions" />
                            <label className="form-check-label" for="additional_questions">Does this campaign have additional questions?</label>
                          </div>
                          <input type="hidden" name="question_count" id="question_count" value="1" />
                          <div id="div_additional_questions" >
                            <div className="question_content" id="question_content">
                              <div id="question_content_1">
                                <div className="mb-3">
                                  <label for="question_1" className="form-label label_question_content">Question 1</label>  <span className="text-danger">*</span>
                                  <div className="d-flex">
                                    <input className="form-control" type="text" required="" placeholder="How do you currently ensure secure connections to your applications and data?" name="question_1" id="question_1" />
                                  </div>
                                </div>
                                <div className="mb-3 col-md-6">
                                  <label for="question_options" className="form-label question_content">Options<span className="text-danger">*</span></label>
                                  <select id="select_1" required="" name="question_options" className="form-select">
                                    <option value="Open Textbox">Open Textbox</option>
                                    <option value="Single Select">Single Select</option>
                                    <option value="Multiple Select">Multiple Select</option>
                                  </select>
                                </div>


                              </div>
                            </div>
                            <div className="row ">
                              <div className="">

                                <button type="button" className="btn btn-outline-primary ">Add New Question</button>
                              </div>
                            </div>
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

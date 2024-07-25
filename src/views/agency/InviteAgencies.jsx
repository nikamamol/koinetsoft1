import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Navbar from "../../components/HeadNavbar"
function InviteAgencies() {
  return (
    <div>
      <Navbar />
      <Container fluid className='my-5 '>
        <Row className=''>
          <Col lg={3}>
          </Col>
          <Col lg={8}>
            <div className='bgColor rounded-3 shadow'>
              <h4 className='fw-bold py-3 ms-3 text_color'>Add New Vendor</h4>
            </div>
            <div className="row">

              <div className="col-xxl">
                <div className="card mb-4">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <small className="text-muted float-end p-2">
                      Fields marked <span className="text-danger">*</span> are mandatory
                    </small>
                  </div>
                  <div className="card-body">
                    <form action="" method="post">
                      <input type="hidden" name="_token" />
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="company_name" className="col-sm-6 col-form-label">
                            Company Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="company_name"
                            name="company_name"
                            placeholder="Marathon B2B"
                            required
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="company_type" className="col-sm-6 col-form-label">
                            Company Type <span className="text-danger">*</span>
                          </label>
                          <select id="company_type" name="company_type" className="form-select" required>
                            <option value="">--Select Company Type--</option>
                            <option value="Privately held">Privately held</option>
                            <option value="Publicly held">Publicly held</option>
                            <option value="Limited Liability Partnership">Limited Liability Partnership</option>
                            <option value="Single Person Owned">Single Person Owned</option>
                            <option value="Unregistered">Unregistered</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="vendor_profile" className="col-sm-6 col-form-label">
                            Vendor Profile <span className="text-danger">*</span>
                          </label>
                          <select id="vendor_profile" name="vendor_profile" className="form-select" required>
                            <option value="">--Select Profile--</option>
                            <option value="Enterprise">Enterprise</option>
                            <option value="Agency">Agency</option>
                            <option value="Publisher">Publisher</option>
                          </select>
                        </div>
                        {/* 1 */}

                        <div className="mb-3 col-md-6">
                          <label htmlFor="agency_id" className="col-sm-6 col-form-label">
                            Agency
                          </label>
                          <select id="agency_id" name="agency_id" className="form-select" required >
                            <option value="0">--Select Agency--</option>
                            <option value="21">ButterflyAI, LLC</option>
                          </select>
                        </div>

                        <div className="mb-3 col-md-6">
                          <label htmlFor="country" className="col-sm-6 col-form-label">
                            Country <span className="text-danger">*</span>
                          </label>
                          <select id="country" name="country" className="form-select" required>
                            <option value="">--Select Country--</option>
                            <option value="95">Albania</option>
                            <option value="96">Algeria</option>
                            <option value="86">American Samoa</option>
                            <option value="97">Andorra</option>
                            <option value="98">Angola</option>
                            <option value="45">APAC</option>
                            <option value="61">Australia</option>
                            <option value="99">Austria</option>
                            <option value="100">Bahrain</option>
                            <option value="50">Bangladesh</option>
                            <option value="101">Belarus</option>
                            <option value="102">Belgium</option>
                            <option value="103">Benin</option>
                            <option value="72">Bhutan</option>
                            <option value="104">Bosnia and Herzegovina</option>
                            <option value="105">Botswana</option>
                            <option value="214">Brazil</option>
                            <option value="75">Brunei</option>
                            <option value="106">Bulgaria</option>
                            <option value="107">Burkina Faso</option>
                            <option value="108">Burundi</option>
                            <option value="64">Cambodia</option>
                            <option value="109">Cameroon</option>
                            <option value="212">Canada</option>
                            <option value="110">Cape Verde</option>
                            <option value="111">Central African Republic</option>
                            <option value="112">Chad</option>
                            <option value="46">China</option>
                            <option value="113">Comoros</option>
                            <option value="88">Cook Islands</option>
                            <option value="114">Croatia</option>
                            <option value="115">Cyprus</option>
                            <option value="116">Czech Republic</option>
                            <option value="117">Democratic Republic of the Congo</option>
                            <option value="118">Denmark</option>
                            <option value="119">Djibouti</option>
                            <option value="120">Egypt</option>
                            <option value="94">EMEA</option>
                            <option value="121">Equatorial Guinea</option>
                            <option value="122">Eritrea</option>
                            <option value="123">Estonia</option>
                            <option value="124">Ethiopia</option>
                            <option value="1">Europe</option>
                            <option value="125">Faroe Islands</option>
                            <option value="71">Fiji</option>
                            <option value="126">Finland</option>
                            <option value="127">France</option>
                            <option value="78">French Polynesia</option>
                            <option value="128">Gabon</option>
                            <option value="129">Gambia</option>
                            <option value="130">Georgia</option>
                            <option value="131">Germany</option>
                            <option value="132">Ghana</option>
                            <option value="133">Gibraltar</option>
                            <option value="134">Greece</option>
                            <option value="80">Guam</option>
                            <option value="135">Guernsey</option>
                            <option value="136">Guinea</option>
                            <option value="137">Guinea-Bissau</option>
                            <option value="44">Holy See</option>
                            <option value="215">Hong Kong</option>
                            <option value="138">Hungary</option>
                            <option value="139">Iceland</option>
                            <option value="47">India</option>
                            <option value="48">Indonesia</option>
                            <option value="140">Iran</option>
                            <option value="141">Iraq</option>
                            <option value="142">Ireland</option>
                            <option value="143">Isle Of Man</option>
                            <option value="144">Israel</option>
                            <option value="145">Italy</option>
                            <option value="146">Ivory Coast</option>
                            <option value="52">Japan</option>
                            <option value="147">Jersey</option>
                            <option value="148">Jordan</option>
                            <option value="149">Kenya</option>
                            <option value="81">Kiribati</option>
                            <option value="150">Kuwait</option>
                            <option value="66">Laos</option>
                            <option value="151">Latvia</option>
                            <option value="152">Lebanon</option>
                            <option value="153">Lesotho</option>
                            <option value="154">Liberia</option>
                            <option value="155">Libya</option>
                            <option value="156">Liechtenstein</option>
                            <option value="157">Lithuania</option>
                            <option value="158">Luxembourg</option>
                            <option value="159">Macedonia</option>
                            <option value="160">Madagascar</option>
                            <option value="161">Malawi</option>
                            <option value="58">Malaysia</option>
                            <option value="74">Maldives</option>
                            <option value="162">Mali</option>
                            <option value="163">Malta</option>
                            <option value="84">Marshall Islands</option>
                            <option value="164">Mauritania</option>
                            <option value="165">Mauritius</option>
                            <option value="213">Mexico</option>
                            <option value="82">Micronesia</option>
                            <option value="166">Moldova</option>
                            <option value="167">Monaco</option>
                            <option value="69">Mongolia</option>
                            <option value="168">Montenegro</option>
                            <option value="169">Morocco</option>
                            <option value="170">Mozambique</option>
                            <option value="56">Myanmar</option>
                            <option value="171">Namibia</option>
                            <option value="91">Nauru</option>
                            <option value="59">Nepal</option>
                            <option value="172">Netherlands</option>
                            <option value="77">New Caledonia</option>
                            <option value="68">New Zealand</option>
                            <option value="173">Niger</option>
                            <option value="174">Nigeria</option>
                            <option value="92">Niue</option>
                            <option value="60">North Korea</option>
                            <option value="32">North Macedonia</option>
                            <option value="85">Northern Mariana Islands</option>
                            <option value="175">Norway</option>
                            <option value="176">Oman</option>
                            <option value="49">Pakistan</option>
                            <option value="87">Palau</option>
                            <option value="177">Palestine</option>
                            <option value="65">Papua New Guinea</option>
                            <option value="53">Philippines</option>
                            <option value="178">Poland</option>
                            <option value="179">Portugal</option>
                            <option value="180">Qatar</option>
                            <option value="181">Romania</option>
                            <option value="51">Russia</option>
                            <option value="182">Rwanda</option>
                            <option value="79">Samoa</option>
                            <option value="183">San Marino</option>
                            <option value="184">Sao Tome &amp; Principe</option>
                            <option value="185">Saudi Arabia</option>
                            <option value="186">Senegal</option>
                            <option value="187">Serbia</option>
                            <option value="67">Singapore</option>
                            <option value="188">Slovakia</option>
                            <option value="189">Slovenia</option>
                            <option value="73">Solomon Islands</option>
                            <option value="190">Somalia</option>
                            <option value="191">South Africa</option>
                            <option value="57">South Korea</option>
                            <option value="192">Spain</option>
                            <option value="63">Sri Lanka</option>
                            <option value="193">Sudan</option>
                            <option value="194">Swaziland</option>
                            <option value="195">Sweden</option>
                            <option value="196">Switzerland</option>
                            <option value="197">Syria</option>
                            <option value="62">Taiwan</option>
                            <option value="198">Tanzania</option>
                            <option value="55">Thailand</option>
                            <option value="70">Timor Leste</option>
                            <option value="199">Togo</option>
                            <option value="93">Tokelau</option>
                            <option value="83">Tonga</option>
                            <option value="200">Tunisia</option>
                            <option value="201">Turkey</option>
                            <option value="89">Tuvalu</option>
                            <option value="202">Uganda</option>
                            <option value="203">Ukraine</option>
                            <option value="204">United Arab Emirates</option>
                            <option value="3">United Kingdom</option>
                            <option value="211">United States</option>
                            <option value="76">Vanuatu</option>
                            <option value="206">Vatican City</option>
                            <option value="54">Vietnam</option>
                            <option value="90">Wallis And Futuna</option>
                            <option value="207">Western Sahara</option>
                            <option value="208">Yemen</option>
                            <option value="209">Zambia</option>
                            <option value="210">Zimbabwe</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label for="state" className="col-sm-6 col-form-label">State <span className="text-danger">*</span></label>
                          <input type="text" required="" name="state" id="state" className="form-control" placeholder="Maharashtra" />
                        </div>
                        {/* 2 */}
                        <div className="mb-3 col-md-6">
                          <label htmlFor="city" className="form-label">City <span className="text-danger">*</span></label>
                          <input type="text" required name="city" id="city" className="form-control" placeholder="Pune" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="pincode" className="form-label">Pincode <span className="text-danger">*</span></label>
                          <input type="text" required name="pincode" id="pincode" maxLength="6" className="form-control" placeholder="400001" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="address" className="form-label">Address <span className="text-danger">*</span></label>
                          <input type="text" required name="address" id="address" className="form-control" placeholder="1300, Corporate Avenue, Pune" />
                        </div>
                        {/* 3 */}

                        <div className="">
                          <div className="text-center py-2 bg-light">Primary Contact</div>
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="primary_first_name" className="form-label">
                            First Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="primary_first_name"
                            name="primary_first_name"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label htmlFor="primary_last_name" className="form-label">
                            Last Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="primary_last_name"
                            name="primary_last_name"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div className="row d-flex ">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="primary_phone_no" className="form-label">
                            Phone No <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="primary_phone_no"
                            name="primary_phone_no"
                            placeholder="9000000000"
                            maxLength="12"
                            required

                          />
                        </div>

                        <div className="mb-3 col-md-6">
                          <label htmlFor="primary_email" className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="primary_email"
                            name="primary_email"
                            placeholder="john.doe@domain.com"
                            required
                          />
                        </div>
                      </div>


                      <div className="row d-flex">
                        <div className="mb-3 col-md-6">
                          <label htmlFor="primary_designation" className="form-label">
                            Designation <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="primary_designation"
                            name="primary_designation"
                            placeholder="CEO"
                            required
                          />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label for="password" className="col-sm-6 col-form-label">Password <span className="text-danger">*</span></label>
                          <input type="text" className="form-control" id="password" name="password" placeholder="*********" required="" />
                        </div>
                      </div>

                      {/* 5 */}


                      <div className="bg-light py-2 text-center">Secondary Contact</div>


                      <div className="row d-flex">
                        <div className="mb-3 col-md-6">
                          <label for="secondary_first_name" className="col-sm-6 col-form-label">First Name </label>
                          <input type="text" className="form-control" id="secondary_first_name" name="secondary_first_name" placeholder="John" required="" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label for="secondary_last_name" className="col-sm-6 col-form-label">Last Name </label>
                          <input type="text" className="form-control" id="secondary_last_name" name="secondary_last_name" placeholder="Doe" required="" />
                        </div>

                      </div>
                      <div className="row d-flex">
                        <div className="mb-3 col-md-6">
                          <label for="secondary_phone_no" className="col-sm-6 col-form-label">Phone No </label>
                          <input type="text" className="form-control" id="secondary_phone_no" name="secondary_phone_no" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" placeholder="9000000000" maxlength="12" required="" />
                        </div>

                        <div className="mb-3 col-md-6">
                          <label for="secondary_email" className="col-sm-6 col-form-label">Email </label>
                          <input type="email" className="form-control" id="secondary_email" name="secondary_email" placeholder="john.doe@domain.com" required="" />
                        </div>
                      </div>
                      <div className="row d-flex">

                        <div className="mb-3 col-md-6">
                          <label for="secondary_designation">Designation </label>
                          <input type="text" className="form-control" id="secondary_designation" name="secondary_designation" placeholder="CEO" required="" />
                        </div>
                        <div className="row ">
                          <div className="col-12 text-center ">
                            <button type="button" className="btn btn-danger me-2">Save</button>
                            <button type="button" id="reset" className="btn btn-outline-secondary">Clear</button>
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
      </Container >
    </div >
  )
}

export default InviteAgencies

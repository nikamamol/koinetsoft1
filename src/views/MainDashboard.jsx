import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import punchimage from "../assets/punchimage.jpeg"
import campiagn from "../assets/capiagn.png"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import CampaignRevenue from "../chart/CampaignRevenue"
import ClaintRevenue from "../chart/ClaintRevenue"
import TotalClient from "../chart/TotalClient"
import DashboardTable from '../table/DashboardTable';
import { Link } from 'react-router-dom';

function MainDashboard() {

    return (
        <div>
            <Container fluid className='my-3'>
                <Row >
                    <Col lg={3}>
                    </Col>
                    <Col lg={8}>
                        <div className='my-5'>
                            <div className="col-md-12 col-lg-12 mb-3">
                                <div className="card">
                                    <div className="d-flex align-items-end row">
                                        <div className="col-sm-7">
                                            <div className="card-body">
                                                <h5 className="card-title text-danger">Welcome to Koinemedia! 🎉</h5>
                                                <p className="mb-4">
                                                    You have <span className="fw-bold">0</span> active campaigns.
                                                </p>
                                                <Link to="/viewallcampaignsclick" className="btn btn-sm btn-outline-primary">View All Campaigns</Link>
                                            </div>
                                        </div>
                                        <div className="col-sm-5 text-center text-sm-left">
                                            <div className="card-body pb-0 px-0 px-md-2">
                                                <img
                                                    src={campiagn}
                                                    height="200"
                                                    alt="View Badge User"

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-12 mb-3">
                                <div className="card h-100">
                                    <div className="d-flex align-items-end row">
                                        <div className="col-sm-5">
                                            <div className="card-body">
                                                <form action="" method="post">
                                                    <input
                                                        type="hidden"

                                                    />
                                                    <p>I have arrived and am starting work for the day</p>
                                                    <button type="submit" className="btn btn-outline-primary">Punch In</button>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-sm-7 text-center text-sm-left">
                                            <div className="card-bodd">
                                                <img
                                                    src={punchimage}
                                                    height="200"
                                                    alt="View Badge User"

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-12 col-md-4 order-1 my-4">
                            <div className="row">
                                {[
                                    { label: "Total Leads", count: 10, bgClass: "bg-label-primary", iconClass: <PersonOutlineIcon /> },
                                    { label: "Total Client Approved", count: 20, bgClass: "bg-label-success", iconClass: <PersonOutlineIcon /> },
                                    { label: "Total Rejected", count: "05", bgClass: "bg-label-danger", iconClass: <PersonOutlineIcon /> },
                                    { label: "Total Inprogress", count: 25, bgClass: "bg-label-warning", iconClass: <PersonOutlineIcon /> }
                                ].map((item, index) => (
                                    <div className="col-lg-3 col-md-12 col-6 mb-4" key={index}>
                                        <div className="card h-100 cardShadow border-0">
                                            <div className="card-body">
                                                <div className="d-flex">
                                                    <div className="card-title d-flex align-items-start justify-content-between ">
                                                        <div className="avatar flex-shrink-0 me-3 ">
                                                            {item.count}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div>{item.label}</div>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr />
                        <div className="row my-5">
                            <div>
                                <p className='fs-5 text_color fw-bold'>Income Last 6 Month</p>
                            </div>
                            <div className="col-lg-8"><CampaignRevenue /></div>
                            <div className="col-lg-4">
                                <div className="card h-100 border-1">
                                    <div className="card-body">
                                        <div className='text-center mb-5'>
                                            <p className="card-title fs-4">Campaign Revenue - Jul 2024</p>
                                        </div>
                                        <h6 className="card-subtitle mb-2">Total Campaign <span>: 100</span></h6>

                                        <div className="mt-5 text-center bg-danger p-2 fw-bold text-white">
                                            <p className="fs-6 ">Total Revenue: $500</p>
                                        </div>
                                        <div className='mt-3 text-center'>
                                            <p className='fs-5'>Income This Month</p>

                                            <p className='fs-6'><span className='text-danger'>0% </span> less than last month</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row my-5 border p-5  rounded-3 sidebar_bg">

                            <div className="col-lg-6 ">
                                <div className="card h-100 border-0 rounded-3 sidebar_bg">
                                    <div className="card-body">
                                        <div className='text-start mb-5'>
                                            <p className="card-title fs-4">Client Revenue - Jul 2024</p>
                                        </div>
                                        <h6 className="card-subtitle mb-2 ">Total Client <span>: 555</span></h6>

                                        <div className="my-3 text-start  fw-bold">
                                            <p className="fs-5 text_color">Total Revenue: $999</p>
                                        </div>
                                        <p className='mt-5'>This section provides a snapshot of client revenue for July 2024, highlighting the total number of clients and the overall revenue generated. </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 bg-white d-flex justify-content-center align-items-center ms-auto shadow ">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='text-center'>
                                            <h5>
                                                Total Revenue :

                                            </h5>
                                        </div>
                                        <ClaintRevenue />
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='text-center'>
                                            <h5>
                                                Total Client :
                                            </h5>
                                        </div>
                                        <TotalClient />
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* table */}
                        <DashboardTable />



                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainDashboard

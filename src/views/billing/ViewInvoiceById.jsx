import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import Logo from "../../assets/Logo.png";
import { useParams } from 'react-router-dom';

const Invoice = () => {
    const { id } = useParams()
    const [invoiceData, setInvoiceData] = useState(null);

    useEffect(() => {
        const fetchInvoice = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/user/getInvoiceById/${id}`);
                setInvoiceData(response.data.data);
            } catch (error) {
                console.error('Error fetching invoice:', error);
            }
        };

        fetchInvoice();
    }, []);

    if (!invoiceData) {
        return <div>Loading...</div>;
    }

    return (
        <section>
            <div className="invoice">
                <div className="top_line"></div>
                <div className="header">
                    <div className="i_row">
                        <div className="i_logo">
                            <img src={Logo} alt="Company Logo" width={80} height={50} />
                            <div>Koinet Media Ites Pvt Ltd.</div>
                        </div>
                        <div className="i_title">
                            <h2>INVOICE</h2>
                            <p>{invoiceData.date}</p>
                        </div>
                    </div>
                    <div className="i_row">
                        <div className="i_number">
                            <p className="p_title">INVOICE NO: {invoiceData.invoiceNumber}</p>
                        </div>
                        <div className="i_address ">
                            <p>TO</p>
                            <p className="">
                                {invoiceData.clientName}
                                <br />
                                <textarea
                                    className="border-0 p-2 in_background"
                                    value={invoiceData.clientAddress}
                                    readOnly
                                />
                            </p>
                        </div>
                    </div>
                </div>

                <div className="body">
                    <div className="i_table">
                        <div className="i_table_head">
                            <div className="i_row">
                                <div className="i_col w_15">
                                    <p className="p_title">QTY</p>
                                </div>
                                <div className="i_col w_55">
                                    <p className="p_title">DESCRIPTION</p>
                                </div>
                                <div className="i_col w_15">
                                    <p className="p_title">PRICE</p>
                                </div>
                                <div className="i_col w_15">
                                    <p className="p_title">TOTAL</p>
                                </div>
                            </div>
                        </div>

                        <div className="i_table_body">
                            {invoiceData.items.map((item, index) => (
                                <div className="i_row" key={index}>
                                    <div className="i_col w_15">
                                        <p>{item.qty}</p>
                                    </div>
                                    <div className="i_col w_55">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="i_col w_15">
                                        <p>${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="i_col w_15 ">
                                        <p>${item.total.toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <hr />
                        <div className="i_table_foot mt-2">
                            <div className="i_row">
                                <div className="i_col w_20"></div>
                                <div className="i_col w_55"></div>
                                <div className="i_col w_20">
                                    <p>Sub Total</p>
                                    <p>Tax 10%</p>
                                </div>
                                <div className="i_col w_20">
                                    <p>${invoiceData.subTotal.toFixed(2)}</p>
                                    <p>${invoiceData.tax.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="text-end " style={{ width: "700px" }}>
                                <hr />
                                <span className="p-3 fw-bold">Grand Total:</span>
                                <span className="p-3 fw-bold">${invoiceData.grandTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="i_row_footer d-flex justify-content-between align-items-start">
                        <div className="i_col">
                            <p className="p_title">Payment Method</p>
                        </div>

                        <div className="ms-2">
                            <p className="p_title">Bank Name</p>
                            <p>{invoiceData.bankName}</p>
                        </div>

                        <div className="ms-2">
                            <p className="p_title">Account Number</p>
                            <p>{invoiceData.accountNumber}</p>
                        </div>

                        <div className="ms-2  w-25">
                            <p className="p_title">Terms and Conditions</p>
                            <p>{invoiceData.terms}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

function ViewInvoiceById() {
    return (
        <div>
            <Container fluid className="my-5">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={8}>
                        <div className="bgColor rounded-3 shadow">
                            <h4 className="fw-bold py-3 ms-3 text_color">View Invoice</h4>
                        </div>
                        <div>
                            <Invoice />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ViewInvoiceById;

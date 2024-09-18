import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';

const Invoice = () => {
    const [invoiceData, setInvoiceData] = useState({
        logo: 'https://www.koinetmedia.com/images/Logo.png',
        date: 'April 20, 2023',
        invoiceNumber: '3452324',
        clientName: 'Test Pvt Ltd.',
        clientAddress: 'xyz, text, United States',
        items: [
            {
                qty: 3,
                description: 'Lorem, ipsum.',
                details: ' Content',
                price: 10,
                total: 30,
            },
        ],
        subTotal: 100,
        tax: 10,
        grandTotal: 110,
        paymentMethod: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, dicta distinctio!',
        terms: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, dicta distinctio!',
    });

    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

    // Handlers to update fields
    const updateField = (field, value) => {
        setInvoiceData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const updateItem = (index, field, value) => {
        const updatedItems = invoiceData.items.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
        );
        setInvoiceData((prevState) => ({
            ...prevState,
            items: updatedItems,
        }));
    };

    const addItem = () => {
        setInvoiceData((prevState) => ({
            ...prevState,
            items: [
                ...prevState.items,
                {
                    qty: 0,
                    description: '',
                    details: '',
                    price: 0,
                    total: 0,
                },
            ],
        }));
    };

    const generatePDF = () => {
        setIsGeneratingPDF(true);
        const invoiceElement = document.querySelector('.invoice');
        html2canvas(invoiceElement).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 295; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
    
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            heightLeft -= pageHeight;
    
            while (heightLeft >= 0) {
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, heightLeft, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            pdf.save('invoice.pdf');
            setIsGeneratingPDF(false);
    
            // Send invoice data to the backend
            axios.post('http://localhost:4000/user/createInvoice', invoiceData)
                .then((response) => {
                    console.log('Invoice data sent to server:', response.data);
                })
                .catch((error) => {
                    console.error('Error sending invoice data:', error);
                });
        });
    };
    const handleGeneratePDFClick = () => {
        setIsGeneratingPDF(true);
        setTimeout(() => {
            generatePDF();
        }, 2000); 
    };

    const removeItem = (index) => {
        const updatedItems = invoiceData.items.filter((_, i) => i !== index);
        setInvoiceData((prevState) => ({
            ...prevState,
            items: updatedItems,
        }));
    };

    return (
        <section>
            <div className="invoice">
                <div className="top_line"></div>
                <div className="header">
                    <div className="i_row">
                        <div className="i_logo">
                            {/* <p>{invoiceData.logo}</p> */}
                            <img src={invoiceData.logo} alt="Company Logo Img" width={100} height={50}/>
                            <div>Koinet Media Ites Pvt Ltd.</div>
                        </div>
                        <div className="i_title">
                            <h2>INVOICE</h2>
                            <p className="p_title text_right">{invoiceData.date}</p>
                        </div>
                    </div>
                    <div className="i_row">
                        <div className="i_number">
                            <p className="p_title">INVOICE NO: {invoiceData.invoiceNumber}</p>
                        </div>
                        <div className="i_address text_right">
                            <p>TO</p>
                            <p className="p_title">
                                {invoiceData.clientName} <br />
                                <span>{invoiceData.clientAddress}</span>
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
                                    <div className="i_col w_15 border-0">
                                        <input
                                            type="number"
                                            className='border-0 p-2 in_background'
                                            value={item.qty}
                                            onChange={(e) => updateItem(index, 'qty', e.target.value)}
                                        />
                                    </div>
                                    <div className="i_col w_55">
                                        <input
                                            type="text"
                                            className='border-0 p-2 in_background'
                                            value={item.description}
                                            onChange={(e) => updateItem(index, 'description', e.target.value)}
                                        />
                                        <span>{item.details}</span>
                                    </div>
                                    <div className="i_col w_15">
                                        <input
                                            type="number"
                                            className='border-0 p-2 in_background'
                                            value={item.price}
                                            onChange={(e) => updateItem(index, 'price', e.target.value)}
                                        />
                                    </div>
                                    <div className="i_col w_15 mt-2">
                                        <p>{item.total}</p>
                                    </div>

                                    {!isGeneratingPDF && (
                                        <Tooltip title="Delete Item">
                                            <IconButton>
                                                <DeleteIcon onClick={() => removeItem(index)} />
                                            </IconButton>
                                        </Tooltip>
                                    )}
                                </div>
                            ))}
                            {!isGeneratingPDF && (
                                <div>
                                    <button onClick={addItem} className="mt-3 btn btn-sm btn-outline-primary">
                                        Add Item <AddIcon />
                                    </button>
                                </div>
                            )}
                        </div>

                        <hr />
                        <div className="i_table_foot">
                            <div className="i_row">
                                <div className="i_col w_15"></div>
                                <div className="i_col w_55"></div>
                                <div className="i_col w_15">
                                    <p>Sub Total</p>
                                    <p>Tax 10%</p>
                                </div>
                                <div className="i_col w_15">
                                    <p>${invoiceData.subTotal}</p>
                                    <p>${invoiceData.tax}</p>
                                </div>
                            </div>
                          

                            <div className='d-flex justify-content-end ' >
                                <p className='bg-info w-50 p-3 fw-bold'>Grand Total : ${invoiceData.grandTotal}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="i_row">
                        <div className="i_col w_50">
                            <p className="p_title">Payment Method</p>
                            <p>{invoiceData.paymentMethod}</p>
                        </div>
                        <div className="i_col w_50 text_right">
                            <p className="p_title">Terms and Conditions</p>
                            <p>{invoiceData.terms}</p>
                        </div>
                    </div>
                </div>

                <div className="bottom_line"></div>


                {!isGeneratingPDF && (
                    <div>
                        <button onClick={handleGeneratePDFClick} className="mt-3 btn btn-sm btn-outline-danger">
                            Save PDF
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
};




function CreateNewInvoice() {
    return (
        <div>
            <Container fluid className="my-5">
                <Row>
                    <Col lg={3}></Col>
                    <Col lg={8}>
                        <div className="bgColor rounded-3 shadow">
                            <h4 className="fw-bold py-3 ms-3 text_color">Create Invoice</h4>
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

export default CreateNewInvoice;

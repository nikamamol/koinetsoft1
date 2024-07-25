import { Padding } from "@mui/icons-material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import OtpInput from "react-otp-input";

export default function MyOtpInput() {
    const [code, setCode] = useState("");

    const handleChange = (code) => setCode(code);

    const renderCustomInput = (props) => (
        <input
            {...props}
            style={{
                border: "1px solid transparent",
                borderRadius: "8px",
                width: "54px",
                height: "54px",
                fontSize: "12px",
                color: "#000",
                fontWeight: "400",
                caretColor: "blue",
                marginRight: "10px"
            }}
        />
    );

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center align-items-center vh-100 p-5">
                        <div className="MyInput p-5 ">
                            <h5>Please Enter Your OTP......</h5>
                            <OtpInput
                                value={code}
                                onChange={handleChange}
                                numInputs={6}
                                separator={<span style={{ width: "8px" }}></span>}
                                isInputNum={true}
                                shouldAutoFocus={true}
                                renderInput={renderCustomInput}
                                style={{
                                    border: "1px solid #CFD3DB",
                                    outline: "none"

                                }}
                            />
                            <div className="text-center mt-3">
                                <Button className="btn btn-danger btn-lg">Submit OTP</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

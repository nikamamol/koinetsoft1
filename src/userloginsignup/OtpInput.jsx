import React, { useState } from "react";
import { Button } from "react-bootstrap";
import OtpInput from "react-otp-input";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Assuming you're using react-router-dom for navigation

export default function MyOtpInput() {
    const [code, setCode] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook to navigate to different routes

    const handleChange = (code) => {
        setCode(code);
        setError(""); // Clear error on input change
    };


    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:4000/user/verify-otp", { otp: code });
            if (response.status === 200) {
                const { token } = response.data;
                localStorage.setItem('authToken', token);
                // Redirect to dashboard on successful OTP verification
                navigate("/dashboard");
            }
        } catch (error) {
            setError(error.response?.data?.message || "Error verifying OTP");
        }
    };

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
        <div className="container">
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center align-items-center vh-100 p-5">
                    <div className="MyInput p-5">
                        <h5>Please Enter Your OTP...</h5>
                        {error && <p className="text-danger">{error}</p>}
                        <OtpInput
                            value={code}
                            onChange={handleChange}
                            numInputs={6}
                            separator={<span style={{ width: "8px" }}></span>}
                            isInputNum={true}
                            shouldAutoFocus={true}
                            renderInput={renderCustomInput}
                        />
                        <div className="text-center mt-3">
                            <Button className="btn btn-danger btn-lg" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

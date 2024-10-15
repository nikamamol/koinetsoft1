import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../redux/reducer/registeruser/Login";
import LogoImge from "../assets/koinetlogo.png";
import Hourglass from "../assets/Hourglass.gif";
import GiftImage from "../assets/robot.gif";  // Add this line to import the gift image
import { toast } from 'react-toastify';
import BetaImg from "../assets/beta.png"


function Login() {
    const dispatch = useDispatch();
    const { error, message, isLoading } = useSelector(state => state.auth);
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            navigate('/dashboard');
        }
    }, [navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(loginUser({ email, password }))
            .unwrap()
            .then(() => {
                navigate('/enterotp', { state: { email } });
            })
            .catch(() => {
                toast.error('Invalid email or password');
            });
    };

    return (
       <>
        <div className="container-fluid bgGradinet">
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-5 col-md-6 col-sm-11 card border-0 shadow p-5 cardbg" style={{ backgroundColor: "#F8F4E1" }}>
                        <div className='text-center'>
                            <p>
                                <img src={LogoImge} alt="" width={200} height={100} />
                                <p>Koinet Media Ites Pvt Ltd.</p>
                            </p>
                            <div>
                                <h4> Welcome to Koinet-Media! 👋 </h4>
                                <p>
                                    Sign-in to your account and roll up your sleeves to work on the campaign!
                                </p>
                            </div>
                        </div>
                        {error && <div className="alert alert-danger">{error}</div>}
                        {message && <div className="alert alert-success">{message}</div>}

                        <form id="loginForm" onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    aria-describedby="emailHelp"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="mb-2 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <div className="g-recaptcha" data-sitekey="6Lf6gQEqAAAAAJKaLIjO4drMp-GMKAvId5yejdE5"></div>

                            <div className="text-center mt-3">
                                {isLoading ? <div><img src={Hourglass} alt="" height={40} width={40} /></div> : <button type="submit" className="btn btn-danger rounded-5 w-50" >Log In </button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Gift Image */}
            <img
                src={GiftImage}  // Use the imported image here
                alt="Gift"
                 className="d-none d-lg-block"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '300px',
                    height: '300px',
                    cursor: 'pointer',
                }}
            />
        </div>
        <div>
            <img src={BetaImg} alt="" className='beta-banner' />
        </div>
       </>
    );
}

export default Login;

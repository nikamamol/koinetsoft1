import React from 'react'
import LogoImge from "../assets/koinetlogo.png"

function Login() {
    return (
        <div className="container-fluid ">
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center align-items-center vh-100">
                    <div className="col-lg-6 col-md-6 col-sm-11 card border-0 rounded-5 shadow p-5 cardbg" style={{ backgroundColor: "#F8F4E1" }}>
                        <div className='text-center'>
                            <p >
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
                        <form id="loginForm">
                            <div className="mb-2">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-control" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-2">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" id="password" className="form-control" required />
                            </div>
                            <div className="mb-2 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div className="g-recaptcha " data-sitekey="6Lf6gQEqAAAAAJKaLIjO4drMp-GMKAvId5yejdE5"></div>

                            <div className="text-center mt-3">
                                <button type="submit" className="btn btn-danger rounded-5 w-50">Log In</button>
                            </div>
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    const handleLogin = (e) => {
        e.preventDefault();

        setEmailError('');
        setPasswordError('');

        if (!email) {
            setEmailError('Email is required');
            return;
        }

        if (!validateEmail(email)) {
            setEmailError('Invalid email format');
            return;
        }

        if (!password) {
            setPasswordError('Password is required');
            return;
        }

        const data = {
            Email : email,
            Password : password,
            UserType: userType
        }

        const url = `https://localhost:7170/api/User/UserLogin`;
        axios.post(url, data)
        .then((result) => {
            const dt = result.data;
            localStorage.setItem("loggedInEmail", email);
            alert(dt.statusMessage);

            const userType = dt.userType;


            console.log("User type 1:", userType);
            console.log("User type 2:", userType);


            if (userType === "General User"){
                navigate('/UserHome');
            } else if (userType === "Admin"){
                navigate('/ManageVehicles');
            } else {
                console.error('Invalid user type:', userType);
            }
        })
        .catch((error)=>{
            console.log(error);
          })
    }

    return(
        <div>
            <section class="vh-100">
            <div class="container-fluid h-custom">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    class="img-fluid" alt="Sample image"/>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form>
                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p class="lead fw-bold mb-0 me-3">LOGIN</p>
                    </div>

                    <div class="divider d-flex align-items-center my-4"></div>

                    <div class="form-outline mb-4">
                        <input type="email" id="form3Example3" className={`form-control form-control-lg ${emailError ? 'is-invalid' : ''}`}
                        placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <div className="invalid-feedback">{emailError}</div>}
                    </div>

                    <div class="form-outline mb-3">
                        <input type="password" id="form3Example4" className={`form-control form-control-lg ${passwordError ? 'is-invalid' : ''}`}
                        placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                        {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="userRadio"
                            name="userType"
                            value="General User"
                            checked={userType === 'General User'}
                            onChange={() => setUserType('General User')}
                        />
                        <label className="form-check-label" htmlFor="userRadio">
                            General User
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="adminRadio"
                            name="userType"
                            value="Admin"
                            checked={userType === 'Admin'}
                            onChange={() => setUserType('Admin')}
                        />
                        <label className="form-check-label" htmlFor="adminRadio">
                            Admin
                        </label>
                    </div>

                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="button" class="btn btn-primary btn-lg"
                        style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }} onClick={(e) => handleLogin(e)}>Login</button>
                        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="./Registration"
                            class="link-danger">Register</a></p>
                    </div>

                    </form>
                </div>
                </div>
            </div>
            <div
                class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
                <div class="text-white mb-3 mb-md-0">
                Copyright © 2024. All rights reserved.
                </div>

                <div>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#!" class="text-white me-4">
                    <i class="fab fa-google"></i>
                </a>
                <a href="#!" class="text-white">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Login;

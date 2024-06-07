import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8080/api/student/login',
                { email, password }, 
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (response.data === 'Login Successful!') {
                window.alert("Login Succesfully");
                window.location.href='https://www.google.com/'
            } else {
                alert('Login Failed');
            }
        } catch (error) {
            alert("Login failed")
        }
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-5">
                    <div className="card shadow-lg border-0 rounded-lg">
                        <div className=" text-center">
                            <h3 className="my-3">Login</h3>
                        </div>
                        <div className="p-4">
                            <form onSubmit={handleSubmit} action='Success' method='post' >
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className='d-flex justify-content-start'>Email ID</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="password" className='d-flex justify-content-start'>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                                <p className='d-flex justify-content-start'>Don't have an account? <a className='link'>Register</a></p>
                            </form>
                            <div className=" row text-center mt-3">
                                <p>Or</p>
                                <a href="https://accounts.google.com/" target="blank" rel="noopener noreferrer" className="col btn btn-primary w-100 custom-google-btn m-2">
                                    Login with Google
                                </a>
                                <a href="https://www.facebook.com/" target="blank" rel="noopener noreferrer" className="col btn btn-primary w-100  custom-facebook-btn m-2">
                                    Login with Facebook
                                </a>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
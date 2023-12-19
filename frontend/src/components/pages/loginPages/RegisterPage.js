import React, { useState } from "react";
import {Helmet} from "react-helmet";

import "./loginStyles.scss";
import duck from "../../../resources/img/tealmarket-logo.png";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegistration = () => {
        console.log(username, email, password);
    };

    return (
        <div className="login-background">
            <Helmet>
                <meta
                    name="description"
                    content="Registration"
                />
                <title>Registration</title>
            </Helmet>
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 offset-4 login-box position-relative">
                        <img className='duck-logo' src={duck} alt="Duck logo" style={{top: "5%", left: "42%"}}/>
                        <div className="sign-in-header">Registration</div>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary btn-block"
                                onClick={handleRegistration}
                                style={{border: "1px solid #fff"}}
                            >
                                Create new account
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary btn-block"
                                onClick={() => console.log("Back")}
                            >
                                Back to login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;


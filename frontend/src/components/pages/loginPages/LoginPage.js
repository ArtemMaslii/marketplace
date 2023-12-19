import React, { useState } from "react";
import { Helmet } from "react-helmet";

import "./loginStyles.scss";
import duck from "../../../resources/img/tealmarket-logo.png";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log(email, password);
    };

    return (
        <div className="login-background">
            <Helmet>
                <meta
                    name="description"
                    content="Login"
                />
                <title>Login</title>
            </Helmet>
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 offset-4 login-box position-relative">
                        <img className='duck-logo'  src={duck} alt="Duck logo"/>
                        <div className="sign-in-header">Sign in</div>
                        <form>
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
                                onClick={handleLogin}
                            >
                                Sign in
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary btn-block"
                                onClick={() => console.log("register")}
                            >
                                Create new account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;


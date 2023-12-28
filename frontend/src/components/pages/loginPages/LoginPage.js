import {useState} from "react";

import duck from "../../../resources/img/Oragne-duck.png";
import "./login.scss";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <div className="login-background">
            <div className="gradient-container d-flex align-items-center justify-content-center flex-column">
                <div className="animated-logo">
                    <img src={duck} alt="Duck logo"/>
                </div>
                <div className="animated-span">
                    <h2>Teal Market</h2>
                    <h3>Splash of Unique!</h3>
                    <h5>Start purchase now!</h5>
                </div>
            </div>
            <div className="container login-container">
                    <div className="d-flex flex-column align-items-center justify-content-center h-100">
                        <div className="wrapper">
                            <div className="logo">
                                <img src={duck} alt="Duck logo"/>
                            </div>
                            <div className="text-center mt-4 sign-in">
                                Sign in
                            </div>
                            <form className="p-3 mt-3">
                                <div className="form-field d-flex align-items-center">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-field d-flex align-items-center">
                                    <input
                                        type="password"
                                        name="password"
                                        id="pwd"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                    />
                                </div>
                                <button
                                    className="btn mt-3"
                                    onClick={handleLogin}
                                >Login</button>
                            </form>
                            <div className="text-center fs-6">
                                <Link to="#">Forget password?</Link> or <Link to="/">Sign up</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default LoginPage;


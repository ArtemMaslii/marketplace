import {Fragment, useState} from "react";

import duck from "../../../resources/img/Blue-duck.png";
import "./register.scss";
import {Link} from "react-router-dom";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isNext, setIsNext] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(username, email, password);
    };

    const handleNext = () => {
        setIsNext(!isNext);
    }

    return (
        <Fragment>
        <div className="register-background">
            <div className="container register-container">
                <div className="d-flex flex-column align-items-center justify-content-center h-100">
                    <div className="wrapper">
                        <div className="m-auto" style={{width: "100px"}}>
                            <img src={duck} alt="Duck logo" className="w-100 object-fit-cover"/>
                        </div>
                        <div className="text-center mt-4 registration">
                            Registration
                        </div>
                        <form className="p-3 mt-3">
                            <div className={`form-field ${isNext ? "d-none" : "slide-in-left"}`}>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Username"
                                />
                            </div>
                            <div className={`form-field ${isNext ? "d-none" : "slide-in-left"}`}>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                />
                            </div>
                            <div className={`form-field ${isNext ? "slide-in-left" : "d-none"}`}>
                                <input
                                    type="password"
                                    name="password"
                                    id="pwd"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>
                            <div className={`form-field ${isNext ? "slide-in-left" : "d-none"}`}>
                                <input
                                    type="password"
                                    name="cnf-password"
                                    id="cnf-password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button
                                    type="button"
                                    className={`btn mt-3 ${isNext ? "d-none" : "slide-in-left"}`}
                                    onClick={handleNext}
                                >Next</button>
                                <button
                                    type="submit"
                                    className={`btn mt-3 m-auto ${isNext ? "slide-in-left" : "d-none"}`}
                                    onClick={handleLogin}
                                >Register</button>
                                <button
                                    type="button"
                                    className={`btn mt-3 m-auto ${isNext ? "slide-in-left" : "d-none"}`}
                                    onClick={handleNext}
                                >Back</button>
                            </div>
                            <div className="text-center fs-6 mt-2">
                                <Link to="/login">Have a profile?</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="gradient-container d-flex align-items-center justify-content-center flex-column">
                <div className="animated-logo">
                    <img src={duck} alt="Duck logo"/>
                </div>
                <div className="animated-span">
                    <h2>Dive into the Teal Market</h2>
                    <h3>Unlock the Extraordinary!</h3>
                    <h5>Begin your journey now!</h5>
                </div>
            </div>
        </div>
    </Fragment>
    );
};

export default RegisterPage;


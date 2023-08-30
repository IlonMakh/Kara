import React, { useState } from "react";
import bg from "../assets/images/offer_2.jfif"
import { Link } from "react-router-dom";

export default function Login() {
    const [haveAccount, setHaveAccount] = useState(true);
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const handleAccount = () => {
        setHaveAccount(!haveAccount);
    }
    const handlePassword = () => {
        setIsPasswordShown(!isPasswordShown);
    }

    return (
        <section className="login">
            <div className="login__img">
                <img className="login__img-bg" src={bg} alt="background" />
                <div className="login__img-shadow"></div>
                <Link to={'/'} className="login__img-logo">Kara</Link>
            </div>
            <div className="login__content">
                <div className="login__content-wrapper">
                    <h4 className="login__content-title">{haveAccount ? 'Login' : 'Register'}</h4>
                    <form className="login__content-form">
                        {!haveAccount ? (
                            <>
                                <div className="login__content-form-item">
                                    <label className="login__content-form-label" htmlFor="first_name">First name</label>
                                    <input className="login__content-form-input" id="first_name" placeholder="Enter first name..." />
                                </div>
                                <div className="login__content-form-item">
                                    <label className="login__content-form-label" htmlFor="last_name">Last name</label>
                                    <input className="login__content-form-input" id="last_name" placeholder="Enter last name..." />
                                </div>
                            </>
                        ): <></>}
                        <div className="login__content-form-item">
                            <label className="login__content-form-label" htmlFor="mail">Email</label>
                            <input className="login__content-form-input" id="mail" placeholder="Enter email..." />
                        </div>
                        <div className="login__content-form-item">
                            <label className="login__content-form-label" htmlFor="password">Password</label>
                            <input
                                className="login__content-form-input login__content-form-input_password"
                                id="password"
                                placeholder="Enter password..."
                                type={isPasswordShown ? "text" : "password"}
                            />
                            <svg className="password-ico" onClick={handlePassword}>
                                <use href= {isPasswordShown ? "#hide" : "#show"} />
                            </svg>
                        </div>
                        <button className="login__content-form-btn"><span>{haveAccount ? 'Login' : 'Register'}</span></button>
                    </form>
                </div>
                <div className="login__content-invite"> {haveAccount ? 'Don\'t have an account yet?' : 'Already have an account?'} <span className="login__content-invite-link" onClick={handleAccount}>{haveAccount ? 'Register here' : 'Login here'}</span></div>
            </div>
        </section>
    );
}

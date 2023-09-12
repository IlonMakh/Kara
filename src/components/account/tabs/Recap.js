import React from "react";
import accountImg from "../../../assets/images/account.jpg";

export default function Recap({changeTab}) {
    const sections = [
        {
            title: "Orders",
            description:
                "Track your orders and discover when they will arrive.",
        },
        {
            title: "Wishlist",
            description: "A section with your favorites items saved.",
        },
        {
            title: "Personal data",
            description:
                "Check all about your preferences, address and payment settings.",
        },
    ];
    return (
        <section className="account__recap">
            <div className="container">
                <div className="account__recap-info">
                    <p className="account__recap-greeting">
                        Welcome,{" "}
                        <span className="account__recap-greeting-name">
                            Anastasiya
                        </span>
                    </p>
                    <div className="account__recap-profile">
                        <div className="account__recap-name">
                            <div className="account__recap-name-first">
                                <span className="account__recap-name-title">
                                    First name
                                </span>
                                <span className="account__recap-name-content">
                                    Kara
                                </span>
                            </div>
                            <div className="account__recap-name-last">
                                <span className="account__recap-name-title">
                                    Last name
                                </span>
                                <span className="account__recap-name-content">
                                    Anastasiya
                                </span>
                            </div>
                        </div>
                        <div className="account__recap-email">
                            <div className="account__recap-email-wrapper">
                                <span className="account__recap-email-title">
                                    Email
                                </span>
                                <span className="account__recap-email-content">
                                    kara@gmail.ru
                                </span>
                            </div>
                        </div>
                        <div className="account__recap-password">
                            <div className="account__recap-password-wrapper">
                                <span className="account__recap-password-title">
                                    Password
                                </span>
                                <input
                                    className="account__recap-password-content"
                                    value="dlldlkkfjkjkl"
                                    type="password"
                                    disabled
                                />
                            </div>
                        </div>
                    </div>
                    <button className="account__recap-modify">
                        <span>Modify profile</span>
                    </button>
                </div>
                <div className="account__recap-sections">
                    {sections.map((section) => (
                        <div
                            key={section.title}
                            className="account__recap-section">
                            <h6 className="account__recap-section-title" onClick={() => changeTab(section.title)}>
                                {section.title}
                            </h6>
                            <p className="account__recap-section-description">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="account__recap-img">
                    <img className="account__recap-bg" src={accountImg} alt="background"/>
                </div>
            </div>
        </section>
    );
}

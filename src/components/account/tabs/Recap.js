import React, { useState } from "react";
import accountImg from "../../../assets/images/account.jpg";

export default function Recap({ changeTab }) {
    const [defaultData, setDefaultData] = useState({
        first_name: "Anastasia",
        last_name: "Kara",
        email: "kara@gmail.com",
        password: "1234567890",
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [accountData, setAccountData] = useState(
        defaultData
    );

    const applyInfo = (e) => {
        e.preventDefault();
        
        setIsEditMode(false);
        setDefaultData(accountData);
    }

    const cancelModify = (e) => {
        setIsEditMode(false);
        setAccountData(defaultData);
    }

    const toggleModifyMode = () => {
        setIsEditMode(true);
        setDefaultData(accountData);
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;

        setAccountData(prevCardData => ({
            ...prevCardData,
            [id]: value
        }));
    }

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
                {!isEditMode ? (
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
                                        {accountData.first_name}
                                    </span>
                                </div>
                                <div className="account__recap-name-last">
                                    <span className="account__recap-name-title">
                                        Last name
                                    </span>
                                    <span className="account__recap-name-content">
                                        {accountData.last_name}
                                    </span>
                                </div>
                            </div>
                            <div className="account__recap-email">
                                <div className="account__recap-email-wrapper">
                                    <span className="account__recap-email-title">
                                        Email
                                    </span>
                                    <span className="account__recap-email-content">
                                        {accountData.email}
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
                                        defaultValue={accountData.password}
                                        type="password"
                                        disabled
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            className="account__recap-modify"
                            onClick={toggleModifyMode}>
                            <span>Modify profile</span>
                        </button>
                    </div>
                ) : (
                    <div className="account__recap-info">
                        <form className="account__recap-info-form" onSubmit={applyInfo}>
                            <div className="account__recap-item">
                                <div className="account__recap-name-wrapper">
                                    <label
                                        htmlFor="first_name"
                                        className="account__recap-label">
                                        First name
                                    </label>
                                    <input
                                        id="first_name"
                                        className="account__recap-input"
                                        defaultValue={accountData.first_name}
                                        type="text"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="account__recap-item">
                                <div className="account__recap-name-wrapper">
                                    <label
                                        htmlFor="last_name"
                                        className="account__recap-label">
                                        Last name
                                    </label>
                                    <input
                                        id="last_name"
                                        className="account__recap-input"
                                        defaultValue={accountData.last_name}
                                        type="text"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="account__recap-item">
                                <div className="account__recap-email-wrapper">
                                    <label
                                        htmlFor="email"
                                        className="account__recap-label">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        className="account__recap-input"
                                        defaultValue={accountData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="account__recap-password">
                                <div className="account__recap-password-wrapper">
                                    <label
                                        htmlFor="password"
                                        className="account__recap-label">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        className="account__recap-input"
                                        defaultValue={accountData.password}
                                        type="password"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="account__recap-btns">
                                <button
                                    className="account__recap-apply"
                                    type="submit">
                                    Apply
                                </button>
                                <button
                                    className="account__recap-cancel"
                                    onClick={cancelModify}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
                <div className="account__recap-sections">
                    {sections.map((section) => (
                        <div
                            key={section.title}
                            className="account__recap-section">
                            <h6
                                className="account__recap-section-title"
                                onClick={() => changeTab(section.title)}>
                                {section.title}
                            </h6>
                            <p className="account__recap-section-description">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="account__recap-img">
                    <img
                        className="account__recap-bg"
                        src={accountImg}
                        alt="background"
                    />
                </div>
            </div>
        </section>
    );
}

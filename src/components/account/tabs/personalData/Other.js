import React from "react";

export default function Other() {
    return (
        <div className="account__personal-other">
            <form className="account__personal-form">
                <div className="account__personal-other-name">
                    <div className="account__personal-other-first">
                        <label
                            htmlFor="first"
                            className="account__personal-label">
                            First name
                        </label>
                        <input
                            id="first"
                            className="account__personal-input"
                            type="text"
                            value={"Anastasiya"}
                        />
                    </div>
                    <div className="account__personal-other-last">
                        <label
                            htmlFor="last"
                            className="account__personal-label">
                            Last name
                        </label>
                        <input
                            id="last"
                            className="account__personal-input"
                            type="text"
                            value={"Anastasiya"}
                        />
                    </div>
                </div>
                <div className="account__personal-other-date">
                    <label htmlFor="date" className="account__personal-label">
                        Date of birth
                    </label>
                    <input
                        id="date"
                        className="account__personal-input"
                        type="date"
                    />
                </div>
                <div className="account__personal-other-phone">
                    <label htmlFor="phone" className="account__personal-label">
                        Phone
                    </label>
                    <input
                        id="phone"
                        className="account__personal-input"
                        type="text"
                    />
                </div>
                <div className="account__personal-other-email">
                    <label htmlFor="email" className="account__personal-label">
                        Email
                    </label>
                    <input
                        id="email"
                        className="account__personal-input"
                        type="text"
                        value="ggggg@mail.com"
                    />
                </div>
                <div className="account__personal-btns">
                    <button className="account__personal-apply">Apply</button>
                    <button className="account__personal-cancel">Cancel</button>
                </div>
            </form>
        </div>
    );
}

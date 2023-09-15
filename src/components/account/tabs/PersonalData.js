import React, { useState } from "react";
import Payment from "./personalData/Payment";
import Other from "./personalData/Other";
import Adress from "./personalData/Adress";

export default function PersonalData() {
    const [currentTab, setCurrentTab] = useState("other info");
    const tabs = ["other info", "adress", "payment"];
    const isActive = (tab) =>
        currentTab === tab
            ? "account__personal-menu-item active"
            : "account__personal-menu-item";
    const getCurrentTab = () => {
        switch (currentTab) {
            case "other info":
                return <Other />;

            case "adress":
                return <Adress />;

            case "payment":
                return <Payment />;

            default:
                break;
        }
    };
    return (
        <section className="account__personal">
            <div className="container">
                <h6 className="account__personal-title">Personal Data</h6>
                <ul className="account__personal-menu">
                    {tabs.map((tab) => (
                        <li
                            key={tab}
                            className={isActive(tab)}
                            onClick={() => setCurrentTab(tab)}>
                            {tab}
                        </li>
                    ))}
                </ul>
                <div className="account__personal-data">
                    {getCurrentTab()}
                </div>
            </div>
        </section>
    );
}

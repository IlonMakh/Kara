import React from "react";

export default function Menu({changeTab, currentTab}) {
    const tabs = ["Recap", "Orders", "Wishlist", "Personal data"];
    const isActive = (tab) => currentTab === tab ? "account__menu-item active" : "account__menu-item";
    return (
        <section className="account__menu">
            <div className="container">
                <ul className="account__menu-list">
                    {tabs.map((tab) => (
                        <li key={tab} className={isActive(tab)} onClick={() => changeTab(tab)}>
                            {tab}
                        </li>
                    ))}
                </ul>
                <button className="account__menu-out">Log out</button>
            </div>
        </section>
    );
}

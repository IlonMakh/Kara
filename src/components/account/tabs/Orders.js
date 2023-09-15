import React, { useState } from "react";
import img1 from "../../../assets/images/product_1.jpg";
import img2 from "../../../assets/images/product_2.jpg";
import img3 from "../../../assets/images/product_3.jpg";
import Card from "./orders/Card";

export default function Orders() {
    const [currentTab, setCurrentTab] = useState("active");
    const orders = ["active", "history", "returns"];
    const cards = {
        active: [],
        history: [
            {
                id: 0,
                images: [img1, img2, img3],
                isNew: true,
                title: "Short jacket",
                price: "1,234",
            },

            {
                id: 1,
                images: [img2, img1, img3],
                isNew: true,
                title: "Short jacket",
                price: "1,234",
            },
        ],
        returns: [
            {
                id: 3,
                images: [img2, img1, img3],
                isNew: true,
                title: "Short jacket",
                price: "1,234",
            },
        ],
    };
    const isActive = (tab) => currentTab === tab ? "account__orders-menu-item active" : "account__orders-menu-item";
    const getCurrentOrders = () => cards[currentTab];
    return (
        <section className="account__orders">
            <div className="container">
                <h6 className="account__orders-title">Orders</h6>
                <ul className="account__orders-menu">
                    {orders.map((order) => (
                        <li
                            key={order}
                            className={isActive(order)}
                            onClick={() => setCurrentTab(order)}>
                            {order} <sup>{cards[order].length}</sup>
                        </li>
                    ))}
                </ul>
                <div className="account__orders-list">
                    {getCurrentOrders().length ? (
                        getCurrentOrders().map((card) => (
                            <Card card={card}></Card>
                        ))
                    ) : (
                        <p className="account__orders-none">
                            You don't have orders yet.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}

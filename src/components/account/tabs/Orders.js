import React from "react";

export default function Orders() {
    const orders = ["active", "history", "returns"];

    return (
        <section className="account__orders">
            <div className="container">
                <h6 className="account__orders-title">Orders</h6>
                <ul className="account__orders-menu">
                    {orders.map((order) => (
                        <li key={order} className="account__orders-menu-item">
                            {order}
                        </li>
                    ))}
                </ul>
                <div className="account__orders-list">
                    <p className="account__orders-none">You don't have orders yet.</p>
                </div>
            </div>
        </section>
    );
}

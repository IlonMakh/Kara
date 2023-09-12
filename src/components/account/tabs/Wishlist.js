import React from "react";
import img1 from "../../../assets/images/product_1.jpg";
import img2 from "../../../assets/images/product_2.jpg";
import img3 from "../../../assets/images/product_3.jpg";
import Card from "./wishlist/Card";

export default function Wishlist() {
    const cards = [
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

        {
            id: 2,
            images: [img3, img1, img2],
            isNew: true,
            title: "Short jacket",
            price: "1,234",
        },

        {
            id: 3,
            images: [img2, img1, img3],
            isNew: true,
            title: "Short jacket",
            price: "1,234",
        },

        {
            id: 4,
            images: [img1, img2, img3],
            isNew: true,
            title: "Short jacket",
            price: "1,234",
        },

        {
            id: 5,
            images: [img2, img1, img3],
            isNew: true,
            title: "Short jacket",
            price: "1,234",
        },

        {
            id: 6,
            images: [img3, img1, img2],
            isNew: true,
            title: "Short jacket",
            price: "1,234",
        },

        {
            id: 7,
            images: [img2, img1, img3],
            isNew: true,
            title: "Short jacket",
            price: "1,234",
        },
    ];

    return (
        <section className="account__wishlist">
            <div className="container">
                <h6 className="account__wishlist-title">Wishlist</h6>
                <div className="account__wishlist-list">
                    {cards.map((card) => (
                        <Card card={card}></Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

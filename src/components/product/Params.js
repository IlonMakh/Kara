import React from "react";

export default function Params({ card }) {
    return (
        <section className="product__params">
            <div className="container">
                <svg className="product__params-favorite">
                    <use href="#favorite" />
                </svg>
                <button className="product-param product__params-color">Color <span className="spin-plus">+</span></button>
                <button className="product-param product__params-size">Size <span className="spin-plus">+</span></button>
                <div className="product__params-buy">
                    <span className="product__params-price">{card.price}$</span>
                    <button className="product__params-add">Add to cart</button>
                </div>
            </div>
        </section>
    );
}

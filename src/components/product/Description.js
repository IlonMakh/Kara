import React from "react";

export default function Description({ card }) {
    return (
        <secton className="product__description">
            <div className="container">
                <h4 className="product__description-title">{card.title}</h4>
                <p className="product__description-text">{card.description}</p>
            </div>
        </secton>
    );
}

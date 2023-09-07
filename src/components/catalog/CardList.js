import React from "react";
import Card from "./cardList/Card";

export default function CardList({ cards }) {
    return (
        <section className="catalog__cards">
            <h3 className="catalog__cards-title">Coats and jackets</h3>
            <div className="container">
            {cards.map((card) => (
                <Card card={card}></Card>
            ))}
            </div>
        </section>
    );
}

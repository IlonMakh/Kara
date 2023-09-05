import React from "react";
import Card from "./cardList/Card";

export default function CardList({ cards }) {
    return (
        <section className="catalog__cards">
            <div className="container">
            {cards.map((card) => (
                <Card card={card}></Card>
            ))}
            </div>
        </section>
    );
}

import React from "react";

export default function Panel() {
    return (
        <section className="catalog__panel">
            <div className="container">
                <button className="catalog__panel-back">
                    Back to categories
                </button>
                <button className="catalog__panel-filters">Filters</button>
            </div>
        </section>
    );
}

import React from "react";
import { Link } from "react-router-dom";
import offer1 from "../../assets/images/offer_1.jfif";
import offer2 from "../../assets/images/offer_2.jfif";

export default function Offer() {
    return (
        <section className="offer">
            <Link to={'/catalog'} className="offer__item">
                <img className="offer__bg" src={offer1} alt="offer"/>
                <div className="offer__info">
                    <h3 className="offer__title">SICILY BAG</h3>
                    <p className="offer__text">Unique combinations of elegance, unexpected details, and craftsmanship.</p>
                    <Link to={'/catalog'} className="offer__btn"><span>Discover the collection</span></Link>
                </div>
            </Link>
            <Link to={'/catalog'} className="offer__item">
                <img className="offer__bg" src={offer2} alt="offer"/>
                <div className="offer__info">
                    <h3 className="offer__title">THE DNA BY MARIACARLA BOSCONO</h3>
                    <p className="offer__text">The allure of Black Sicily captured in Brett Lloyd's stunning shots.</p>
                    <Link to={'/catalog'} className="offer__btn"><span>Discover more</span></Link>
                </div>
            </Link>
        </section>
    );
}

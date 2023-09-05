import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import { Link } from "react-router-dom";

export default function Card({ card }) {
    return (
        <Link to={`/catalog/${card.id}`} className="catalog__card">
            <div className="catalog__card-img">
                <Splide
                    hasTrack={false}
                    options={{
                        type: "loop",
                        perPage: 1,
                        pagination: false,
                        drag: false,
                    }}>
                    <SplideTrack>
                        {card.images.map((img) => (
                            <SplideSlide className="splide__slide" key={img}>
                                <img
                                    className="splide__slide-img"
                                    src={img}
                                    alt="product"
                                />
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
                <span className="catalog__card-new">new collection</span>
                <svg className="catalog__card-favorite">
                    <use href="#favorite" />
                </svg>
            </div>
            <div className="catalog__card-info">
                <h4 className="catalog__card-title">{card.title}</h4>
                <span className="catalog__card-price">{card.price}$</span>
            </div>
        </Link>
    );
}

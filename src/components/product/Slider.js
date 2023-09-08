import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";

export default function Slider({ card }) {
    return (
        <section className="product__slider">
            <Splide
                hasTrack={false}
                options={{
                    perPage: 3,
                    perMove: 1,
                    pagination: false,
                    arrows: false,
                    breakpoints: {
                        768: {
                            perPage: 2,
                            autoplay: true,
                            type: "loop",
                        },
                        560: {
                            perPage: 1,
                        },
                    },
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
            <div className="container">
                <button className="product__slider-back">
                    <svg className="product__slider-back-ico">
                        <use href="#back" />
                    </svg>
                    <span>Back to category</span>
                </button>
                <div className="product__slider-info">
                    <button className="product__slider-details">Details</button>
                    <button className="product__slider-shipping">
                        Shipping
                    </button>
                </div>
            </div>
        </section>
    );
}

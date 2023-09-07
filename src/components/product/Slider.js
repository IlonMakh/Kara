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
                            type: 'loop',
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
                <div className="splide__progress">
                    <div className="splide__progress__bar" />
                </div>
            </Splide>
        </section>
    );
}

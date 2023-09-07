import React from "react";
import Card from "../catalog/cardList/Card";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

export default function Recommendations({ recommendations }) {
    return (
        <section className="product__recommendations">
            <div className="container">
                <h6 className="product__recommendations-title">We recommend</h6>
            </div>
            <Splide
                hasTrack={false}
                options={{
                    type: "loop",
                    perPage: 4,
                    perMove: 1,
                    pagination: false,
                    arrows: false,
                    drag: "free",
                    start: 1,
                    padding: "6rem",

                    breakpoints: {
                        1200: {
                            padding: "2rem",
                            perPage: 3,
                        },
                        680: {
                            perPage: 2,
                        },
                        560: {
                            perPage: 1,
                        },
                    },
                }}>
                <SplideTrack>
                    {recommendations.map((item) => (
                        <SplideSlide className="splide__slide" key={item.id}>
                            <Card card={item}></Card>
                        </SplideSlide>
                    ))}
                </SplideTrack>
            </Splide>
        </section>
    );
}

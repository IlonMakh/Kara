import React, { useEffect, useState } from "react";
import Marquee from "../global/Marquee";

export default function Params({ card }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            {!isMobile && (
                <section className="product__params">
                    <div className="container">
                        <div className="product__params-title-wrapper">
                            <Marquee>{card.title}</Marquee>
                        </div>
                        <svg className="product__params-favorite">
                            <use href="#favorite" />
                        </svg>
                        <button className="product-param product__params-color">
                            Color <span className="spin-plus">+</span>
                        </button>
                        <button className="product-param product__params-size">
                            Size <span className="spin-plus">+</span>
                        </button>
                        <div className="product__params-buy">
                            <span className="product__params-price">
                                {card.price}$
                            </span>
                            <button className="product__params-add">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </section>
            )}
            {isMobile && (
                <section className="product__params mobile">
                    <div className="container">
                        <div className="product__params-info">
                            <div className="product__params-info-container">
                                <svg className="product__params-favorite">
                                    <use href="#favorite" />
                                </svg>
                                <h4 className="product__params-title">
                                    {card.title}
                                </h4>
                            </div>
                            <span className="product__params-price">
                                {card.price}$
                            </span>
                        </div>
                        <div className="product__params-settings">
                            <button className="product-param product__params-color">
                                Color <span className="spin-plus">+</span>
                            </button>
                            <button className="product-param product__params-size">
                                Size <span className="spin-plus">+</span>
                            </button>
                        </div>
                        <button className="product__params-add">
                            Add to cart
                        </button>
                    </div>
                </section>
            )}
        </>
    );
}

import React, { useEffect, useState } from "react";
import Marquee from "../global/Marquee";
import { connect, useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/modalActions";
import { addToBasket } from "../../redux/actions/basketActions";

function Params({ card, basket }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const addedToCart = () => {
        return basket.basket.some((item) => item.id === card.id);
    };


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

    const dispatch = useDispatch();

    const handleOpenModal = (modalName) => {
        dispatch(openModal(modalName));
        console.log("open");
    };

    const addProduct = () => {
        console.log(card);
        dispatch(addToBasket(card));
    };

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
                        <button
                            className="product-param product__params-color"
                            onClick={() => handleOpenModal("color")}>
                            Color <span className="spin-plus">+</span>
                        </button>
                        <button
                            className="product-param product__params-size"
                            onClick={() => handleOpenModal("size")}>
                            Size <span className="spin-plus">+</span>
                        </button>
                        <div className="product__params-buy">
                            <span className="product__params-price">
                                {card.price}$
                            </span>
                            <button
                                disabled={addedToCart()}
                                className="product__params-add"
                                onClick={addProduct}>
                                {addedToCart() ? "Added to card" : "Add to cart"}
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
                            <button
                                className="product-param product__params-color"
                                onClick={() => handleOpenModal("color")}>
                                Color <span className="spin-plus">+</span>
                            </button>
                            <button
                                className="product-param product__params-size"
                                onClick={() => handleOpenModal("size")}>
                                Size <span className="spin-plus">+</span>
                            </button>
                        </div>
                        <button
                            disabled={addedToCart()}
                            className="product__params-add"
                            onClick={addProduct}>
                            {addedToCart() ? "Added to card" : "Add to cart"}
                        </button>
                    </div>
                </section>
            )}
        </>
    );
}

const mapStateToProps = (state) => ({
    basket: state.basket,
});

const mapDispatchToProps = {
    addToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Params);

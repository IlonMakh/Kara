import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorite, removeFromFavorite } from "../../../redux/actions/basketActions";

function Card({ card, basket }) {
    const dispatch = useDispatch();
    const addedToFavorite = () => {
        return basket.favorite.some((item) => item.id === card.id);
    };

    const handleFavoriteClick = () => {
        addedToFavorite() ? dispatch(removeFromFavorite(card.id)) : dispatch(addToFavorite(card));
    }

    return (
        <div className="catalog__card">
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
                                <Link to={`/catalog/${card.id}`}>
                                    <img
                                        className="splide__slide-img"
                                        src={img}
                                        alt="product"
                                    />
                                </Link>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                </Splide>
                <span className="catalog__card-new">new collection</span>
                <svg className={addedToFavorite() ? "catalog__card-favorite checked" : "catalog__card-favorite"} onClick={handleFavoriteClick}>
                    <use href="#favorite" />
                </svg>
            </div>
            <Link to={`/catalog/${card.id}`} className="catalog__card-info">
                <h4 className="catalog__card-title">{card.title}</h4>
                <span className="catalog__card-price">{card.price}$</span>
            </Link>
        </div>
    );
}

const mapStateToProps = (state) => ({
    basket: state.basket,
});

const mapDispatchToProps = {
    addToFavorite,
    removeFromFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

import React from "react";
import Card from "./wishlist/Card";
import { connect } from "react-redux";

function Wishlist({basket}) {

    return (
        <section className="account__wishlist">
            <div className="container">
                <h6 className="account__wishlist-title">Wishlist</h6>
                <div className="account__wishlist-list">
                    {basket.favorite.length ? basket.favorite.map((card) => (
                        <Card card={card}></Card>
                    )) : <p className="account__wishlist-none">You haven't added items to your wishlist yet.</p>}
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => ({
    basket: state.basket
});


export default connect(mapStateToProps)(Wishlist);

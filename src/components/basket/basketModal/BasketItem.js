import React from "react";
import { connect, useDispatch } from "react-redux";
import {
    removeFromBasket,
    changeAmount,
} from "../../../redux/actions/basketActions";

function BasketItem({ item }) {
    const dispatch = useDispatch();
    const changeAmountBasket = (operator, product) => {
        dispatch(changeAmount(operator, product));
    };

    const deleteGood = (productId) => {
        dispatch(removeFromBasket(productId));
    };
    return (
        <div className="basket-modal__item">
            <div className="basket-modal__item-left">
                <div className="basket-modal__item-img">
                    <img className="basket-modal__item-img-bg" src={item.img} alt={item.title}/>
                </div>
                <div className="basket-modal__item-info">
                    <h6 className="basket-modal__item-title">{item.title}</h6>
                    <div className="basket-modal__item-params">
                        <div className="basket-modal__item-size">Size: {item.size}</div>
                        <div className="basket-modal__item-color">Color: {item.color}</div>
                    </div>
                    <div className="basket-modal__item-counter">
                        <button className="basket-modal__item-minus" onClick={() => changeAmountBasket("minus", item)}>&#8722;</button>
                        <div className="basket-modal__item-amount">{item.amount}</div>
                        <button className="basket-modal__item-plus" onClick={() => changeAmountBasket("plus", item)}>&#43;</button>
                    </div>
                </div>
            </div>
            <div className="basket-modal__item-right">
                <button className="basket-modal__item-remove" onClick={() => deleteGood(item.id)}>Remove</button>
                <p className="basket-modal__item-price">{item.price}$</p>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    basket: state.basket,
});

const mapDispatchToProps = {
    removeFromBasket,
    changeAmount
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);

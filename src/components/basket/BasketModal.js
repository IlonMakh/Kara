import React, { useState } from "react";
import img from "../../assets/images/product_1.jpg";
import BasketItem from "./basketModal/BasketItem";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { connect } from "react-redux";
import { closeModal } from "../../redux/actions/modalActions";

function BasketModal({ modalName, isOpen, closeModal }) {
    const goodsData = [
        {
            id: 0,
            img,
            title: "Short jacket 1",
            size: 36,
            color: "black",
            price: 1234,
            amount: 1,
        },

        {
            id: 1,
            img,
            title: "Short jacket 2",
            size: 36,
            color: "black",
            price: 4321,
            amount: 2,
        },

        {
            id: 2,
            img,
            title: "Short jacket 3",
            size: 36,
            color: "black",
            price: 4321,
            amount: 2,
        },
    ];
    const [goods, setGoods] = useState(goodsData);

    const changeAmount = (operator, id) => {
        const newGoods = goods.map((item) => {
            if (item.id === id) {
                switch (operator) {
                    case "minus":
                        if (item.amount > 1) {
                            item.amount--;
                        }
                        break;

                    case "plus":
                        item.amount++;
                        break;

                    default:
                        break;
                }
            }

            return item;
        });

        setGoods(newGoods);
    };

    const deleteGood = (id) => {
        const index = goods.findIndex((item) => item.id === id);
        console.log(index);
        const newGoods = [...goods];
        newGoods.splice(index, 1);
        setGoods(newGoods);
    };

    const commonAmount = goods.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        0
    );

    const commonSum = goods.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.amount * currentValue.price,
        0
    );

    if (!isOpen) {
        return null;
    }

    return (
        <div className="basket-modal" onClick={() => closeModal(modalName)}>
            <div className="basket-modal__content" onClick={(e) => e.stopPropagation()}>
                <button
                    className="basket-modal__close"
                    onClick={() => closeModal(modalName)}>
                    <svg className="basket-modal__close-ico">
                        <use href="#close" />
                    </svg>
                </button>
                <h6 className="basket-modal__content-title">
                    Shopping bag <sup>{commonAmount}</sup>
                </h6>
                {goods.length ? (
                    <SimpleBar style={{ maxHeight: "55vh" }}>
                        <div className="basket-modal__content-list">
                            {goods.map((item) => {
                                return (
                                    <BasketItem
                                        changeAmount={changeAmount}
                                        deleteItem={deleteGood}
                                        item={item}
                                    />
                                );
                            })}
                        </div>
                    </SimpleBar>
                ) : (
                    <div className="basket-modal__content-none">
                        You haven't added items to your shopping bag yet.
                    </div>
                )}
                <div className="basket-modal__content-total">
                    <h6 className="basket-modal__content-subtotal">Subtotal</h6>
                    <div className="basket-modal__content-sum">
                        {commonSum}$
                    </div>
                </div>
                <div className="basket-modal__content-btns">
                    <button className="basket-modal__content-checkout">
                        Proceed to checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    isOpen: state.modals[ownProps.modalName],
});

const mapDispatchToProps = {
    closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketModal);

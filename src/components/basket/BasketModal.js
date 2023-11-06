import React, { useEffect, useState } from "react";
import img from "../../assets/images/product_1.jpg";
import BasketItem from "./basketModal/BasketItem";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import { connect } from "react-redux";
import { closeModal } from "../../redux/actions/modalActions";

function BasketModal({ modalName, isOpen, closeModal, basket }) {
    const commonAmount = basket.basket.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        0
    );

    const commonSum = basket.basket.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.amount * currentValue.price,
        0
    );

    if (!isOpen) {
        return null;
    }

    return (
        <div className="basket-modal" onClick={() => closeModal(modalName)}>
            <div
                className="basket-modal__content"
                onClick={(e) => e.stopPropagation()}>
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
                {basket.basket.length ? (
                    <SimpleBar style={{ maxHeight: "55vh" }}>
                        <div className="basket-modal__content-list">
                            {basket.basket.map((item) => {
                                return (
                                    <BasketItem
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
                {!!basket.basket.length && (
                    <>
                        <div className="basket-modal__content-total">
                            <h6 className="basket-modal__content-subtotal">
                                Subtotal
                            </h6>
                            <div className="basket-modal__content-sum">
                                {commonSum}$ 
                            </div>
                        </div>
                        <div className="basket-modal__content-btns">
                            <button className="basket-modal__content-checkout">
                                Proceed to checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    isOpen: state.modals[ownProps.modalName],
    basket: state.basket
});

const mapDispatchToProps = {
    closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketModal);

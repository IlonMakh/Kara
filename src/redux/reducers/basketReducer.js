import { ADD_TO_BASKET, REMOVE_FROM_BASKET, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, CHANGE_AMOUNT } from "../actions/basketActions";

const initialState = {
    basket: [],
    favorite: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            return { ...state, basket: [...state.basket, action.product] };
        case REMOVE_FROM_BASKET:
            return { ...state, basket: state.basket.filter(product => product.id !== action.productId) };
        case ADD_TO_FAVORITE:
            return { ...state, favorite: [...state.favorite, action.product] };
        case REMOVE_FROM_FAVORITE:
            return { ...state, favorite: state.favorite.filter(product => product.id !== action.productId) };
        case CHANGE_AMOUNT:
            const { operation, product } = action;
            const updatedBasket = state.basket.map(item => {
                if (item.id === product.id) {
                    if (operation === "plus" && item.amount < 10) {
                        item.amount += 1;
                    } else if (operation === "minus" && item.amount > 1) {
                        item.amount -= 1;
                    }
                }
                return item;
            });

            return { ...state, basket: updatedBasket };
        default:
            return state;
    }
};

export default rootReducer;
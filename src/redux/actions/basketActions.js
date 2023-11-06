export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const CHANGE_AMOUNT = "CHANGE_AMOUNT";

export function addToBasket(product) {
    return { type: ADD_TO_BASKET, product };
}

export function removeFromBasket(productId) {
    return { type: REMOVE_FROM_BASKET, productId };
}

export function addToFavorite(product) {
    return { type: ADD_TO_FAVORITE, product };
}

export function removeFromFavorite(productId) {
    return { type: REMOVE_FROM_FAVORITE, productId };
}

export function changeAmount(operation, product) {
    return { type: CHANGE_AMOUNT, product, operation };
}



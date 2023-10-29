export const SET_WRAPPER = "SET_WRAPPER";

export function setWrapper(wrapper) {
    console.log(wrapper);
    return { type: SET_WRAPPER, wrapper };
}
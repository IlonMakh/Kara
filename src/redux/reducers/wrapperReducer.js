import { SET_WRAPPER } from "../actions/wrapperActions";

const initialState = {
    wrapper: null,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WRAPPER:
            return { ...state, wrapper: action.wrapper };
        default:
            return state;
    }
};

export default rootReducer;

import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import wrapperReducer from "./wrapperReducer";
import basketReducer from "./basketReducer";

const rootReducer = combineReducers({
    modals: modalReducer,
    wrapper: wrapperReducer,
    basket:  basketReducer,
});

export default rootReducer;

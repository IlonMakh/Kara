import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import wrapperReducer from "./wrapperReducer";

const rootReducer = combineReducers({
    modals: modalReducer,
    wrapper: wrapperReducer,
});

export default rootReducer;

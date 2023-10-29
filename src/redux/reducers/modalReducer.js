import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modalActions";

const initialState = {};

export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return { ...state, [action.modalName]: true };
        case CLOSE_MODAL:
            return { ...state, [action.modalName]: false };
        default:
            return state;
    }
}

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export function openModal(modalName) {
    return { type: OPEN_MODAL, modalName };
}

export function closeModal(modalName) {
    return { type: CLOSE_MODAL, modalName };
}

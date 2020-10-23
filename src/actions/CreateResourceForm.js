import {IS_OPEN_MODAL, UPDATE_URL} from "../constants";

export const updateUrl = (url) => ({
    type: UPDATE_URL,
    url
});

export const isOpenModal = (isOpen) => ({
    type: IS_OPEN_MODAL,
    isOpen
});

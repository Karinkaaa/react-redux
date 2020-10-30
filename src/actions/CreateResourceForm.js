import {IS_OPEN_MODAL, UPDATE_NAME, UPDATE_URL} from "../constants";

export const updateName = (name) => ({
    type: UPDATE_NAME,
    name
});

export const updateUrl = (url) => ({
    type: UPDATE_URL,
    url
});

export const isOpenModal = (isOpen) => ({
    type: IS_OPEN_MODAL,
    isOpen
});

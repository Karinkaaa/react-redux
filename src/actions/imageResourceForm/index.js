import {IS_OPEN_MODAL, UPDATE_IMAGE_NAME, UPDATE_IMAGE_URL} from "../../constants";

export const updateName = (name) => ({
    type: UPDATE_IMAGE_NAME,
    name
});

export const updateUrl = (url) => ({
    type: UPDATE_IMAGE_URL,
    url
});

export const isOpenModal = (isOpen) => ({
    type: IS_OPEN_MODAL,
    isOpen
});

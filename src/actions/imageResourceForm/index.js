import {IS_OPEN_MODAL, PUT_IMAGE_RESOURCE_TO_FORM, UPDATE_IMAGE_NAME, UPDATE_IMAGE_URL} from "../../utils/constants";

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

export const putImageResourceToForm = ({id, name, url}) => ({
    type: PUT_IMAGE_RESOURCE_TO_FORM,
    id,
    name,
    url
});

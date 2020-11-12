import {
    IS_OPEN_IMAGE_MODAL,
    PUT_IMAGE_RESOURCE_TO_FORM,
    UPDATE_IMAGE_NAME,
    UPDATE_IMAGE_URL
} from "../../utils/constants";

export const updateImageName = (name) => ({
    type: UPDATE_IMAGE_NAME,
    name
});

export const updateImageUrl = (url) => ({
    type: UPDATE_IMAGE_URL,
    url
});

export const isOpenImageModal = (isOpen) => ({
    type: IS_OPEN_IMAGE_MODAL,
    isOpen
});

export const putImageResourceToForm = ({id, name, url}) => ({
    type: PUT_IMAGE_RESOURCE_TO_FORM,
    id,
    name,
    url
});

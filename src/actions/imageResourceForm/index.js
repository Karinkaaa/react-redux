import { SAVE_IMAGE_SAGA, UPDATE_IMAGE_SAGA } from "../../utils/actionSagaConstants";
import {
    CLEAR_IMAGE_FORM,
    OPEN_OR_CLOSE_IMAGE_MODAL,
    SET_IMAGE_FORM,
    UPDATE_IMAGE_NAME,
    UPDATE_IMAGE_URL
} from "../../utils/actionConstants";

export const setImageForm = (image) => ({
    type: SET_IMAGE_FORM,
    image
});

export const updateImageName = (name) => ({
    type: UPDATE_IMAGE_NAME,
    name
});
export const updateImageUrl = (url) => ({
    type: UPDATE_IMAGE_URL,
    url
});

export const isOpenImageModal = (isOpen) => ({
    type: OPEN_OR_CLOSE_IMAGE_MODAL,
    isOpen
});

export const clearImageForm = () => ({
    type: CLEAR_IMAGE_FORM
});

// saga
export const saveImageSaga = (image) => ({
    type: SAVE_IMAGE_SAGA,
    image
});

export const updateImageSaga = (id, image) => ({
    type: UPDATE_IMAGE_SAGA,
    id,
    image
});
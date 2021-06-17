import {
    GET_IMAGE_BY_ID_SAGA,
    GET_IMAGES_SAGA,
    REMOVE_IMAGE_SAGA,
    SAVE_IMAGE_SAGA,
    UPDATE_IMAGE_SAGA
} from "../../utils/actionSagaConstants";

// form
export const saveImageSaga = (image) => ({
    type: SAVE_IMAGE_SAGA,
    image
});

export const updateImageSaga = (id, image) => ({
    type: UPDATE_IMAGE_SAGA,
    id,
    image
});

// table
export const getImagesSaga = () => ({
    type: GET_IMAGES_SAGA
});

export const getImageByIdSaga = (id) => ({
    type: GET_IMAGE_BY_ID_SAGA,
    id
});

export const removeImageSaga = ({ id }) => ({
    type: REMOVE_IMAGE_SAGA,
    id
});

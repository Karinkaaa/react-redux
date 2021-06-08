import { GET_IMAGE_BY_ID_SAGA, GET_IMAGES_SAGA, REMOVE_IMAGE_SAGA } from "../../utils/actionSagaConstants";

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

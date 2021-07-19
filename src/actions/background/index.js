import { GET_IMAGE_BACKGROUND_SAGA } from "../../utils/actionSagaConstants";
import { SET_IMAGE_BACKGROUND } from "../../utils/actionConstants";

export const getBackgroundSaga = (ref) => ({
    type: GET_IMAGE_BACKGROUND_SAGA,
    ref
});

export const setBackground = (id, url) => ({
    type: SET_IMAGE_BACKGROUND,
    id,
    url
});
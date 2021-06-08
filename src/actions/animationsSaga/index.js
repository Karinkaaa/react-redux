import { GET_ANIMATION_BY_ID_SAGA, GET_ANIMATIONS_SAGA, REMOVE_ANIMATION_SAGA } from "../../utils/actionSagaConstants";

export const getAnimationsSaga = () => ({
    type: GET_ANIMATIONS_SAGA
});

export const getAnimationByIdSaga = (id) => ({
    type: GET_ANIMATION_BY_ID_SAGA,
    id
});

export const removeAnimationSaga = ({ id }) => ({
    type: REMOVE_ANIMATION_SAGA,
    id
});

import {
    GET_ANIMATION_BY_ID_SAGA,
    GET_ANIMATIONS_SAGA,
    REMOVE_ANIMATION_SAGA,
    SAVE_ANIMATION_SAGA,
    UPDATE_ANIMATION_SAGA
} from "../../utils/actionSagaConstants";

// table
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

// form
export const updateAnimationSaga = (id, animation) => ({
    type: UPDATE_ANIMATION_SAGA,
    id,
    animation
});

export const saveAnimationSaga = (animation) => ({
    type: SAVE_ANIMATION_SAGA,
    animation
});
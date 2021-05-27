import {
    ADD_IMAGE_RESOURCE_TO_ANIMATION,
    CLEAR_ANIMATION_FORM,
    DELETE_IMAGE_FROM_ANIMATION_FORM,
    DRAG_AND_DROP_IN_ANIMATION_FORM,
    SAVE_ANIMATION_SAGA,
    UPDATE_ANIMATION_NAME,
    UPDATE_ANIMATION_SAGA,
    UPDATE_ANIMATION_SPEED,
    UPDATE_ANIMATION_URL
} from "../../utils/actionConstants";

export const updateAnimationName = (name) => ({
    type: UPDATE_ANIMATION_NAME,
    name
});

export const updateAnimationSpeed = (speed) => ({
    type: UPDATE_ANIMATION_SPEED,
    speed
});

export const updateAnimationUrl = (index, url) => ({
    type: UPDATE_ANIMATION_URL,
    index,
    url
});

export const deleteImageFromAnimationForm = (index) => ({
    type: DELETE_IMAGE_FROM_ANIMATION_FORM,
    index
});

export const addImageResourceToAnimation = (url) => ({
    type: ADD_IMAGE_RESOURCE_TO_ANIMATION,
    url
});

export const dragAndDropInAnimationForm = (result) => ({
    type: DRAG_AND_DROP_IN_ANIMATION_FORM,
    result
});

export const clearAnimationForm = () => ({
    type: CLEAR_ANIMATION_FORM
});

// saga
export const updateAnimationSaga = (id, animation) => ({
    type: UPDATE_ANIMATION_SAGA,
    id,
    animation
});

export const saveAnimationSaga = (animation) => ({
    type: SAVE_ANIMATION_SAGA,
    animation
});
import {
    IS_OPEN_ANIMATION_MODAL,
    PUT_ANIMATION_RESOURCE_TO_FORM,
    UPDATE_ANIMATION_NAME,
    UPDATE_ANIMATION_URL
} from "../../utils/constants";

export const updateAnimationName = (name) => ({
    type: UPDATE_ANIMATION_NAME,
    name
});

export const updateAnimationUrl = (index, url) => ({
    type: UPDATE_ANIMATION_URL,
    index,
    url
});

export const isOpenAnimationModal = (isOpen) => ({
    type: IS_OPEN_ANIMATION_MODAL,
    isOpen
});

export const putAnimationResourceToForm = ({id, name, urls}) => ({
    type: PUT_ANIMATION_RESOURCE_TO_FORM,
    id,
    name,
    urls
});

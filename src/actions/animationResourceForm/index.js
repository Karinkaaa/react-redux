import {
    IS_OPEN_ANIMATION_MODAL,
    PUT_ANIMATION_RESOURCE_TO_FORM,
    UPDATE_ANIMATION_NAME,
    UPDATE_ANIMATION_URLS
} from "../../utils/constants";

export const updateAnimationName = (name) => ({
    type: UPDATE_ANIMATION_NAME,
    name
});

export const updateAnimationUrls = (urls) => ({
    type: UPDATE_ANIMATION_URLS,
    urls
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

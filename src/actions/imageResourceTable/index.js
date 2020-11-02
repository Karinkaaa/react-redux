import {ADD_IMAGE_RESOURCE, DELETE_IMAGE_RESOURCE, UPDATE_IMAGE_RESOURCE} from "../../constants";

export const addImageResource = ({id, name, url}) => ({
    type: ADD_IMAGE_RESOURCE,
    id,
    name,
    url
});

export const deleteImageResource = (id) => ({
    type: DELETE_IMAGE_RESOURCE,
    id
});

export const updateImageResource = ({id, name, url}) => ({
    type: UPDATE_IMAGE_RESOURCE,
    id,
    name,
    url
});

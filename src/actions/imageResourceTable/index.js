import {ADD_IMAGE_RESOURCE, DELETE_IMAGE_RESOURCE} from "../../constants";

export const addImageResource = ({name, url}) => ({
    type: ADD_IMAGE_RESOURCE,
    name,
    url
});

export const deleteImageResource = (id) => ({
    type: DELETE_IMAGE_RESOURCE,
    id
});

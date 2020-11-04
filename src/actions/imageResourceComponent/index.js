import {ADD_IMAGE_RESOURCE, CHANGE_SORT, DELETE_IMAGE_RESOURCE, UPDATE_IMAGE_RESOURCE} from "../../utils/constants";

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

export const changeSort = (field) => ({
    type: CHANGE_SORT,
    field
});


import {ADD_RESOURCE, DELETE_RESOURCE} from "../constants";

export const addResource = (url) => ({
    type: ADD_RESOURCE,
    url
});

export const deleteResource = (id) => ({
    type: DELETE_RESOURCE,
    id
});

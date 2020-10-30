import {ADD_RESOURCE, DELETE_RESOURCE} from "../constants";

export const addResource = ({name, url}) => ({
    type: ADD_RESOURCE,
    name,
    url
});

export const deleteResource = (id) => ({
    type: DELETE_RESOURCE,
    id
});

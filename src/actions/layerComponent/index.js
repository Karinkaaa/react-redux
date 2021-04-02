import { ADD_LAYER, DELETE_LAYER, UPDATE_LAYER } from "../../utils/actionConstants";

export const addLayer = (layer) => ({
    type: ADD_LAYER,
    layer
});

export const updateLayer = (layer) => ({
    type: UPDATE_LAYER,
    layer
});

export const deleteLayer = (id) => ({
    type: DELETE_LAYER,
    id
});
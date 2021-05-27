import {
    ADD_LAYER_ELEMENT,
    CLEAR_LAYER_FORM,
    DELETE_LAYER_ELEMENT,
    PUT_LAYER_TO_FORM,
    SET_LAYER_SELECTED_ID,
    UPDATE_LAYER_ELEMENT,
    UPDATE_LAYER_NAME
} from "../../utils/actionConstants";

export const addLayerElement = (id) => ({
    type: ADD_LAYER_ELEMENT,
    id
});

export const updateLayerElement = (element) => ({
    type: UPDATE_LAYER_ELEMENT,
    element
});

export const deleteLayerElement = (id) => ({
    type: DELETE_LAYER_ELEMENT,
    id
});

export const setSelectedId = (id) => ({
    type: SET_LAYER_SELECTED_ID,
    id
});

export const updateLayerName = (name) => ({
    type: UPDATE_LAYER_NAME,
    name
});

export const putLayerToForm = ({ id, name, elements }) => ({
    type: PUT_LAYER_TO_FORM,
    id,
    name,
    elements
});

export const clearLayerForm = () => ({
    type: CLEAR_LAYER_FORM
});
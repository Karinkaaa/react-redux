import {
    ADD_LAYER_ELEMENT,
    CLEAR_LAYER_FORM,
    DELETE_LAYER_ELEMENT,
    SAVE_LAYER_SAGA,
    SET_LAYER_FORM,
    SET_LAYER_SELECTED_ID,
    UPDATE_LAYER_ELEMENT,
    UPDATE_LAYER_NAME,
    UPDATE_LAYER_SAGA
} from "../../utils/actionConstants";

export const setLayerForm = (layer) => ({
    type: SET_LAYER_FORM,
    layer
});

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

export const clearLayerForm = () => ({
    type: CLEAR_LAYER_FORM
});

// saga
export const saveLayerSaga = (layer) => ({
    type: SAVE_LAYER_SAGA,
    layer
});

export const updateLayerSaga = (id, layer) => ({
    type: UPDATE_LAYER_SAGA,
    id,
    layer
});
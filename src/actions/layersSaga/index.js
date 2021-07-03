import {
    GET_LAYER_BY_ID_SAGA,
    GET_LAYERS_SAGA,
    REMOVE_LAYER_SAGA,
    SAVE_LAYER_SAGA,
    UPDATE_LAYER_SAGA
} from "../../utils/actionSagaConstants";

// form
export const saveLayerSaga = (layer) => ({
    type: SAVE_LAYER_SAGA,
    layer
});

export const updateLayerSaga = (id, layer) => ({
    type: UPDATE_LAYER_SAGA,
    id,
    layer
});

// table
export const getLayersSaga = () => ({
    type: GET_LAYERS_SAGA
});

export const getLayerByIdSaga = (id) => ({
    type: GET_LAYER_BY_ID_SAGA,
    id
});

export const removeLayerSaga = ({ id }) => ({
    type: REMOVE_LAYER_SAGA,
    id
});

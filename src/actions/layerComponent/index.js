import {
    CHANGE_LAYER_FILTER_VALUE,
    CHANGE_LAYER_LIMIT,
    CHANGE_LAYER_PAGE,
    CHANGE_LAYER_SORT,
    GET_LAYER_BY_ID_SAGA,
    GET_LAYERS_SAGA,
    REMOVE_LAYER_SAGA,
    SET_LAYERS,
    SET_TOTAL_LAYERS_COUNT
} from "../../utils/actionConstants";

export const setLayers = (layers) => ({
    type: SET_LAYERS,
    layers
});

export const setTotalLayersCount = (count) => ({
    type: SET_TOTAL_LAYERS_COUNT,
    count
});

export const changeLayerPage = (page) => ({
    type: CHANGE_LAYER_PAGE,
    page
});

export const changeLayerLimit = (limit) => ({
    type: CHANGE_LAYER_LIMIT,
    limit
});

export const changeLayerSort = (field) => ({
    type: CHANGE_LAYER_SORT,
    field
});

export const changeLayerFilterValue = ({ filterKey, filterValue }) => ({
    type: CHANGE_LAYER_FILTER_VALUE,
    filterKey,
    filterValue
});

// saga
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

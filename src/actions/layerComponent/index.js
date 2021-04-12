import {
    ADD_LAYER,
    CHANGE_LAYER_FILTER_VALUE,
    CHANGE_LAYER_LIMIT,
    CHANGE_LAYER_PAGE,
    CHANGE_LAYER_SORT,
    DELETE_LAYER,
    DRAG_AND_DROP,
    UPDATE_LAYER
} from "../../utils/actionConstants";

export const addLayer = ({ name, elements }) => ({
    type: ADD_LAYER,
    name,
    elements
});

export const updateLayer = ({ id, name, elements }) => ({
    type: UPDATE_LAYER,
    id,
    name,
    elements
});

export const deleteLayer = ({ id }) => ({
    type: DELETE_LAYER,
    id
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

export const dragAndDrop = (result, id) => ({
    type: DRAG_AND_DROP,
    result,
    id
});
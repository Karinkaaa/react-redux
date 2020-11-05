import {
    ADD_IMAGE_RESOURCE,
    CHANGE_FILTER_VALUE,
    CHANGE_LIMIT,
    CHANGE_PAGE,
    CHANGE_SORT,
    CHANGE_VIEW,
    DELETE_IMAGE_RESOURCE,
    UPDATE_IMAGE_RESOURCE
} from "../../utils/constants";

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

export const changeView = (view) => ({
    type: CHANGE_VIEW,
    view
});

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
});

export const changeLimit = (limit) => ({
    type: CHANGE_LIMIT,
    limit
});

export const changeSort = (field) => ({
    type: CHANGE_SORT,
    field
});

export const changeFilterValue = ({filterKey, filterValue}) => console.log(filterKey, filterValue) || ({
    type: CHANGE_FILTER_VALUE,
    filterKey,
    filterValue
});

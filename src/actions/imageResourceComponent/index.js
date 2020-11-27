import {
    ADD_IMAGE_RESOURCE,
    CHANGE_IMAGE_FILTER_VALUE,
    CHANGE_IMAGE_LIMIT,
    CHANGE_IMAGE_PAGE,
    CHANGE_IMAGE_SORT,
    CHANGE_IMAGE_VIEW,
    DELETE_IMAGE_RESOURCE,
    UPDATE_IMAGE_RESOURCE
} from "../../utils/actionConstants";

export const addImageResource = ({ id, name, url }) => ({
    type: ADD_IMAGE_RESOURCE,
    id,
    name,
    url
});

export const deleteImageResource = (id) => ({
    type: DELETE_IMAGE_RESOURCE,
    id
});

export const updateImageResource = ({ id, name, url }) => ({
    type: UPDATE_IMAGE_RESOURCE,
    id,
    name,
    url
});

export const changeImageView = (view) => ({
    type: CHANGE_IMAGE_VIEW,
    view
});

export const changeImagePage = (page) => ({
    type: CHANGE_IMAGE_PAGE,
    page
});

export const changeImageLimit = (limit) => ({
    type: CHANGE_IMAGE_LIMIT,
    limit
});

export const changeImageSort = (field) => ({
    type: CHANGE_IMAGE_SORT,
    field
});

export const changeImageFilterValue = ({ filterKey, filterValue }) => ({
    type: CHANGE_IMAGE_FILTER_VALUE,
    filterKey,
    filterValue
});

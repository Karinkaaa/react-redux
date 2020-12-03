import {
    ADD_DRAGON_BONES_RESOURCE,
    CHANGE_DRAGON_BONES_FILTER_VALUE,
    CHANGE_DRAGON_BONES_LIMIT,
    CHANGE_DRAGON_BONES_PAGE,
    CHANGE_DRAGON_BONES_SORT,
    CHANGE_DRAGON_BONES_VIEW,
    DELETE_DRAGON_BONES_RESOURCE,
    UPDATE_DRAGON_BONES_RESOURCE
} from "../../utils/actionConstants";

export const addDragonBonesResource = ({ id, name, texture, textureJson, skeleton }) => ({
    type: ADD_DRAGON_BONES_RESOURCE,
    id,
    name,
    texture,
    textureJson,
    skeleton
});

export const deleteDragonBonesResource = ({ id }) => ({
    type: DELETE_DRAGON_BONES_RESOURCE,
    id
});

export const updateDragonBonesResource = ({ id, name, texture, textureJson, skeleton }) => ({
    type: UPDATE_DRAGON_BONES_RESOURCE,
    id,
    name,
    texture,
    textureJson,
    skeleton
});

export const changeDragonBonesView = (view) => ({
    type: CHANGE_DRAGON_BONES_VIEW,
    view
});

export const changeDragonBonesPage = (page) => ({
    type: CHANGE_DRAGON_BONES_PAGE,
    page
});

export const changeDragonBonesLimit = (limit) => ({
    type: CHANGE_DRAGON_BONES_LIMIT,
    limit
});

export const changeDragonBonesSort = (field) => ({
    type: CHANGE_DRAGON_BONES_SORT,
    field
});

export const changeDragonBonesFilterValue = ({ filterKey, filterValue }) => ({
    type: CHANGE_DRAGON_BONES_FILTER_VALUE,
    filterKey,
    filterValue
});

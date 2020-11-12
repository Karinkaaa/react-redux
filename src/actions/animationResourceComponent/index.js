import {
    ADD_ANIMATION_RESOURCE,
    CHANGE_ANIMATION_FILTER_VALUE,
    CHANGE_ANIMATION_LIMIT,
    CHANGE_ANIMATION_PAGE,
    CHANGE_ANIMATION_SORT,
    CHANGE_ANIMATION_VIEW,
    DELETE_ANIMATION_RESOURCE,
    UPDATE_ANIMATION_RESOURCE
} from "../../utils/constants";

export const addAnimationResource = ({id, name, urls}) => ({
    type: ADD_ANIMATION_RESOURCE,
    id,
    name,
    urls
});

export const deleteAnimationResource = (id) => ({
    type: DELETE_ANIMATION_RESOURCE,
    id
});

export const updateAnimationResource = ({id, name, urls}) => ({
    type: UPDATE_ANIMATION_RESOURCE,
    id,
    name,
    urls
});

export const changeAnimationView = (view) => ({
    type: CHANGE_ANIMATION_VIEW,
    view
});

export const changeAnimationPage = (page) => ({
    type: CHANGE_ANIMATION_PAGE,
    page
});

export const changeAnimationLimit = (limit) => ({
    type: CHANGE_ANIMATION_LIMIT,
    limit
});

export const changeAnimationSort = (field) => ({
    type: CHANGE_ANIMATION_SORT,
    field
});

export const changeAnimationFilterValue = ({filterKey, filterValue}) => ({
    type: CHANGE_ANIMATION_FILTER_VALUE,
    filterKey,
    filterValue
});

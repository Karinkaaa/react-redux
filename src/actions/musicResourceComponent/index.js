import {
    ADD_MUSIC_RESOURCE,
    CHANGE_MUSIC_FILTER_VALUE,
    CHANGE_MUSIC_LIMIT,
    CHANGE_MUSIC_PAGE,
    CHANGE_MUSIC_SORT,
    CHANGE_MUSIC_VIEW,
    DELETE_MUSIC_RESOURCE,
    UPDATE_MUSIC_RESOURCE
} from "../../utils/actionConstants";

export const addMusicResource = ({ id, name, url }) => ({
    type: ADD_MUSIC_RESOURCE,
    id,
    name,
    url
});

export const deleteMusicResource = (id) => ({
    type: DELETE_MUSIC_RESOURCE,
    id
});

export const updateMusicResource = ({ id, name, url }) => ({
    type: UPDATE_MUSIC_RESOURCE,
    id,
    name,
    url
});

export const changeMusicView = (view) => ({
    type: CHANGE_MUSIC_VIEW,
    view
});

export const changeMusicPage = (page) => ({
    type: CHANGE_MUSIC_PAGE,
    page
});

export const changeMusicLimit = (limit) => ({
    type: CHANGE_MUSIC_LIMIT,
    limit
});

export const changeMusicSort = (field) => ({
    type: CHANGE_MUSIC_SORT,
    field
});

export const changeMusicFilterValue = ({ filterKey, filterValue }) => ({
    type: CHANGE_MUSIC_FILTER_VALUE,
    filterKey,
    filterValue
});

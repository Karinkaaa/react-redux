import {
    ADD_AUDIO_RESOURCE,
    CHANGE_AUDIO_FILTER_VALUE,
    CHANGE_AUDIO_LIMIT,
    CHANGE_AUDIO_PAGE,
    CHANGE_AUDIO_SORT,
    CHANGE_AUDIO_VIEW,
    DELETE_AUDIO_RESOURCE,
    UPDATE_AUDIO_RESOURCE
} from "../../utils/actionConstants";

export const addAudioResource = ({ id, name, url }) => ({
    type: ADD_AUDIO_RESOURCE,
    id,
    name,
    url
});

export const deleteAudioResource = ({ id, url }) => ({
    type: DELETE_AUDIO_RESOURCE,
    id,
    url
});

export const updateAudioResource = ({ id, name, url }) => ({
    type: UPDATE_AUDIO_RESOURCE,
    id,
    name,
    url
});

export const changeAudioView = (view) => ({
    type: CHANGE_AUDIO_VIEW,
    view
});

export const changeAudioPage = (page) => ({
    type: CHANGE_AUDIO_PAGE,
    page
});

export const changeAudioLimit = (limit) => ({
    type: CHANGE_AUDIO_LIMIT,
    limit
});

export const changeAudioSort = (field) => ({
    type: CHANGE_AUDIO_SORT,
    field
});

export const changeAudioFilterValue = ({ filterKey, filterValue }) => ({
    type: CHANGE_AUDIO_FILTER_VALUE,
    filterKey,
    filterValue
});

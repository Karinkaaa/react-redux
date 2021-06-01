import { GET_AUDIO_BY_ID_SAGA, GET_AUDIOS_SAGA, REMOVE_AUDIO_SAGA } from "../../utils/actionSagaConstants";
import {
    CHANGE_AUDIO_FILTER_VALUE,
    CHANGE_AUDIO_LIMIT,
    CHANGE_AUDIO_PAGE,
    CHANGE_AUDIO_SORT,
    CHANGE_AUDIO_VIEW,
    SET_AUDIOS,
    SET_TOTAL_AUDIOS_COUNT,
    STOP_AUDIO
} from "../../utils/actionConstants";

export const setAudios = (audios) => ({
    type: SET_AUDIOS,
    audios
});

export const setTotalAudiosCount = (count) => ({
    type: SET_TOTAL_AUDIOS_COUNT,
    count
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

export const stopAudio = (url) => ({
    type: STOP_AUDIO,
    url
});

// saga
export const getAudiosSaga = () => ({
    type: GET_AUDIOS_SAGA
});

export const getAudioByIdSaga = (id) => ({
    type: GET_AUDIO_BY_ID_SAGA,
    id
});

export const removeAudioSaga = ({ id }) => ({
    type: REMOVE_AUDIO_SAGA,
    id
});

import {
    GET_AUDIO_BY_ID_SAGA,
    GET_AUDIOS_SAGA,
    REMOVE_AUDIO_SAGA,
    SAVE_AUDIO_SAGA,
    UPDATE_AUDIO_SAGA
} from "../../utils/actionSagaConstants";

// form
export const saveAudioSaga = (audio) => ({
    type: SAVE_AUDIO_SAGA,
    audio
});

export const updateAudioSaga = (id, audio) => ({
    type: UPDATE_AUDIO_SAGA,
    id,
    audio
});

// table
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

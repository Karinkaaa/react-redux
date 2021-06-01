import { SAVE_AUDIO_SAGA, UPDATE_AUDIO_SAGA } from "../../utils/actionSagaConstants";
import {
    CLEAR_AUDIO_FORM,
    OPEN_OR_CLOSE_AUDIO_MODAL,
    SET_AUDIO_FORM,
    UPDATE_AUDIO_NAME,
    UPDATE_AUDIO_URL
} from "../../utils/actionConstants";

export const setAudioForm = (audio) => ({
    type: SET_AUDIO_FORM,
    audio
});

export const updateAudioName = (name) => ({
    type: UPDATE_AUDIO_NAME,
    name
});

export const updateAudioUrl = (url) => ({
    type: UPDATE_AUDIO_URL,
    url
});

export const isOpenAudioModal = (isOpen) => ({
    type: OPEN_OR_CLOSE_AUDIO_MODAL,
    isOpen
});

export const clearAudioForm = () => ({
    type: CLEAR_AUDIO_FORM
});

// saga
export const saveAudioSaga = (audio) => ({
    type: SAVE_AUDIO_SAGA,
    audio
});

export const updateAudioSaga = (id, audio) => ({
    type: UPDATE_AUDIO_SAGA,
    id,
    audio
});

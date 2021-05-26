import {
    CLEAR_AUDIO_FORM,
    OPEN_OR_CLOSE_AUDIO_MODAL,
    PUT_AUDIO_RESOURCE_TO_FORM,
    UPDATE_AUDIO_NAME,
    UPDATE_AUDIO_URL
} from "../../utils/actionConstants";

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

export const putAudioResourceToForm = ({ id, name, url }) => ({
    type: PUT_AUDIO_RESOURCE_TO_FORM,
    id,
    name,
    url
});

export const clearAudioForm = () => ({
    type: CLEAR_AUDIO_FORM
});

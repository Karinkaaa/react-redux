import { GET_AUDIO_BY_ID_SAGA, GET_AUDIOS_SAGA, REMOVE_AUDIO_SAGA } from "../../utils/actionSagaConstants";

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

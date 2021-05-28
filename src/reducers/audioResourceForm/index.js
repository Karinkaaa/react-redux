import { isValidAudioUrl, isValidName } from "../../utils/validation";
import {
    CLEAR_AUDIO_FORM,
    OPEN_OR_CLOSE_AUDIO_MODAL,
    PUT_AUDIO_RESOURCE_TO_FORM,
    SET_AUDIO_FORM,
    UPDATE_AUDIO_NAME,
    UPDATE_AUDIO_URL
} from "../../utils/actionConstants";

const initialState = {
    id: "",
    name: "",
    isValidName: false,
    url: "",
    isValidUrl: false,
    isOpen: false
};

const AudioResourceForm = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUDIO_FORM: {
            const { audio } = action;

            return {
                ...state,
                ...audio,
                isValidName: isValidName(audio.name),
                isValidUrl: isValidAudioUrl(audio.url)
            };
        }
        case OPEN_OR_CLOSE_AUDIO_MODAL: {
            return {
                ...state,
                isOpen: action.isOpen
            };
        }
        case UPDATE_AUDIO_NAME: {
            const { name } = action;

            return {
                ...state,
                name,
                isValidName: isValidName(name)
            };
        }
        case UPDATE_AUDIO_URL: {
            const { url } = action;

            return {
                ...state,
                url,
                isValidUrl: isValidAudioUrl(url)
            };
        }
        case PUT_AUDIO_RESOURCE_TO_FORM: {
            const { id, name, url } = action;

            return {
                ...state,
                id,
                name,
                isValidName: isValidName(name),
                url,
                isValidUrl: isValidAudioUrl(url)
            };
        }
        case CLEAR_AUDIO_FORM: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
};

export default AudioResourceForm;
import { isValidImageUrl, isValidName } from "../../utils/validation";
import {
    IS_OPEN_AUDIO_MODAL,
    PUT_AUDIO_RESOURCE_TO_FORM,
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
        case IS_OPEN_AUDIO_MODAL: {
            return {
                ...state,
                id: "",
                name: "",
                isValidName: false,
                url: "",
                isValidUrl: false,
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
                isValidUrl: isValidImageUrl(url)
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
                isValidUrl: isValidImageUrl(url)
            };
        }
        default:
            return state;
    }
};

export default AudioResourceForm;
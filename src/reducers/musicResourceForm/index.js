import { isValidImageUrl, isValidName } from "../../utils/validation";
import {
    IS_OPEN_MUSIC_MODAL,
    PUT_MUSIC_RESOURCE_TO_FORM,
    UPDATE_MUSIC_NAME,
    UPDATE_MUSIC_URL
} from "../../utils/actionConstants";

const initialState = {
    id: "",
    name: "",
    isValidName: false,
    url: "",
    isValidUrl: false,
    isOpen: false
};

export default (state = initialState, action) => {

    switch (action.type) {
        case IS_OPEN_MUSIC_MODAL: {
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
        case UPDATE_MUSIC_NAME: {
            const { name } = action;

            return {
                ...state,
                name,
                isValidName: isValidName(name)
            };
        }
        case UPDATE_MUSIC_URL: {
            const { url } = action;

            return {
                ...state,
                url,
                isValidUrl: isValidImageUrl(url)
            };
        }
        case PUT_MUSIC_RESOURCE_TO_FORM: {
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
}
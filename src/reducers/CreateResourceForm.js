import {IS_OPEN_MODAL, UPDATE_NAME, UPDATE_URL} from "../constants";
import {isValidImageUrl, isValidName} from "../validation";

const initialState = {
    url: '',
    isValidUrl: false,
    isOpen: false
};

export default (state = initialState, action) => {

    switch (action.type) {
        case IS_OPEN_MODAL: {
            return {
                ...state,
                url: '',
                isValidUrl: false,
                isOpen: action.isOpen
            }
        }
        case UPDATE_NAME: {
            const {name} = action;

            return {
                ...state,
                name: name,
                isValidName: isValidName(name)
            }
        }
        case UPDATE_URL: {
            const {url} = action;

            return {
                ...state,
                url: url,
                isValidUrl: isValidImageUrl(url)
            }
        }
        default:
            return state;
    }
}
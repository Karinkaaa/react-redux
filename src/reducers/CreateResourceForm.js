import {IS_OPEN_MODAL, UPDATE_URL} from "../constants";
import {isValidImageUrl} from "../validation";

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
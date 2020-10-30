import {IS_OPEN_MODAL, UPDATE_IMAGE_NAME, UPDATE_IMAGE_URL} from "../../constants";
import {isValidImageUrl, isValidName} from "../../validation";

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
                name: '',
                isValidName: false,
                url: '',
                isValidUrl: false,
                isOpen: action.isOpen
            }
        }
        case UPDATE_IMAGE_NAME: {
            const {name} = action;

            return {
                ...state,
                name: name,
                isValidName: isValidName(name)
            }
        }
        case UPDATE_IMAGE_URL: {
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
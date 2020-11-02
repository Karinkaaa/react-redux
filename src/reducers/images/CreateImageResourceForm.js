import {IS_OPEN_MODAL, PUT_IMAGE_RESOURCE_TO_FORM, UPDATE_IMAGE_NAME, UPDATE_IMAGE_URL} from "../../constants";
import {isValidImageUrl, isValidName} from "../../validation";

const initialState = {
    id: '',
    name: '',
    isValidName: false,
    url: '',
    isValidUrl: false,
    isOpen: false
};

export default (state = initialState, action) => {

    switch (action.type) {
        case IS_OPEN_MODAL: {
            const {isOpen} = action;

            return {
                ...state,
                id: '',
                name: '',
                isValidName: false,
                url: '',
                isValidUrl: false,
                isOpen: isOpen
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
        case PUT_IMAGE_RESOURCE_TO_FORM: {
            const {id, name, url} = action;

            return {
                ...state,
                id: id,
                name: name,
                isValidName: isValidName(name),
                url: url,
                isValidUrl: isValidImageUrl(url)
            }
        }
        default:
            return state;
    }
}
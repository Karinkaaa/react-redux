import {
    IS_OPEN_ANIMATION_MODAL,
    PUT_ANIMATION_RESOURCE_TO_FORM,
    UPDATE_ANIMATION_NAME,
    UPDATE_ANIMATION_URLS
} from "../../utils/constants";
import {isValidName, isValidUrls} from "../../utils/validation";

const initialState = {
    id: '',
    name: '',
    isValidName: false,
    urls: [],
    isValidUrls: false,
    isOpen: false
};

export default (state = initialState, action) => {

    switch (action.type) {
        case IS_OPEN_ANIMATION_MODAL: {
            const {isOpen} = action;

            return {
                ...state,
                id: '',
                name: '',
                isValidName: false,
                urls: [],
                isValidUrls: false,
                isOpen: isOpen
            }
        }
        case UPDATE_ANIMATION_NAME: {
            const {name} = action;

            return {
                ...state,
                name,
                isValidName: isValidName(name)
            }
        }
        case UPDATE_ANIMATION_URLS: {
            const {urls} = action;

            return {
                ...state,
                urls,
                isValidUrls: isValidUrls(urls)
            }
        }
        case PUT_ANIMATION_RESOURCE_TO_FORM: {
            const {id, name, urls} = action;

            return {
                ...state,
                id,
                name,
                isValidName: isValidName(name),
                urls,
                isValidUrls: isValidUrls(urls)
            }
        }
        default:
            return state;
    }
}
import {
    IS_OPEN_ANIMATION_MODAL,
    PUT_ANIMATION_RESOURCE_TO_FORM,
    UPDATE_ANIMATION_NAME,
    UPDATE_ANIMATION_URL
} from "../../utils/constants";
import {isValidImageUrl, isValidName} from "../../utils/validation";

const initialState = {
    id: '',
    name: '',
    isValidName: false,
    urls: [],
    isValidUrls: [],
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
                isValidUrls: [],
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
        case UPDATE_ANIMATION_URL: {

            const {urls, isValidUrls} = state;
            const {index, url} = action;

            const newUrls = [...urls];
            newUrls[index] = url;

            const newIsValidUrls = [...isValidUrls];
            newIsValidUrls[index] = isValidImageUrl(url);

            return {
                ...state,
                urls: newUrls,
                isValidUrls: newIsValidUrls
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
                isValidUrls: urls.map(url => isValidImageUrl(url))
            }
        }
        default:
            return state;
    }
}
import {isValidImageUrl, isValidName} from "../../utils/validation";
import {removeItemByIndex} from "../../utils/methods";
import {
    ADD_IMAGE_RESOURCE_TO_ANIMATION,
    DELETE_IMAGE_RESOURCE_FROM_ANIMATION_FORM,
    IS_OPEN_ANIMATION_MODAL,
    PUT_ANIMATION_RESOURCE_TO_FORM,
    UPDATE_ANIMATION_NAME,
    UPDATE_ANIMATION_URL
} from "../../utils/constants";

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
        case DELETE_IMAGE_RESOURCE_FROM_ANIMATION_FORM: {

            const {index} = action;
            const newUrls = [...state.urls];
            const newIsValidUrls = [...state.isValidUrls];

            removeItemByIndex(newUrls, index);
            removeItemByIndex(newIsValidUrls, index);

            return {
                ...state,
                urls: newUrls,
                isValidUrls: newIsValidUrls
            };
        }
        case ADD_IMAGE_RESOURCE_TO_ANIMATION: {

            const {url} = action;
            let newUrls = [...state.urls];
            let newIsValidUrls = [...state.isValidUrls];

            newUrls.push(url);
            newIsValidUrls.push(isValidImageUrl(url));

            return {
                ...state,
                urls: newUrls,
                isValidUrls: newIsValidUrls
            }
        }
        default:
            return state;
    }
}
import { isValidImageUrl, isValidName } from "../../utils/validation";
import { removeItemByIndex } from "../../utils/methods";
import { INITIAL_SPEED } from "../../utils/constants";
import {
    ADD_IMAGE_RESOURCE_TO_ANIMATION,
    DELETE_IMAGE_RESOURCE_FROM_ANIMATION_FORM,
    IS_OPEN_ANIMATION_MODAL,
    PUT_ANIMATION_RESOURCE_TO_FORM,
    UPDATE_ANIMATION_NAME,
    UPDATE_ANIMATION_SPEED,
    UPDATE_ANIMATION_URL
} from "../../utils/actionConstants";

const initialState = {
    id: "",
    name: "",
    isValidName: false,
    urls: [],
    isValidUrls: [],
    speed: INITIAL_SPEED,
    isOpen: false
};

export default (state = initialState, action) => {

    switch (action.type) {
        case IS_OPEN_ANIMATION_MODAL: {
            const { isOpen } = action;

            return {
                ...state,
                id: "",
                name: "",
                isValidName: false,
                urls: [],
                isValidUrls: [],
                speed: INITIAL_SPEED,
                isOpen: isOpen
            };
        }
        case UPDATE_ANIMATION_NAME: {
            const { name } = action;

            return {
                ...state,
                name,
                isValidName: isValidName(name)
            };
        }
        case UPDATE_ANIMATION_SPEED: {
            return {
                ...state,
                speed: action.speed
            };
        }
        case UPDATE_ANIMATION_URL: {
            const { urls, isValidUrls } = state;
            const { index, url } = action;

            const newUrls = [...urls];
            newUrls[index] = url;

            const newIsValidUrls = [...isValidUrls];
            newIsValidUrls[index] = isValidImageUrl(url);

            return {
                ...state,
                urls: newUrls,
                isValidUrls: newIsValidUrls
            };
        }
        case PUT_ANIMATION_RESOURCE_TO_FORM: {
            const { id, name, urls, speed } = action;

            return {
                ...state,
                id,
                name,
                isValidName: isValidName(name),
                urls,
                isValidUrls: urls.map(url => isValidImageUrl(url)),
                speed
            };
        }
        case DELETE_IMAGE_RESOURCE_FROM_ANIMATION_FORM: {
            const { index } = action;

            return {
                ...state,
                urls: removeItemByIndex(state.urls, index),
                isValidUrls: removeItemByIndex(state.isValidUrls, index)
            };
        }
        case ADD_IMAGE_RESOURCE_TO_ANIMATION: {
            const { url } = action;

            return {
                ...state,
                urls: [
                    ...state.urls,
                    url
                ],
                isValidUrls: [
                    ...state.isValidUrls,
                    isValidImageUrl(url)
                ]
            };
        }
        default:
            return state;
    }
}
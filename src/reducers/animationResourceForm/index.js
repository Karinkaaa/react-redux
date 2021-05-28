import { isValidImageUrl, isValidName } from "../../utils/validation";
import { removeItemByIndex } from "../../utils/methods";
import { INITIAL_SPEED } from "../../utils/constants";
import {
    ADD_IMAGE_RESOURCE_TO_ANIMATION,
    CLEAR_ANIMATION_FORM,
    DELETE_IMAGE_FROM_ANIMATION_FORM,
    DRAG_AND_DROP_IN_ANIMATION_FORM,
    SET_ANIMATION_FORM,
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
    speed: INITIAL_SPEED
};

const AnimationResourceForm = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANIMATION_FORM: {
            const { animation } = action;

            return {
                ...state,
                ...animation,
                isValidName: isValidName(animation.name),
                isValidUrls: animation.urls.map(url => isValidImageUrl(url))
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
        case DELETE_IMAGE_FROM_ANIMATION_FORM: {
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
        case DRAG_AND_DROP_IN_ANIMATION_FORM: {
            return {
                ...state,
                urls: action.result
            };
        }
        case CLEAR_ANIMATION_FORM: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
};

export default AnimationResourceForm;
import { isValidImageUrl, isValidName } from "../../utils/validation";
import {
    CLEAR_IMAGE_FORM,
    OPEN_OR_CLOSE_IMAGE_MODAL,
    SET_IMAGE_FORM,
    UPDATE_IMAGE_NAME,
    UPDATE_IMAGE_URL
} from "../../utils/actionConstants";

const initialState = {
    id: "",
    name: "",
    isValidName: false,
    url: "",
    isValidUrl: false,
    isOpen: false
};

const ImageResourceForm = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_OR_CLOSE_IMAGE_MODAL: {
            return {
                ...state,
                isOpen: action.isOpen
            };
        }
        case UPDATE_IMAGE_NAME: {
            const { name } = action;

            return {
                ...state,
                name,
                isValidName: isValidName(name)
            };
        }
        case UPDATE_IMAGE_URL: {
            const { url } = action;

            return {
                ...state,
                url,
                isValidUrl: isValidImageUrl(url)
            };
        }
        case SET_IMAGE_FORM: {
            const { image } = action;

            return {
                ...state,
                ...image,
                isValidName: isValidName(image.name),
                isValidUrl: isValidImageUrl(image.url)
            };
        }
        case CLEAR_IMAGE_FORM: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
};

export default ImageResourceForm;
import { CHANGE_FORM_DATA, CLEAR_FORM, SET_FORM_DATA } from "../../utils/actionConstants";
import {
    ANIMATIONS_KEY,
    AUDIOS_KEY,
    DRAGON_BONES_KEY,
    IMAGES_KEY,
    LAYERS_KEY,
    MOVIES_KEY,
    RULES_KEY
} from "../../utils/constants";

const initialState = {
    [IMAGES_KEY]: {
        name: "",
        url: "",
        isOpen: false
    },
    [ANIMATIONS_KEY]: {
        name: "",
        urls: [],
        speed: 0
    },
    [DRAGON_BONES_KEY]: {
        name: "",
        texture: "",
        textureJson: "",
        skeleton: "",
        isOpen: false
    },
    [AUDIOS_KEY]: {
        name: "",
        url: "",
        isOpen: false
    },
    [RULES_KEY]: {
        name: "",
        conditions: [],
        cost: 0,
        isOpen: false
    },
    [LAYERS_KEY]: {
        name: "",
        elements: [],
        selectedId: ""
    },
    [MOVIES_KEY]: {
        name: "",
        year: 0,
        rating: ""
    }
};

const ResourceForm = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            const { formKey, formData } = action;

            return {
                ...state,
                [formKey]: formData
            };
        }
        case CHANGE_FORM_DATA: {
            const { formKey, key, value } = action;

            return {
                ...state,
                [formKey]: {
                    ...state[formKey],
                    [key]: value
                }
            };
        }
        case CLEAR_FORM: {
            const { formKey } = action;

            return {
                ...state,
                [formKey]: initialState[formKey]
            };
        }
        default:
            return state;
    }
};

export default ResourceForm;
import { CHANGE_FORM_DATA, CLEAR_FORM, SET_FORM_DATA } from "../../utils/actionConstants";

const initialState = {
    images: {
        name: "",
        url: "",
        isOpen: false
    },
    animations: {
        name: "",
        urls: [],
        speed: 0
    },
    dragonBones: {
        name: "",
        texture: "",
        textureJson: "",
        skeleton: "",
        isOpen: false
    },
    audios: {
        name: "",
        url: "",
        isOpen: false
    },
    rules: {
        name: "",
        conditions: [],
        cost: 0,
        isOpen: false
    },
    layers: {
        name: "",
        elements: [],
        selectedId: ""
    }
}

const ResourceForm = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            const { formKey, formData } = action;

            return {
                ...state,
                [formKey]: formData
            }
        }
        case CHANGE_FORM_DATA: {
            const { formKey, key, value } = action;

            return {
                ...state,
                [formKey]: {
                    ...state[formKey],
                    [key]: value
                }
            }
        }
        case CLEAR_FORM: {
            const { formKey } = action;

            return {
                ...state,
                [formKey]: initialState[formKey]
            }
        }
        default:
            return state;
    }
}

export default ResourceForm;
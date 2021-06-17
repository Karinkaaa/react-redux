import uuid from "react-uuid";
import { removeItemById, saveObjectItemTo } from "../../utils/methods";
import { isValidName } from "../../utils/validation";
import {
    ADD_LAYER_ELEMENT,
    CLEAR_LAYER_FORM,
    DELETE_LAYER_ELEMENT,
    SET_LAYER_FORM,
    SET_LAYER_SELECTED_ID,
    UPDATE_LAYER_ELEMENT,
    UPDATE_LAYER_NAME
} from "../../utils/actionConstants";

const initialState = {
    id: "",
    name: "",
    isValidName: false,
    elements: [],
    selectedId: null
};

const LayerForm = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAYER_FORM: {
            const { layer } = action;

            return {
                ...state,
                ...layer,
                isValidName: isValidName(layer.name),
                selectedId: null
            };
        }
        case ADD_LAYER_ELEMENT: {
            return {
                ...state,
                elements: saveObjectItemTo(state.elements, {
                    id: uuid()
                })
            };
        }
        case UPDATE_LAYER_NAME: {
            const { name } = action;

            return {
                ...state,
                name,
                isValidName: isValidName(name)
            };
        }
        case UPDATE_LAYER_ELEMENT: {
            const { elements } = state;
            const { element } = action;

            return {
                ...state,
                elements: saveObjectItemTo(elements, element)
            };
        }
        case DELETE_LAYER_ELEMENT: {
            const { elements } = state;
            const { id } = action;

            return {
                ...state,
                elements: removeItemById(elements, id)
            };
        }
        case SET_LAYER_SELECTED_ID: {
            return {
                ...state,
                selectedId: action.id
            };
        }
        case CLEAR_LAYER_FORM: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
};

export default LayerForm;
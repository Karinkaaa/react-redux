import uuid from "react-uuid";
import { removeItemById, saveItemTo } from "../../utils/methods";
import { isValidName } from "../../utils/validation";
import {
    ADD_LAYER_ELEMENT,
    DELETE_LAYER_ELEMENT,
    PUT_LAYER_TO_FORM,
    SET_SELECTED_ID,
    UPDATE_LAYER_ELEMENT,
    UPDATE_LAYER_NAME
} from "../../utils/actionConstants";

const initialState = {
    id: "123",
    name: "",
    isValidName: false,
    elements: [
        {
            id: "1",
            position: {
                x: 0,
                y: 0
            },
            size: {
                height: 100,
                width: 100
            }
        },
        {
            id: "2",
            position: {
                x: 10,
                y: 20
            },
            size: {
                height: 120,
                width: 150
            }
        }
    ],
    selectedId: "1"
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LAYER_ELEMENT: {
            return {
                ...state,
                elements: saveItemTo(state.elements, {
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
                elements: saveItemTo(elements, element)
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
        case SET_SELECTED_ID: {
            return {
                ...state,
                selectedId: action.id
            };
        }
        case PUT_LAYER_TO_FORM: {
            const { id, name, elements } = action;

            return {
                ...state,
                id,
                name,
                elements
            };
        }
        default:
            return state;
    }
}

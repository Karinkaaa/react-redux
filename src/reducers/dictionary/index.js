import { SET_DROPDOWN } from "../../utils/actionConstants";

const initialState = {};

const Dictionary = (state = initialState, action) => {
    switch (action.type) {
        case SET_DROPDOWN: {
            const { key, value } = action;

            return {
                ...state,
                [key]: value
            };
        }
        default:
            return state;
    }
};

export default Dictionary;
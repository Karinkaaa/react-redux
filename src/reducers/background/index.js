import { SET_IMAGE_BACKGROUND } from "../../utils/actionConstants";

const initialState = {};

const Background = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGE_BACKGROUND: {
            const { id, url } = action;

            return {
                ...state,
                [id]: url
            };
        }
        default:
            return state;
    }
};

export default Background;
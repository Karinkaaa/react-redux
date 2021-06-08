import { CLEAR_MOVIE_FORM, SET_MOVIE_FORM } from "../../utils/actionConstants";

const initialState = {
    name: "",
    year: 0,
    rating: ""
};

const Movies = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_FORM: {
            return {
                ...state,
                ...action.movie
            };
        }
        case CLEAR_MOVIE_FORM: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
};

export default Movies;
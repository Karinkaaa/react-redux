import { CLEAR_MOVIE_FORM, SET_MOVIE_FORM } from "../../utils/actionConstants";
import { SAVE_MOVIE_SAGA, UPDATE_MOVIE_SAGA } from "../../utils/actionSagaConstants";

export const setMovieForm = (movie) => ({
    type: SET_MOVIE_FORM,
    movie
});

export const clearMovieForm = () => ({
    type: CLEAR_MOVIE_FORM
});

// saga
export const saveMovieSaga = (movie) => ({
    type: SAVE_MOVIE_SAGA,
    movie
});

export const updateMovieSaga = (id, movie) => ({
    type: UPDATE_MOVIE_SAGA,
    id,
    movie
});
import {
    GET_MOVIE_BY_ID_SAGA,
    GET_MOVIES_SAGA,
    REMOVE_MOVIE_SAGA,
    SAVE_MOVIE_SAGA,
    SET_FORM_SAGA,
    SET_MOVIES_SAGA,
    UPDATE_MOVIE_SAGA
} from "../../utils/actionConstants";

export const saveMovieSaga = (movie) => ({
    type: SAVE_MOVIE_SAGA,
    movie
});

export const updateMovieSaga = (id, movie) => ({
    type: UPDATE_MOVIE_SAGA,
    id,
    movie
});

export const removeMovieSaga = (id) => ({
    type: REMOVE_MOVIE_SAGA,
    id
});

export const getMoviesSaga = () => ({
    type: GET_MOVIES_SAGA
});

export const setMoviesSaga = (movies) => ({
    type: SET_MOVIES_SAGA,
    movies
});

export const setFormSaga = (movie) => ({
    type: SET_FORM_SAGA,
    movie
});

export const getMovieByIdSaga = (id) => ({
    type: GET_MOVIE_BY_ID_SAGA,
    id
});

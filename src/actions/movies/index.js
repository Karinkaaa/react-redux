import {
    CHANGE_MOVIE_LIMIT,
    CHANGE_MOVIE_PAGE,
    CLEAR_MOVIE_FORM,
    GET_MOVIE_BY_ID_SAGA,
    GET_MOVIES_SAGA,
    REMOVE_MOVIE_SAGA,
    SAVE_MOVIE_SAGA,
    SET_MOVIE_FORM_SAGA,
    SET_MOVIES_SAGA,
    SET_TOTAL_MOVIES_COUNT,
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

export const setMovieFormSaga = (movie) => ({
    type: SET_MOVIE_FORM_SAGA,
    movie
});

export const getMovieByIdSaga = (id) => ({
    type: GET_MOVIE_BY_ID_SAGA,
    id
});

export const clearMovieForm = () => ({
    type: CLEAR_MOVIE_FORM
});

export const changeMoviePage = (page) => ({
    type: CHANGE_MOVIE_PAGE,
    page
});

export const changeMovieLimit = (limit) => ({
    type: CHANGE_MOVIE_LIMIT,
    limit
});

export const setTotalMoviesCount = (count) => ({
    type: SET_TOTAL_MOVIES_COUNT,
    count
});

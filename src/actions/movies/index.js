import {
    GET_MOVIE_BY_ID_SAGA,
    GET_MOVIES_SAGA,
    REMOVE_MOVIE_SAGA,
    SAVE_MOVIE_SAGA,
    UPDATE_MOVIE_SAGA
} from "../../utils/actionSagaConstants";
import {
    CHANGE_MOVIE_FILTER_VALUE,
    CHANGE_MOVIE_LIMIT,
    CHANGE_MOVIE_PAGE,
    CHANGE_MOVIE_SORT,
    CLEAR_MOVIE_FORM,
    SET_MOVIE_FORM,
    SET_MOVIES,
    SET_TOTAL_MOVIES_COUNT
} from "../../utils/actionConstants";

export const changeMoviePage = (page) => ({
    type: CHANGE_MOVIE_PAGE,
    page
});

export const changeMovieLimit = (limit) => ({
    type: CHANGE_MOVIE_LIMIT,
    limit
});

export const changeMovieSort = (field) => ({
    type: CHANGE_MOVIE_SORT,
    field
});

export const setMovies = (movies) => ({
    type: SET_MOVIES,
    movies
});

export const setTotalMoviesCount = (count) => ({
    type: SET_TOTAL_MOVIES_COUNT,
    count
});

export const changeMovieFilterValue = ({ filterKey, filterValue }) => ({
    type: CHANGE_MOVIE_FILTER_VALUE,
    filterKey,
    filterValue
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

export const removeMovieSaga = (id) => ({
    type: REMOVE_MOVIE_SAGA,
    id
});

export const getMoviesSaga = () => ({
    type: GET_MOVIES_SAGA
});

export const setMovieForm = (movie) => ({
    type: SET_MOVIE_FORM,
    movie
});

export const getMovieByIdSaga = (id) => ({
    type: GET_MOVIE_BY_ID_SAGA,
    id
});

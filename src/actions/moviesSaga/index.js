import { GET_MOVIE_BY_ID_SAGA, GET_MOVIES_SAGA, REMOVE_MOVIE_SAGA } from "../../utils/actionSagaConstants";

export const getMoviesSaga = () => ({
    type: GET_MOVIES_SAGA
});

export const getMovieByIdSaga = (id) => ({
    type: GET_MOVIE_BY_ID_SAGA,
    id
});

export const removeMovieSaga = (id) => ({
    type: REMOVE_MOVIE_SAGA,
    id
});

import *  as axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { changeMoviePage, getMoviesSaga } from "../actions/movies";
import { MOVIES_API } from "../utils/apiLinks";
import { REMOVE_MOVIE_SAGA } from "../utils/actionConstants";
import { getAvailableCurrentPage } from "../utils/methods";

export function* removeMovieSaga(action) {
    const { id } = action;
    const movies = yield select(state => state.movies.movieList);
    const { page, limit } = yield select(state => state.movies.pagination);
    const pageNumber = getAvailableCurrentPage(movies.length - 1, page, limit);

    yield call(axios.delete, MOVIES_API + "/" + id);

    yield put(changeMoviePage(pageNumber));
    yield put(getMoviesSaga());
}

export function* watchRemoveMovieSaga() {
    yield takeEvery(REMOVE_MOVIE_SAGA, removeMovieSaga);
}
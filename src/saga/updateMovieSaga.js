import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getMoviesSaga } from "../actions/movies";
import { MOVIES_API } from "../utils/apiLinks";
import { UPDATE_MOVIE_SAGA } from "../utils/actionConstants";

export function* updateMovieSaga(action) {
    const { id, movie } = action;

    yield call(axios.put, MOVIES_API + "/" + id, { movie });
    yield put(getMoviesSaga());
}

export function* watchUpdateMovieSaga() {
    yield takeEvery(UPDATE_MOVIE_SAGA, updateMovieSaga);
}
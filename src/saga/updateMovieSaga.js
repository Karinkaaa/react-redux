import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { UPDATE_MOVIE_SAGA } from "../utils/actionConstants";
import { getMoviesSaga } from "../actions/movie";
import { MOVIES_API } from "../utils/apiLinks";

export function* updateMovieSaga(action) {
    const { id, movie } = action;
    console.log("saga update", id);

    yield call(
        axios.put,
        MOVIES_API + "/" + id,
        { movie }
    );

    yield put(getMoviesSaga());
}

export function* watchUpdateMovieSaga() {
    yield takeEvery(UPDATE_MOVIE_SAGA, updateMovieSaga);
}
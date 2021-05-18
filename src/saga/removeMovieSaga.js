import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getMoviesSaga } from "../actions/movies";
import { MOVIES_API } from "../utils/apiLinks";
import { REMOVE_MOVIE_SAGA } from "../utils/actionConstants";

export function* removeMovieSaga(action) {
    const { id } = action;

    yield call(axios.delete, MOVIES_API + "/" + id);
    yield put(getMoviesSaga());
}

export function* watchRemoveMovieSaga() {
    yield takeEvery(REMOVE_MOVIE_SAGA, removeMovieSaga);
}
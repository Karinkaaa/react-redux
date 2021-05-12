import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { REMOVE_MOVIE_SAGA } from "../utils/actionConstants";
import { MOVIES_API } from "../utils/apiLinks";
import { getMoviesSaga } from "../actions/movie";

export function* removeMovieSaga(action) {
    const { id } = action;
    console.log("saga remove", id);

    yield call(
        axios.delete,
        MOVIES_API + "/" + id
    );

    yield put(getMoviesSaga());
}

export function* watchRemoveMovieSaga() {
    yield takeEvery(REMOVE_MOVIE_SAGA, removeMovieSaga);
}
import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_MOVIES_SAGA } from "../utils/actionConstants";
import { setMoviesSaga } from "../actions/movie";
import { MOVIES_API } from "../utils/apiLinks";

export function* getMoviesSaga() {
    console.log("saga get");

    const result = yield call(axios.get, MOVIES_API);
    yield put(setMoviesSaga(result.data.movies));
}

export function* watchGetMoviesSaga() {
    yield takeEvery(GET_MOVIES_SAGA, getMoviesSaga);
}
import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getMoviesSaga } from "../../actions/movies";
import { MOVIES_API } from "../../utils/apiLinks";
import { SAVE_MOVIE_SAGA } from "../../utils/actionConstants";

export function* saveMovieSaga(action) {
    const { movie } = action;

    yield call(axios.post, MOVIES_API, { movie });
    yield put(getMoviesSaga());
}

export function* watchSaveMovieSaga() {
    yield takeEvery(SAVE_MOVIE_SAGA, saveMovieSaga);
}
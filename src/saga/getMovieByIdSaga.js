import { call, put, takeEvery } from "redux-saga/effects";
import *  as axios from "axios";
import { GET_MOVIE_BY_ID_SAGA } from "../utils/actionConstants";
import { MOVIES_API } from "../utils/apiLinks";
import { setFormSaga } from "../actions/movie";

export function* getMovieByIdSaga(action) {
    const { id } = action;
    console.log("saga putData", id);

    const result = yield call(
        axios.get,
        MOVIES_API + "/" + id
    );

    yield put(setFormSaga(result.data.movie));
}

export function* watchPutDataToFormSaga() {
    yield takeEvery(GET_MOVIE_BY_ID_SAGA, getMovieByIdSaga);
}
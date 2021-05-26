import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { MOVIES_API } from "../../utils/apiLinks";
import { GET_MOVIE_BY_ID_SAGA } from "../../utils/actionConstants";
import { setMovieFormSaga } from "../../actions/movies";

export function* getMovieByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, MOVIES_API + "/" + id);

    yield put(setMovieFormSaga(result.data.movie));
}

export function* watchPutDataToFormSaga() {
    yield takeEvery(GET_MOVIE_BY_ID_SAGA, getMovieByIdSaga);
}
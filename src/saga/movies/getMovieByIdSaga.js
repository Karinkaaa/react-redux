import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { MOVIES_API } from "../../utils/apiLinks";
import { GET_MOVIE_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { setMovieForm } from "../../actions/movies";

export function* getMovieByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, MOVIES_API + "/" + id);

    yield put(setMovieForm(result.data.movie));
}

export function* watchGetMovieByIdSaga() {
    yield takeEvery(GET_MOVIE_BY_ID_SAGA, getMovieByIdSaga);
}
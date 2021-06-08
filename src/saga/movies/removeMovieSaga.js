import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { MOVIES_API } from "../../utils/apiLinks";
import { REMOVE_MOVIE_SAGA } from "../../utils/actionSagaConstants";
import { getAvailableCurrentPage } from "../../utils/methods";
import { getMoviesSaga } from "../../actions/moviesSaga";
import { changeTablePage } from "../../actions/table";

export function* removeMovieSaga(action) {
    const { id } = action;
    const movies = yield select(state => state.table.movies.list);
    const { page, limit } = yield select(state => state.table.movies.pagination);
    const pageNumber = getAvailableCurrentPage(movies.length - 1, page, limit);

    yield call(axios.delete, MOVIES_API + "/" + id);

    yield put(changeTablePage("movies", pageNumber));
    yield put(getMoviesSaga());
}

export function* watchRemoveMovieSaga() {
    yield takeEvery(REMOVE_MOVIE_SAGA, removeMovieSaga);
}
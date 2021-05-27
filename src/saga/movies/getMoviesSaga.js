import *  as axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { setMovies, setTotalMoviesCount } from "../../actions/movies";
import { MOVIES_API } from "../../utils/apiLinks";
import { GET_MOVIES_SAGA } from "../../utils/actionConstants";

export function* getMoviesSaga() {
    const pagination = yield select(state => state.movies.pagination);
    const sorting = yield select(state => state.movies.sorting);
    const filters = yield select(state => state.movies.filters);

    const result = yield call(axios.get, MOVIES_API, {
        params: {
            filters,
            pagination,
            sorting
        }
    });

    yield put(setMovies(result.data.movies));
    yield put(setTotalMoviesCount(result.data.count));
}

export function* watchGetMoviesSaga() {
    yield takeEvery(GET_MOVIES_SAGA, getMoviesSaga);
}
import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { MOVIES_API } from "../../utils/apiLinks";
import { MOVIES_KEY } from "../../utils/constants";
import { GET_MOVIES_SAGA } from "../../utils/actionSagaConstants";
import { setTableData, setTotalTableDataCount } from "../../actions/table";

export function* getMoviesSaga() {
    const pagination = yield select(state => state.table.movies.pagination);
    const sorting = yield select(state => state.table.movies.sorting);
    const filters = yield select(state => state.table.movies.filters);

    const result = yield call(axios.get, MOVIES_API, {
        params: {
            filters,
            pagination,
            sorting
        }
    });

    yield put(setTableData(MOVIES_KEY, result.data.movies));
    yield put(setTotalTableDataCount(MOVIES_KEY, result.data.count));
}

export function* watchGetMoviesSaga() {
    yield takeEvery(GET_MOVIES_SAGA, getMoviesSaga);
}
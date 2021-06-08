import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { GET_ANIMATIONS_SAGA } from "../../utils/actionSagaConstants";
import { ANIMATIONS_API } from "../../utils/apiLinks";
import { setTableData, setTotalTableDataCount } from "../../actions/table";

export function* getAnimationsSaga() {
    const pagination = yield select(state => state.table.animations.pagination);
    const sorting = yield select(state => state.table.animations.sorting);
    const filters = yield select(state => state.table.animations.filters);

    const result = yield call(axios.get, ANIMATIONS_API, {
        params: {
            pagination,
            sorting,
            filters
        }
    });

    yield put(setTableData("animations", result.data.animations));
    yield put(setTotalTableDataCount("animations", result.data.count));
}

export function* watchGetAnimationsSaga() {
    yield takeEvery(GET_ANIMATIONS_SAGA, getAnimationsSaga);
}
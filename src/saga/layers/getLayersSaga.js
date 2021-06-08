import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { GET_LAYERS_SAGA } from "../../utils/actionSagaConstants";
import { LAYERS_API } from "../../utils/apiLinks";
import { setTableData, setTotalTableDataCount } from "../../actions/table";

export function* getLayersSaga() {
    const pagination = yield select(state => state.table.layers.pagination);
    const sorting = yield select(state => state.table.layers.sorting);
    const filters = yield select(state => state.table.layers.filters);

    const result = yield call(axios.get, LAYERS_API, {
        params: {
            pagination,
            sorting,
            filters
        }
    });

    yield put(setTableData("layers", result.data.layers));
    yield put(setTotalTableDataCount("layers", result.data.count));
}

export function* watchGetLayersSaga() {
    yield takeEvery(GET_LAYERS_SAGA, getLayersSaga);
}
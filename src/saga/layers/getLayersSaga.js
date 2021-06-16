import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { LAYERS_API } from "../../utils/apiLinks";
import { LAYERS_KEY } from "../../utils/constants";
import { GET_LAYERS_SAGA } from "../../utils/actionSagaConstants";
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

    yield put(setTableData(LAYERS_KEY, result.data.layers));
    yield put(setTotalTableDataCount(LAYERS_KEY, result.data.count));
}

export function* watchGetLayersSaga() {
    yield takeEvery(GET_LAYERS_SAGA, getLayersSaga);
}
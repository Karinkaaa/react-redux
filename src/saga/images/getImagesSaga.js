import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { GET_IMAGES_SAGA } from "../../utils/actionSagaConstants";
import { IMAGES_API } from "../../utils/apiLinks";
import { setTableData, setTotalTableDataCount } from "../../actions/table";

export function* getImagesSaga() {
    const pagination = yield select(state => state.table.images.pagination);
    const sorting = yield select(state => state.table.images.sorting);
    const filters = yield select(state => state.table.images.filters);

    const result = yield call(axios.get, IMAGES_API, {
        params: {
            filters,
            pagination,
            sorting
        }
    });

    yield put(setTableData("images", result.data.images));
    yield put(setTotalTableDataCount("images", result.data.count));
}

export function* watchGetImagesSaga() {
    yield takeEvery(GET_IMAGES_SAGA, getImagesSaga);
}
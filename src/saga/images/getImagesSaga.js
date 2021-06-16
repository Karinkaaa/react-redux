import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { IMAGES_API } from "../../utils/apiLinks";
import { IMAGES_KEY } from "../../utils/constants";
import { GET_IMAGES_SAGA } from "../../utils/actionSagaConstants";
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

    yield put(setTableData(IMAGES_KEY, result.data.images));
    yield put(setTotalTableDataCount(IMAGES_KEY, result.data.count));
}

export function* watchGetImagesSaga() {
    yield takeEvery(GET_IMAGES_SAGA, getImagesSaga);
}
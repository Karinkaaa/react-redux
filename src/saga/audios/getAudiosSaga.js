import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { AUDIOS_API } from "../../utils/apiLinks";
import { AUDIOS_KEY } from "../../utils/constants";
import { GET_AUDIOS_SAGA } from "../../utils/actionSagaConstants";
import { setTableData, setTotalTableDataCount } from "../../actions/table";

export function* getAudiosSaga() {
    const pagination = yield select(state => state.table.audios.pagination);
    const sorting = yield select(state => state.table.audios.sorting);
    const filters = yield select(state => state.table.audios.filters);

    const result = yield call(axios.get, AUDIOS_API, {
        params: {
            pagination,
            sorting,
            filters
        }
    });

    yield put(setTableData(AUDIOS_KEY, result.data.audios));
    yield put(setTotalTableDataCount(AUDIOS_KEY, result.data.count));
}

export function* watchGetAudiosSaga() {
    yield takeEvery(GET_AUDIOS_SAGA, getAudiosSaga);
}
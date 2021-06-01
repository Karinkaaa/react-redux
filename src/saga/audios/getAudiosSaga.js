import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { AUDIOS_API } from "../../utils/apiLinks";
import { GET_AUDIOS_SAGA } from "../../utils/actionSagaConstants";
import { setAudios, setTotalAudiosCount } from "../../actions/audioResourceComponent";

export function* getAudiosSaga() {
    const pagination = yield select(state => state.audios.pagination);
    const sorting = yield select(state => state.audios.sorting);
    const filters = yield select(state => state.audios.filters);

    const result = yield call(axios.get, AUDIOS_API, {
        params: {
            pagination,
            sorting,
            filters
        }
    });

    yield put(setAudios(result.data.audios));
    yield put(setTotalAudiosCount(result.data.count));
}

export function* watchGetAudiosSaga() {
    yield takeEvery(GET_AUDIOS_SAGA, getAudiosSaga);
}
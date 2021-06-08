import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { REMOVE_AUDIO_SAGA } from "../../utils/actionSagaConstants";
import { AUDIOS_API } from "../../utils/apiLinks";
import { getAvailableCurrentPage } from "../../utils/methods";
import { getAudiosSaga } from "../../actions/audiosSaga";
import { stopAudio } from "../../actions/audioPlayer";
import { changeTablePage } from "../../actions/table";

export function* removeAudioSaga(action) {
    const { id } = action;
    const audios = yield select(state => state.table.audios.list);
    const { page, limit } = yield select(state => state.table.audios.pagination);
    const pageNumber = getAvailableCurrentPage(audios.length - 1, page, limit);

    yield call(axios.delete, AUDIOS_API + "/" + id);

    yield put(stopAudio(audios.find(item => item.id === id).url));
    yield put(changeTablePage("audios", pageNumber));
    yield put(getAudiosSaga());
}

export function* watchRemoveAudioSaga() {
    yield takeEvery(REMOVE_AUDIO_SAGA, removeAudioSaga);
}
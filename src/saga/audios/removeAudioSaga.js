import *  as axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { REMOVE_AUDIO_SAGA } from "../../utils/actionConstants";
import { AUDIOS_API } from "../../utils/apiLinks";
import { getAvailableCurrentPage } from "../../utils/methods";
import { changeAudioPage, getAudiosSaga, stopAudio } from "../../actions/audioResourceComponent";

export function* removeAudioSaga(action) {
    const { id } = action;
    const audios = yield select(state => state.audios.playlist);
    const { page, limit } = yield select(state => state.audios.pagination);
    const pageNumber = getAvailableCurrentPage(audios.length - 1, page, limit);

    yield call(axios.delete, AUDIOS_API + "/" + id);

    yield put(stopAudio(audios.find(item => item.id === id).url));
    yield put(changeAudioPage(pageNumber));
    yield put(getAudiosSaga());
}

export function* watchRemoveAudioSaga() {
    yield takeEvery(REMOVE_AUDIO_SAGA, removeAudioSaga);
}
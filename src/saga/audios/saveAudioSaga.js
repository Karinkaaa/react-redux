import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { SAVE_AUDIO_SAGA } from "../../utils/actionConstants";
import { AUDIOS_API } from "../../utils/apiLinks";
import { getAudiosSaga } from "../../actions/audioResourceComponent";

export function* saveAudioSaga(action) {
    const { audio } = action;

    yield call(axios.post, AUDIOS_API, { audio });
    yield put(getAudiosSaga());
}

export function* watchSaveAudioSaga() {
    yield takeEvery(SAVE_AUDIO_SAGA, saveAudioSaga);
}
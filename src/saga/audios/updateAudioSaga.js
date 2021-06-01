import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { UPDATE_AUDIO_SAGA } from "../../utils/actionSagaConstants";
import { AUDIOS_API } from "../../utils/apiLinks";
import { getAudiosSaga } from "../../actions/audioResourceComponent";

export function* updateAudioSaga(action) {
    const { id, audio } = action;

    yield call(axios.put, AUDIOS_API + "/" + id, { audio });
    yield put(getAudiosSaga());
}

export function* watchUpdateAudioSaga() {
    yield takeEvery(UPDATE_AUDIO_SAGA, updateAudioSaga);
}
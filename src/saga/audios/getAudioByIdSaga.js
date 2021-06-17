import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { AUDIOS_API } from "../../utils/apiLinks";
import { AUDIOS_KEY } from "../../utils/constants";
import { GET_AUDIO_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { setFormData } from "../../actions/form";

export function* getAudioByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, AUDIOS_API + "/" + id);

    yield put(setFormData(AUDIOS_KEY, result.data.audio));
}

export function* watchGetAudioByIdSaga() {
    yield takeEvery(GET_AUDIO_BY_ID_SAGA, getAudioByIdSaga);
}
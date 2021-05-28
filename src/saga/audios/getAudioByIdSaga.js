import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_AUDIO_BY_ID_SAGA } from "../../utils/actionConstants";
import { AUDIOS_API } from "../../utils/apiLinks";
import { isOpenAudioModal, setAudioForm } from "../../actions/audioResourceForm";

export function* getAudioByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, AUDIOS_API + "/" + id);

    yield put(isOpenAudioModal(true));
    yield put(setAudioForm(result.data.audio));
}

export function* watchGetAudioByIdSaga() {
    yield takeEvery(GET_AUDIO_BY_ID_SAGA, getAudioByIdSaga);
}
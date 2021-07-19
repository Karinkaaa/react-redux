import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setBackground } from "../../actions/background";
import { BACKGROUND_API } from "../../utils/apiLinks";
import { GET_IMAGE_BACKGROUND_SAGA } from "../../utils/actionSagaConstants";

export function* getImageBackgroundSaga(action) {
    const { ref } = action;
    const result = yield call(axios.get, BACKGROUND_API, { params: { ref } });

    yield put(setBackground(ref, result.data));
}

export function* watchGetImageBackgroundSaga() {
    yield takeEvery(GET_IMAGE_BACKGROUND_SAGA, getImageBackgroundSaga);
}
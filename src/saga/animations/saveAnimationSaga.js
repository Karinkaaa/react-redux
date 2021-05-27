import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { SAVE_ANIMATION_SAGA } from "../../utils/actionConstants";
import { ANIMATIONS_API } from "../../utils/apiLinks";
import { getAnimationsSaga } from "../../actions/animationResourceComponent";

export function* saveAnimationSaga(action) {
    const { animation } = action;

    yield call(axios.post, ANIMATIONS_API, { animation });
    yield put(getAnimationsSaga());
}

export function* watchSaveAnimationSaga() {
    yield takeEvery(SAVE_ANIMATION_SAGA, saveAnimationSaga);
}
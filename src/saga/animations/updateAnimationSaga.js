import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ANIMATIONS_API } from "../../utils/apiLinks";
import { UPDATE_ANIMATION_SAGA } from "../../utils/actionSagaConstants";
import { getAnimationsSaga } from "../../actions/animationsSaga";

export function* updateAnimationSaga(action) {
    const { id, animation } = action;

    yield call(axios.put, ANIMATIONS_API + "/" + id, { animation });
    yield put(getAnimationsSaga());
}

export function* watchUpdateAnimationSaga() {
    yield takeEvery(UPDATE_ANIMATION_SAGA, updateAnimationSaga);
}
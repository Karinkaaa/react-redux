import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ANIMATIONS_API } from "../../utils/apiLinks";
import { GET_ANIMATION_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { setFormData } from "../../actions/form";

export function* getAnimationByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, ANIMATIONS_API + "/" + id);

    yield put(setFormData("animations", result.data.animation));
}

export function* watchGetAnimationById() {
    yield takeEvery(GET_ANIMATION_BY_ID_SAGA, getAnimationByIdSaga);
}
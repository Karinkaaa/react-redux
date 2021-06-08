import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { ANIMATIONS_API } from "../../utils/apiLinks";
import { GET_ANIMATION_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { setAnimationForm } from "../../actions/animationResourceForm";

export function* getAnimationByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, ANIMATIONS_API + "/" + id);

    yield put(setAnimationForm(result.data.animation));
}

export function* watchGetAnimationById() {
    yield takeEvery(GET_ANIMATION_BY_ID_SAGA, getAnimationByIdSaga);
}
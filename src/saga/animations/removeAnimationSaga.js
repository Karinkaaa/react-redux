import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { ANIMATIONS_API } from "../../utils/apiLinks";
import { REMOVE_ANIMATION_SAGA } from "../../utils/actionSagaConstants";
import { getAvailableCurrentPage } from "../../utils/methods";
import { changeAnimationPage, getAnimationsSaga } from "../../actions/animationResourceComponent";

export function* removeAnimationSaga(action) {
    const { id } = action;
    const animations = yield select(state => state.animations.animationList);
    const { page, limit } = yield select(state => state.animations.pagination);
    const pageNumber = getAvailableCurrentPage(animations.length - 1, page, limit);

    yield call(axios.delete, ANIMATIONS_API + "/" + id);

    yield put(changeAnimationPage(pageNumber));
    yield put(getAnimationsSaga());
}

export function* watchRemoveAnimationSaga() {
    yield takeEvery(REMOVE_ANIMATION_SAGA, removeAnimationSaga);
}
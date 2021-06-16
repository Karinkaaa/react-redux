import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { ANIMATIONS_API } from "../../utils/apiLinks";
import { ANIMATIONS_KEY } from "../../utils/constants";
import { REMOVE_ANIMATION_SAGA } from "../../utils/actionSagaConstants";
import { getAvailableCurrentPage } from "../../utils/methods";
import { getAnimationsSaga } from "../../actions/animationsSaga";
import { changeTablePage } from "../../actions/table";

export function* removeAnimationSaga(action) {
    const { id } = action;
    const animations = yield select(state => state.table.animations.list);
    const { page, limit } = yield select(state => state.table.animations.pagination);
    const pageNumber = getAvailableCurrentPage(animations.length - 1, page, limit);

    yield call(axios.delete, ANIMATIONS_API + "/" + id);

    yield put(changeTablePage(ANIMATIONS_KEY, pageNumber));
    yield put(getAnimationsSaga());
}

export function* watchRemoveAnimationSaga() {
    yield takeEvery(REMOVE_ANIMATION_SAGA, removeAnimationSaga);
}
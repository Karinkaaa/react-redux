import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { IMAGES_API } from "../../utils/apiLinks";
import { REMOVE_IMAGE_SAGA } from "../../utils/actionSagaConstants";
import { getAvailableCurrentPage } from "../../utils/methods";
import { changeImagePage, getImagesSaga } from "../../actions/imageResourceComponent";

export function* removeImageSaga(action) {
    const { id } = action;
    const images = yield select(state => state.images.imageList);
    const { page, limit } = yield select(state => state.images.pagination);
    const pageNumber = getAvailableCurrentPage(images.length - 1, page, limit);

    yield call(axios.delete, IMAGES_API + "/" + id);

    yield put(changeImagePage(pageNumber));
    yield put(getImagesSaga());
}

export function* watchRemoveImageSaga() {
    yield takeEvery(REMOVE_IMAGE_SAGA, removeImageSaga);
}
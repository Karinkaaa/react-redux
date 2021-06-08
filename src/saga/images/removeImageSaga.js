import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { REMOVE_IMAGE_SAGA } from "../../utils/actionSagaConstants";
import { IMAGES_API } from "../../utils/apiLinks";
import { getAvailableCurrentPage } from "../../utils/methods";
import { getImagesSaga } from "../../actions/imagesSaga";
import { changeTablePage } from "../../actions/table";

export function* removeImageSaga(action) {
    const { id } = action;
    const images = yield select(state => state.table.images.list);
    const { page, limit } = yield select(state => state.table.images.pagination);
    const pageNumber = getAvailableCurrentPage(images.length - 1, page, limit);

    yield call(axios.delete, IMAGES_API + "/" + id);

    yield put(changeTablePage("images", pageNumber));
    yield put(getImagesSaga());
}

export function* watchRemoveImageSaga() {
    yield takeEvery(REMOVE_IMAGE_SAGA, removeImageSaga);
}
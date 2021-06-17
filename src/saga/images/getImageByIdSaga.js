import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { IMAGES_API } from "../../utils/apiLinks";
import { IMAGES_KEY } from "../../utils/constants";
import { GET_IMAGE_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { setFormData } from "../../actions/form";

export function* getImageByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, IMAGES_API + "/" + id);

    yield put(setFormData(IMAGES_KEY, result.data.image));
}

export function* watchGetImageByIdSaga() {
    yield takeEvery(GET_IMAGE_BY_ID_SAGA, getImageByIdSaga);
}
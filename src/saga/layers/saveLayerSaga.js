import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { SAVE_LAYER_SAGA } from "../../utils/actionConstants";
import { LAYERS_API } from "../../utils/apiLinks";
import { getLayersSaga } from "../../actions/layerComponent";

export function* saveLayerSaga(action) {
    const { layer } = action;

    yield call(axios.post, LAYERS_API, { layer });
    yield put(getLayersSaga());
}

export function* watchSaveLayerSaga() {
    yield takeEvery(SAVE_LAYER_SAGA, saveLayerSaga);
}
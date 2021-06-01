import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { UPDATE_LAYER_SAGA } from "../../utils/actionSagaConstants";
import { LAYERS_API } from "../../utils/apiLinks";
import { getLayersSaga } from "../../actions/layerComponent";

export function* updateLayerSaga(action) {
    const { id, layer } = action;

    yield call(axios.put, LAYERS_API + "/" + id, { layer });
    yield put(getLayersSaga());
}

export function* watchUpdateLayerSaga() {
    yield takeEvery(UPDATE_LAYER_SAGA, updateLayerSaga);
}
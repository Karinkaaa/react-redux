import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_LAYER_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { LAYERS_API } from "../../utils/apiLinks";
import { setLayerForm } from "../../actions/layerForm";

export function* getLayerByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, LAYERS_API + "/" + id);

    yield put(setLayerForm(result.data.layer));
}

export function* watchGetLayerByIdSaga() {
    yield takeEvery(GET_LAYER_BY_ID_SAGA, getLayerByIdSaga);
}
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { LAYERS_API } from "../../utils/apiLinks";
import { LAYERS_KEY } from "../../utils/constants";
import { GET_LAYER_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { setFormData } from "../../actions/form";

export function* getLayerByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, LAYERS_API + "/" + id);

    yield put(setFormData(LAYERS_KEY, result.data.layer));
}

export function* watchGetLayerByIdSaga() {
    yield takeEvery(GET_LAYER_BY_ID_SAGA, getLayerByIdSaga);
}
import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { REMOVE_LAYER_SAGA } from "../../utils/actionConstants";
import { LAYERS_API } from "../../utils/apiLinks";
import { getAvailableCurrentPage } from "../../utils/methods";
import { changeLayerPage, getLayersSaga } from "../../actions/layerComponent";

export function* removeLayerSaga(action) {
    const { id } = action;
    const layers = yield select(state => state.layers.layerList);
    const { page, limit } = yield select(state => state.layers.pagination);
    const pageNumber = getAvailableCurrentPage(layers.length - 1, page, limit);

    yield call(axios.delete, LAYERS_API + "/" + id);

    yield put(changeLayerPage(pageNumber));
    yield put(getLayersSaga());
}

export function* watchRemoveLayerSaga() {
    yield takeEvery(REMOVE_LAYER_SAGA, removeLayerSaga);
}
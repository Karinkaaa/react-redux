import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { GET_LAYERS_SAGA } from "../../utils/actionSagaConstants";
import { LAYERS_API } from "../../utils/apiLinks";
import { setLayers, setTotalLayersCount } from "../../actions/layerComponent";

export function* getLayersSaga() {
    const pagination = yield select(state => state.layers.pagination);
    const sorting = yield select(state => state.layers.sorting);
    const filters = yield select(state => state.layers.filters);

    const result = yield call(axios.get, LAYERS_API, {
        params: {
            pagination,
            sorting,
            filters
        }
    });

    yield put(setLayers(result.data.layers));
    yield put(setTotalLayersCount(result.data.count));
}

export function* watchGetLayersSaga() {
    yield takeEvery(GET_LAYERS_SAGA, getLayersSaga);
}
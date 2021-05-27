import *  as axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { GET_IMAGES_SAGA } from "../../utils/actionConstants";
import { IMAGES_API } from "../../utils/apiLinks";
import { setImages, setTotalImagesCount } from "../../actions/imageResourceComponent";

export function* getImagesSaga() {
    const pagination = yield select(state => state.images.pagination);
    const sorting = yield select(state => state.images.sorting);
    const filters = yield select(state => state.images.filters);

    const result = yield call(axios.get, IMAGES_API, {
        params: {
            filters,
            pagination,
            sorting
        }
    });

    yield put(setImages(result.data.images));
    yield put(setTotalImagesCount(result.data.count));
}

export function* watchGetImagesSaga() {
    yield takeEvery(GET_IMAGES_SAGA, getImagesSaga);
}
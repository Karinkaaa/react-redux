import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { GET_DRAGON_BONES_SAGA } from "../../utils/actionSagaConstants";
import { DRAGON_BONES_API } from "../../utils/apiLinks";
import { setDragonBones, setTotalDragonBonesCount } from "../../actions/dragonBonesResourceComponent";

export function* getDragonBonesSaga() {
    const pagination = yield select(state => state.dragonBones.pagination);
    const sorting = yield select(state => state.dragonBones.sorting);
    const filters = yield select(state => state.dragonBones.filters);

    const result = yield call(axios.get, DRAGON_BONES_API, {
        params: {
            pagination,
            sorting,
            filters
        }
    });

    yield put(setDragonBones(result.data.dragonBones));
    yield put(setTotalDragonBonesCount(result.data.count));
}

export function* watchGetDragonBonesSaga() {
    yield takeEvery(GET_DRAGON_BONES_SAGA, getDragonBonesSaga);
}
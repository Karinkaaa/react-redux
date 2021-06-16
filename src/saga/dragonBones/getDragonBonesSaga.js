import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { DRAGON_BONES_API } from "../../utils/apiLinks";
import { DRAGON_BONES_KEY } from "../../utils/constants";
import { GET_DRAGON_BONES_SAGA } from "../../utils/actionSagaConstants";
import { setTableData, setTotalTableDataCount } from "../../actions/table";

export function* getDragonBonesSaga() {
    const pagination = yield select(state => state.table.dragonBones.pagination);
    const sorting = yield select(state => state.table.dragonBones.sorting);
    const filters = yield select(state => state.table.dragonBones.filters);

    const result = yield call(axios.get, DRAGON_BONES_API, {
        params: {
            pagination,
            sorting,
            filters
        }
    });

    yield put(setTableData(DRAGON_BONES_KEY, result.data.dragonBones));
    yield put(setTotalTableDataCount(DRAGON_BONES_KEY, result.data.count));
}

export function* watchGetDragonBonesSaga() {
    yield takeEvery(GET_DRAGON_BONES_SAGA, getDragonBonesSaga);
}
import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { DRAGON_BONES_API } from "../../utils/apiLinks";
import { DRAGON_BONES_KEY } from "../../utils/constants";
import { REMOVE_DRAGON_BONE_SAGA } from "../../utils/actionSagaConstants";
import { getAvailableCurrentPage } from "../../utils/methods";
import { getDragonBonesSaga } from "../../actions/dragonBonesSaga";
import { changeTablePage } from "../../actions/table";

export function* removeDragonBoneSaga(action) {
    const { id } = action;
    const dragonBones = yield select(state => state.table.dragonBones.list);
    const { page, limit } = yield select(state => state.table.dragonBones.pagination);
    const pageNumber = getAvailableCurrentPage(dragonBones.length - 1, page, limit);

    yield call(axios.delete, DRAGON_BONES_API + "/" + id);

    yield put(changeTablePage(DRAGON_BONES_KEY, pageNumber));
    yield put(getDragonBonesSaga());
}

export function* watchRemoveDragonBoneSaga() {
    yield takeEvery(REMOVE_DRAGON_BONE_SAGA, removeDragonBoneSaga);
}
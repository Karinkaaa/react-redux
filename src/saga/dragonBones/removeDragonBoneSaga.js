import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { REMOVE_DRAGON_BONE_SAGA } from "../../utils/actionSagaConstants";
import { DRAGON_BONES_API } from "../../utils/apiLinks";
import { getAvailableCurrentPage } from "../../utils/methods";
import { changeDragonBonesPage, getDragonBonesSaga } from "../../actions/dragonBonesResourceComponent";

export function* removeDragonBoneSaga(action) {
    const { id } = action;
    const dragonBones = yield select(state => state.dragonBones.dragonBonesList);
    const { page, limit } = yield select(state => state.dragonBones.pagination);
    const pageNumber = getAvailableCurrentPage(dragonBones.length - 1, page, limit);

    yield call(axios.delete, DRAGON_BONES_API + "/" + id);

    yield put(changeDragonBonesPage(pageNumber));
    yield put(getDragonBonesSaga());
}

export function* watchRemoveDragonBoneSaga() {
    yield takeEvery(REMOVE_DRAGON_BONE_SAGA, removeDragonBoneSaga);
}
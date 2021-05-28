import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { SAVE_DRAGON_BONE_SAGA } from "../../utils/actionConstants";
import { DRAGON_BONES_API } from "../../utils/apiLinks";
import { getDragonBonesSaga } from "../../actions/dragonBonesResourceComponent";

export function* saveDragonBoneSaga(action) {
    const { dragonBone } = action;

    yield call(axios.post, DRAGON_BONES_API, { dragonBone });
    yield put(getDragonBonesSaga());
}

export function* watchSaveDragonBoneSaga() {
    yield takeEvery(SAVE_DRAGON_BONE_SAGA, saveDragonBoneSaga);
}
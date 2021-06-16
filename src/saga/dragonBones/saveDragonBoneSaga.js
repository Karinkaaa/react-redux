import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { DRAGON_BONES_API } from "../../utils/apiLinks";
import { SAVE_DRAGON_BONE_SAGA } from "../../utils/actionSagaConstants";
import { getDragonBonesSaga } from "../../actions/dragonBonesSaga";

export function* saveDragonBoneSaga(action) {
    const { dragonBone } = action;

    yield call(axios.post, DRAGON_BONES_API, { dragonBone });
    yield put(getDragonBonesSaga());
}

export function* watchSaveDragonBoneSaga() {
    yield takeEvery(SAVE_DRAGON_BONE_SAGA, saveDragonBoneSaga);
}
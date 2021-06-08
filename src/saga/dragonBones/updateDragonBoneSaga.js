import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { UPDATE_DRAGON_BONE_SAGA } from "../../utils/actionSagaConstants";
import { DRAGON_BONES_API } from "../../utils/apiLinks";
import { getDragonBonesSaga } from "../../actions/dragonBonesSaga";

export function* updateDragonBoneSaga(action) {
    const { id, dragonBone } = action;

    yield call(axios.put, DRAGON_BONES_API + "/" + id, { dragonBone });
    yield put(getDragonBonesSaga());
}

export function* watchUpdateDragonBoneSaga() {
    yield takeEvery(UPDATE_DRAGON_BONE_SAGA, updateDragonBoneSaga);
}
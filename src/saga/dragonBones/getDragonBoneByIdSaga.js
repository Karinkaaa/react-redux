import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { GET_DRAGON_BONE_BY_ID_SAGA } from "../../utils/actionConstants";
import { DRAGON_BONES_API } from "../../utils/apiLinks";
import { isOpenDragonBoneModal, setDragonBoneForm } from "../../actions/dragonBonesResourceForm";

export function* getDragonBoneByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, DRAGON_BONES_API + "/" + id);

    yield put(isOpenDragonBoneModal(true));
    yield put(setDragonBoneForm(result.data.dragonBone));
}

export function* watchGetDragonBoneByIdSaga() {
    yield takeEvery(GET_DRAGON_BONE_BY_ID_SAGA, getDragonBoneByIdSaga);
}
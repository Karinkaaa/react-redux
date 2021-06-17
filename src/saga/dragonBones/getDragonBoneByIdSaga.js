import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { DRAGON_BONES_API } from "../../utils/apiLinks";
import { DRAGON_BONES_KEY } from "../../utils/constants";
import { GET_DRAGON_BONE_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { setFormData } from "../../actions/form";

export function* getDragonBoneByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, DRAGON_BONES_API + "/" + id);

    yield put(setFormData(DRAGON_BONES_KEY, result.data.dragonBone));
}

export function* watchGetDragonBoneByIdSaga() {
    yield takeEvery(GET_DRAGON_BONE_BY_ID_SAGA, getDragonBoneByIdSaga);
}
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { setDropdown } from "../../actions/dictionary";
import { DROPDOWNS_API } from "../../utils/apiLinks";
import { GET_DROPDOWN_SAGA } from "../../utils/actionConstants";

export function* getDropdownSaga(action) {
    const { key } = action;
    const result = yield call(axios.get, DROPDOWNS_API, { params: { key } });

    yield put(setDropdown(key, result.data));
}

export function* watchGetDropdownSaga() {
    yield takeEvery(GET_DROPDOWN_SAGA, getDropdownSaga);
}
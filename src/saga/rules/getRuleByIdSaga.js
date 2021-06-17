import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { RULES_API } from "../../utils/apiLinks";
import { RULES_KEY } from "../../utils/constants";
import { GET_RULE_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { setFormData } from "../../actions/form";

export function* getRuleByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, RULES_API + "/" + id);

    yield put(setFormData(RULES_KEY, result.data.rule));
}

export function* watchGetRuleByIdSaga() {
    yield takeEvery(GET_RULE_BY_ID_SAGA, getRuleByIdSaga);
}
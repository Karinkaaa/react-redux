import *  as axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { UPDATE_RULE_SAGA } from "../../utils/actionConstants";
import { RULES_API } from "../../utils/apiLinks";
import { getRulesSaga } from "../../actions/ruleComponent";

export function* updateRuleSaga(action) {
    const { id, rule } = action;

    yield call(axios.put, RULES_API + "/" + id, { rule });
    yield put(getRulesSaga());
}

export function* watchUpdateRuleSaga() {
    yield takeEvery(UPDATE_RULE_SAGA, updateRuleSaga);
}
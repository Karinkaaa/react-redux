import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { RULES_API } from "../../utils/apiLinks";
import { UPDATE_RULE_SAGA } from "../../utils/actionSagaConstants";
import { getRulesSaga } from "../../actions/rulesSaga";

export function* updateRuleSaga(action) {
    const { id, rule } = action;

    yield call(axios.put, RULES_API + "/" + id, { rule });
    yield put(getRulesSaga());
}

export function* watchUpdateRuleSaga() {
    yield takeEvery(UPDATE_RULE_SAGA, updateRuleSaga);
}
import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { RULES_API } from "../../utils/apiLinks";
import { SAVE_RULE_SAGA } from "../../utils/actionSagaConstants";
import { getRulesSaga } from "../../actions/rulesSaga";

export function* saveRuleSaga(action) {
    const { rule } = action;

    yield call(axios.post, RULES_API, { rule });
    yield put(getRulesSaga());
}

export function* watchSaveRuleSaga() {
    yield takeEvery(SAVE_RULE_SAGA, saveRuleSaga);
}
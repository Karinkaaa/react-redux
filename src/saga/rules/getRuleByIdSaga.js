import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { RULES_API } from "../../utils/apiLinks";
import { GET_RULE_BY_ID_SAGA } from "../../utils/actionSagaConstants";
import { isOpenRuleModal, setRuleForm } from "../../actions/ruleForm";

export function* getRuleByIdSaga(action) {
    const { id } = action;
    const result = yield call(axios.get, RULES_API + "/" + id);

    yield put(isOpenRuleModal(true));
    yield put(setRuleForm(result.data.rule));
}

export function* watchGetRuleByIdSaga() {
    yield takeEvery(GET_RULE_BY_ID_SAGA, getRuleByIdSaga);
}
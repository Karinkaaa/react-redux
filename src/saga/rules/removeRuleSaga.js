import *  as axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { REMOVE_RULE_SAGA } from "../../utils/actionConstants";
import { RULES_API } from "../../utils/apiLinks";
import { getAvailableCurrentPage } from "../../utils/methods";
import { changeRulePage, getRulesSaga } from "../../actions/ruleComponent";

export function* removeRuleSaga(action) {
    const { id } = action;
    const rules = yield select(state => state.rules.ruleList);
    const { page, limit } = yield select(state => state.rules.pagination);
    const pageNumber = getAvailableCurrentPage(rules.length - 1, page, limit);

    yield call(axios.delete, RULES_API + "/" + id);

    yield put(changeRulePage(pageNumber));
    yield put(getRulesSaga());
}

export function* watchRemoveRuleSaga() {
    yield takeEvery(REMOVE_RULE_SAGA, removeRuleSaga);
}
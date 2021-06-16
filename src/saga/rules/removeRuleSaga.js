import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { RULES_API } from "../../utils/apiLinks";
import { RULES_KEY } from "../../utils/constants";
import { REMOVE_RULE_SAGA } from "../../utils/actionSagaConstants";
import { getAvailableCurrentPage } from "../../utils/methods";
import { getRulesSaga } from "../../actions/rulesSaga";
import { changeTablePage } from "../../actions/table";

export function* removeRuleSaga(action) {
    const { id } = action;
    const rules = yield select(state => state.table.rules.list);
    const { page, limit } = yield select(state => state.table.rules.pagination);
    const pageNumber = getAvailableCurrentPage(rules.length - 1, page, limit);

    yield call(axios.delete, RULES_API + "/" + id);

    yield put(changeTablePage(RULES_KEY, pageNumber));
    yield put(getRulesSaga());
}

export function* watchRemoveRuleSaga() {
    yield takeEvery(REMOVE_RULE_SAGA, removeRuleSaga);
}
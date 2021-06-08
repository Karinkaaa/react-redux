import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { GET_RULES_SAGA } from "../../utils/actionSagaConstants";
import { RULES_API } from "../../utils/apiLinks";
import { setTableData, setTotalTableDataCount } from "../../actions/table";

export function* getRulesSaga() {
    const pagination = yield select(state => state.table.rules.pagination);
    const sorting = yield select(state => state.table.rules.sorting);
    const filters = yield select(state => state.table.rules.filters);

    const result = yield call(axios.get, RULES_API, {
        params: {
            pagination,
            sorting,
            filters
        }
    });

    yield put(setTableData("rules", result.data.rules));
    yield put(setTotalTableDataCount("rules", result.data.count));
}

export function* watchGetRulesSaga() {
    yield takeEvery(GET_RULES_SAGA, getRulesSaga);
}
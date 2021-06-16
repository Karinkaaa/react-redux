import axios from "axios";
import { call, put, select, takeEvery } from "redux-saga/effects";
import { RULES_API } from "../../utils/apiLinks";
import { RULES_KEY } from "../../utils/constants";
import { GET_RULES_SAGA } from "../../utils/actionSagaConstants";
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

    yield put(setTableData(RULES_KEY, result.data.rules));
    yield put(setTotalTableDataCount(RULES_KEY, result.data.count));
}

export function* watchGetRulesSaga() {
    yield takeEvery(GET_RULES_SAGA, getRulesSaga);
}
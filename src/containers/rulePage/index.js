import { connect } from "react-redux";
import Rules from "../../pages/rules";
import { clearRuleForm, isOpenRuleModal } from "../../actions/ruleForm";
import { getRuleByIdSaga, getRulesSaga, removeRuleSaga } from "../../actions/rulesSaga";
import { RULES_KEY } from "../../utils/constants";
import {
    changeDataView,
    changeTableFilters,
    changeTableLimit,
    changeTablePage,
    changeTableSort
} from "../../actions/table";

const mapStateToProps = (state) => {
    return {
        rules: state.table.rules.list,
        count: state.table.rules.count,
        view: state.table.rules.view,
        pagination: state.table.rules.pagination,
        sorting: state.table.rules.sorting,
        filters: state.table.rules.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRules: () => dispatch(getRulesSaga()),
        removeRule: (id) => dispatch(removeRuleSaga(id)),
        onPutDataToForm: (id) => dispatch(getRuleByIdSaga(id)),
        onChangePage: (page) => dispatch(changeTablePage(RULES_KEY, page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit(RULES_KEY, limit)),
        onChangeSort: (field) => dispatch(changeTableSort(RULES_KEY, field)),
        onChangeView: (view) => dispatch(changeDataView(RULES_KEY, view)),
        onChangeFilters: (filters) => dispatch(changeTableFilters(RULES_KEY, filters)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearRuleForm());
            dispatch(isOpenRuleModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rules);
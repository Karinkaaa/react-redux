import { connect } from "react-redux";
import Rules from "../../pages/rules";
import { clearRuleForm, isOpenRuleModal } from "../../actions/ruleForm";
import { getRuleByIdSaga, getRulesSaga, removeRuleSaga } from "../../actions/rulesSaga";
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
        onPutData: (id) => dispatch(getRuleByIdSaga(id)),
        onChangePage: (page) => dispatch(changeTablePage("rules", page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit("rules", limit)),
        onChangeSort: (field) => dispatch(changeTableSort("rules", field)),
        onChangeView: (view) => dispatch(changeDataView("rules", view)),
        onChangeFilters: (filters) => dispatch(changeTableFilters("rules", filters)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearRuleForm());
            dispatch(isOpenRuleModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rules);
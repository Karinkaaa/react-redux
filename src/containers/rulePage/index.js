import { connect } from "react-redux";
import Rules from "../../pages/rules";
import { clearRuleForm, isOpenRuleModal } from "../../actions/ruleForm";
import {
    changeRuleFilterValue,
    changeRuleLimit,
    changeRulePage,
    changeRuleSort,
    changeRuleView,
    getRuleByIdSaga,
    getRulesSaga,
    removeRuleSaga
} from "../../actions/ruleComponent";

const mapStateToProps = (state) => {
    return {
        rules: state.rules.ruleList,
        count: state.rules.count,
        view: state.rules.view,
        pagination: state.rules.pagination,
        sorting: state.rules.sorting,
        filters: state.rules.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRules: () => dispatch(getRulesSaga()),
        removeRule: (id) => dispatch(removeRuleSaga(id)),
        onPutData: (id) => dispatch(getRuleByIdSaga(id)),
        onChangePage: (page) => dispatch(changeRulePage(page)),
        onChangeLimit: (limit) => dispatch(changeRuleLimit(limit)),
        onChangeSort: (field) => dispatch(changeRuleSort(field)),
        onChangeView: (view) => dispatch(changeRuleView(view)),
        onChangeFilterValue: (props) => dispatch(changeRuleFilterValue(props)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearRuleForm());
            dispatch(isOpenRuleModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rules);
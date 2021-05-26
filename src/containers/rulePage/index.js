import { connect } from "react-redux";
import { filteringSortingPagingOfArray } from "../../utils/methods";
import { clearRuleForm, isOpenRuleModal, putRuleToForm } from "../../actions/ruleForm";
import Rules from "../../pages/rules";
import {
    changeRuleFilterValue,
    changeRuleLimit,
    changeRulePage,
    changeRuleSort,
    changeRuleView,
    deleteRule
} from "../../actions/ruleComponent";

const mapStateToProps = (state) => {
    const { data: rules, count } = filteringSortingPagingOfArray(state.rules.ruleList,
        {
            pagination: state.rules.pagination,
            sorting: state.rules.sorting,
            filters: state.rules.filters
        }
    );

    return {
        count,
        rules,
        view: state.rules.view,
        pagination: state.rules.pagination,
        sorting: state.rules.sorting,
        filters: state.rules.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteRule(id)),
        onChangePage: (page) => dispatch(changeRulePage(page)),
        onChangeLimit: (limit) => dispatch(changeRuleLimit(limit)),
        onChangeSort: (field) => dispatch(changeRuleSort(field)),
        onChangeView: (view) => dispatch(changeRuleView(view)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearRuleForm());
            dispatch(isOpenRuleModal(isOpen))
        },
        onChangeFilterValue: (props) => dispatch(changeRuleFilterValue(props)),
        onClickPutRuleToForm: (props) => dispatch(putRuleToForm(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rules);
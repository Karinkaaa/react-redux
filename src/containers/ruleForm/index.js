import { connect } from "react-redux";
import RuleForm from "../../components/ruleForm";
import {
    isOpenRuleModal,
    saveRuleSaga,
    updateRuleCondition,
    updateRuleCost,
    updateRuleName,
    updateRuleSaga
} from "../../actions/ruleForm";

const mapStateToProps = (state) => {
    return {
        id: state.ruleForm.id,
        name: state.ruleForm.name,
        isValidName: state.ruleForm.isValidName,
        cost: state.ruleForm.cost,
        isValidCost: state.ruleForm.isValidCost,
        conditions: state.ruleForm.conditions,
        isOpen: state.ruleForm.isOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveRule: (rule) => dispatch(saveRuleSaga(rule)),
        updateRule: (id, rule) => dispatch(updateRuleSaga(id, rule)),
        onChangeName: (name) => dispatch(updateRuleName(name)),
        onChangeCost: (cost) => dispatch(updateRuleCost(cost)),
        onChangeCondition: (condition) => dispatch(updateRuleCondition(condition)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenRuleModal(isOpen))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleForm);
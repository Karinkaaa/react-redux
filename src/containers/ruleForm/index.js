import { connect } from "react-redux";
import RuleForm from "../../components/ruleForm";
import { addRule, updateRule } from "../../actions/ruleComponent";
import { isOpenRuleModal, updateRuleCondition, updateRuleCost, updateRuleName } from "../../actions/ruleForm";

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
        onChangeName: (name) => dispatch(updateRuleName(name)),
        onChangeCost: (cost) => dispatch(updateRuleCost(cost)),
        onChangeCondition: (condition) => dispatch(updateRuleCondition(condition)),
        onSave: (props) => dispatch(addRule(props)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenRuleModal(isOpen)),
        onUpdate: (props) => dispatch(updateRule(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleForm);
import { connect } from "react-redux";
import CreateRuleForm from "../../components/createRuleForm";
import { addRule, updateRule } from "../../actions/ruleComponent";
import {
    updateRuleCondition,
    isOpenRuleModal,
    updateRuleCost,
    updateRuleName
} from "../../actions/createRuleForm";

const mapStateToProps = (state) => {
    return {
        id: state.createRuleForm.id,
        name: state.createRuleForm.name,
        isValidName: state.createRuleForm.isValidName,
        cost: state.createRuleForm.cost,
        isValidCost: state.createRuleForm.isValidCost,
        conditions: state.createRuleForm.conditions,
        isOpen: state.createRuleForm.isOpen
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateRuleForm);
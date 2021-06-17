import { connect } from "react-redux";
import RuleForm from "../../components/ruleForm";
import { getRuleByIdSaga, saveRuleSaga, updateRuleSaga } from "../../actions/rulesSaga";
import { changeFormData } from "../../actions/form";
import { RULES_KEY } from "../../utils/constants";

const mapStateToProps = (state) => {
    return {
        id: state.form.rules.id,
        name: state.form.rules.name,
        cost: state.form.rules.cost,
        conditions: state.form.rules.conditions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveRule: (rule) => dispatch(saveRuleSaga(rule)),
        onUpdateRule: (id, rule) => dispatch(updateRuleSaga(id, rule)),
        onPutDataToForm: (id) => dispatch(getRuleByIdSaga(id)),
        onChangeFormData: (key, value) => dispatch(changeFormData(RULES_KEY, key, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RuleForm);
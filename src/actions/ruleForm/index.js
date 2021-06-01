import {
    CLEAR_RULE_FORM,
    OPEN_OR_CLOSE_RULE_MODAL,
    SAVE_RULE_SAGA,
    SET_RULE_FORM,
    UPDATE_RULE_CONDITION,
    UPDATE_RULE_COST,
    UPDATE_RULE_NAME,
    UPDATE_RULE_SAGA
} from "../../utils/actionConstants";

export const setRuleForm = (rule) => ({
    type: SET_RULE_FORM,
    rule
});

export const updateRuleName = (name) => ({
    type: UPDATE_RULE_NAME,
    name
});

export const updateRuleCost = (cost) => ({
    type: UPDATE_RULE_COST,
    cost
});

export const updateRuleCondition = (condition) => ({
    type: UPDATE_RULE_CONDITION,
    condition
});

export const isOpenRuleModal = (isOpen) => ({
    type: OPEN_OR_CLOSE_RULE_MODAL,
    isOpen
});

export const clearRuleForm = () => ({
    type: CLEAR_RULE_FORM
});

// saga
export const saveRuleSaga = (rule) => ({
    type: SAVE_RULE_SAGA,
    rule
});

export const updateRuleSaga = (id, rule) => ({
    type: UPDATE_RULE_SAGA,
    id,
    rule
});
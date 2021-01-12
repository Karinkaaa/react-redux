import {
    IS_OPEN_RULE_MODAL,
    PUT_RULE_TO_FORM,
    UPDATE_RULE_CONDITION,
    UPDATE_RULE_COST,
    UPDATE_RULE_NAME
} from "../../utils/actionConstants";

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
    type: IS_OPEN_RULE_MODAL,
    isOpen
});

export const putRuleToForm = ({ id, name, cost, conditions }) => ({
    type: PUT_RULE_TO_FORM,
    id,
    name,
    cost,
    conditions
});
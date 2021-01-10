import {
    ADD_RULE,
    CHANGE_RULE_FILTER_VALUE,
    CHANGE_RULE_LIMIT,
    CHANGE_RULE_PAGE,
    CHANGE_RULE_SORT,
    CHANGE_RULE_VIEW,
    DELETE_RULE,
    UPDATE_RULE
} from "../../utils/actionConstants";

export const addRule = ({ id, name, cost, conditions }) => ({
    type: ADD_RULE,
    id,
    name,
    cost,
    conditions
});

export const deleteRule = ({ id }) => ({
    type: DELETE_RULE,
    id
});

export const updateRule = ({ id, name, cost, conditions }) => ({
    type: UPDATE_RULE,
    id,
    name,
    cost,
    conditions
});

export const changeRuleView = (view) => ({
    type: CHANGE_RULE_VIEW,
    view
});

export const changeRulePage = (page) => ({
    type: CHANGE_RULE_PAGE,
    page
});

export const changeRuleLimit = (limit) => ({
    type: CHANGE_RULE_LIMIT,
    limit
});

export const changeRuleSort = (field) => ({
    type: CHANGE_RULE_SORT,
    field
});

export const changeRuleFilterValue = ({ filterKey, filterValue }) => ({
    type: CHANGE_RULE_FILTER_VALUE,
    filterKey,
    filterValue
});
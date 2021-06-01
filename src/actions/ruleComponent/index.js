import {
    CHANGE_RULE_FILTER_VALUE,
    CHANGE_RULE_LIMIT,
    CHANGE_RULE_PAGE,
    CHANGE_RULE_SORT,
    CHANGE_RULE_VIEW,
    GET_RULE_BY_ID_SAGA,
    GET_RULES_SAGA,
    REMOVE_RULE_SAGA,
    SET_RULES,
    SET_TOTAL_RULES_COUNT
} from "../../utils/actionConstants";

export const setRules = (rules) => ({
    type: SET_RULES,
    rules
});

export const setTotalRulesCount = (count) => ({
    type: SET_TOTAL_RULES_COUNT,
    count
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

// saga
export const getRulesSaga = () => ({
    type: GET_RULES_SAGA
});

export const getRuleByIdSaga = (id) => ({
    type: GET_RULE_BY_ID_SAGA,
    id
});

export const removeRuleSaga = ({ id }) => ({
    type: REMOVE_RULE_SAGA,
    id
});
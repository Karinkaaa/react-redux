import {
    GET_RULE_BY_ID_SAGA,
    GET_RULES_SAGA,
    REMOVE_RULE_SAGA,
    SAVE_RULE_SAGA,
    UPDATE_RULE_SAGA
} from "../../utils/actionSagaConstants";

// form
export const saveRuleSaga = (rule) => ({
    type: SAVE_RULE_SAGA,
    rule
});

export const updateRuleSaga = (id, rule) => ({
    type: UPDATE_RULE_SAGA,
    id,
    rule
});

// table
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
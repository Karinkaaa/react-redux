import { GET_RULE_BY_ID_SAGA, GET_RULES_SAGA, REMOVE_RULE_SAGA } from "../../utils/actionSagaConstants";

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
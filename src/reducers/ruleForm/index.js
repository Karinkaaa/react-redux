import { isValidCost, isValidName } from "../../utils/validation";
import { getIndexOfCondition, isExistCondition, removeItemByIndex } from "../../utils/methods";
import {
    CLEAR_RULE_FORM,
    OPEN_OR_CLOSE_RULE_MODAL,
    SET_RULE_FORM,
    UPDATE_RULE_CONDITION,
    UPDATE_RULE_COST,
    UPDATE_RULE_NAME
} from "../../utils/actionConstants";

const initialState = {
    id: "",
    name: "",
    isValidName: false,
    conditions: [],
    cost: 0,
    isValidCost: false,
    isOpen: false
};

const RuleForm = (state = initialState, action) => {
    switch (action.type) {
        case SET_RULE_FORM: {
            const { rule } = action;

            return {
                ...state,
                ...rule,
                isValidName: isValidName(rule.name),
                isValidCost: isValidCost(rule.cost)
            };
        }
        case OPEN_OR_CLOSE_RULE_MODAL: {
            return {
                ...state,
                isOpen: action.isOpen
            };
        }
        case UPDATE_RULE_NAME: {
            const { name } = action;

            return {
                ...state,
                name,
                isValidName: isValidName(name)
            };
        }
        case UPDATE_RULE_COST: {
            const { cost } = action;

            return {
                ...state,
                cost: parseInt(cost),
                isValidCost: isValidCost(cost)
            };
        }
        case UPDATE_RULE_CONDITION: {
            const { conditions } = state;
            const { condition } = action;

            const isExistsCurrentCondition = isExistCondition(conditions, condition);
            let newConditions = [...conditions];

            if (isExistsCurrentCondition) {
                const index = getIndexOfCondition(conditions, condition);
                newConditions = removeItemByIndex(conditions, index);
            } else {
                newConditions = [...conditions, condition];
            }

            return {
                ...state,
                conditions: newConditions
            };
        }
        case CLEAR_RULE_FORM: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
};

export default RuleForm;
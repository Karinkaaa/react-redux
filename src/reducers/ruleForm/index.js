import { isValidCost, isValidName } from "../../utils/validation";
import { getIndexOfCondition, isExistCondition, removeItemByIndex } from "../../utils/methods";
import {
    IS_OPEN_RULE_MODAL,
    PUT_RULE_TO_FORM,
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

export default (state = initialState, action) => {
    switch (action.type) {
        case IS_OPEN_RULE_MODAL: {
            const { isOpen } = action;

            return {
                ...state,
                id: "",
                name: "",
                isValidName: false,
                cost: 0,
                isValidCost: false,
                conditions: [],
                isOpen: isOpen
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
        case PUT_RULE_TO_FORM: {
            const { id, name, cost, conditions } = action;

            return {
                ...state,
                id,
                name,
                isValidName: isValidName(name),
                cost,
                isValidCost: isValidCost(cost),
                conditions
            };
        }
        default:
            return state;
    }
}
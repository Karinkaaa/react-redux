import { isValidCost, isValidName } from "../../utils/validation";
import {
    IS_OPEN_RULE_MODAL,
    PUT_RULE_TO_FORM,
    UPDATE_RULE_CONDITION,
    UPDATE_RULE_COST,
    UPDATE_RULE_NAME
} from "../../utils/actionConstants";
import { isExistCondition, removeItemById, removeItemByIndex, saveItemTo } from "../../utils/methods";

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
                cost: "",
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
                cost,
                isValidCost: isValidCost(cost)
            };
        }
        case UPDATE_RULE_CONDITION: {
            const { conditions } = state;
            const { condition } = action;

            console.log("action.condition = ", condition);

            const isExistsCurrentCondition = isExistCondition(conditions, condition);
            console.log("isExistsCurrentCondition = ", isExistsCurrentCondition);

            let newConditions = [...conditions];

            if (isExistsCurrentCondition) {

                newConditions = removeItemByIndex(conditions, condition.id);
                console.log("AFTER REMOVE newConditions = ", newConditions);

            } else {
                newConditions = [...conditions, condition];
                console.log("AFTER ADD newConditions = ", newConditions);

            }

            return {
                ...state,
                conditions: newConditions,
                // isActiveConditions: newIsActiveConditions
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
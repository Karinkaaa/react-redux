import uuid from "react-uuid";
import { TABLE } from "../../utils/constants";
import { getAvailableCurrentPage, removeItemById, saveItemTo } from "../../utils/methods";
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

const initialState = {
    ruleList: [
        {
            id: "1",
            name: "One after one",
            cost: 10,
            conditions: [
                {
                    x: 0,
                    y: 1
                },
                {
                    x: 2,
                    y: 1
                },
                {
                    x: 4,
                    y: 1
                }
            ]
        },
        {
            id: "2",
            name: "Five in a row",
            cost: 15,
            conditions: [
                {
                    x: 0,
                    y: 1
                },
                {
                    x: 1,
                    y: 1
                },
                {
                    x: 2,
                    y: 1
                },
                {
                    x: 3,
                    y: 1
                },
                {
                    x: 4,
                    y: 1
                }
            ]
        }
    ],
    view: TABLE,
    pagination: {
        page: 0,
        limit: 4
    },
    sorting: {
        field: "",
        direction: "desc"
    },
    filters: {}
};

const RulePage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RULE: {
            const { ruleList } = state;
            const { name, cost, conditions } = action;

            return {
                ...state,
                ruleList: saveItemTo(ruleList, {
                    id: uuid(),
                    name,
                    cost,
                    conditions
                })
            };
        }
        case UPDATE_RULE: {
            const { ruleList } = state;
            const { id, name, cost, conditions } = action;

            return {
                ...state,
                ruleList: saveItemTo(ruleList, { id, name, cost, conditions })
            };
        }
        case DELETE_RULE: {
            const { ruleList, pagination } = state;
            const { page, limit } = pagination;
            const { id } = action;

            const result = removeItemById(ruleList, id);
            const pageNumber = getAvailableCurrentPage(result, page, limit);

            return {
                ...state,
                ruleList: result,
                pagination: {
                    ...pagination,
                    page: pageNumber
                }
            };
        }
        case CHANGE_RULE_VIEW: {
            return {
                ...state,
                view: action.view
            };
        }
        case CHANGE_RULE_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            };
        }
        case CHANGE_RULE_LIMIT: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    limit: action.limit
                }
            };
        }
        case CHANGE_RULE_SORT: {
            return {
                ...state,
                sorting: {
                    ...state.sorting,
                    field: action.field,
                    direction: (state.sorting.direction === "asc") ? "desc" : "asc"
                }
            };
        }
        case CHANGE_RULE_FILTER_VALUE: {
            const { filterKey, filterValue } = action;

            if (filterValue !== null) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [filterKey]: filterValue
                    }
                };
            }

            return state;
        }
        default:
            return state;
    }
};

export default RulePage;
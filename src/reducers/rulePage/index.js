import { TABLE } from "../../utils/constants";
import {
    CHANGE_RULE_FILTER_VALUE,
    CHANGE_RULE_LIMIT,
    CHANGE_RULE_PAGE,
    CHANGE_RULE_SORT,
    CHANGE_RULE_VIEW,
    SET_RULES,
    SET_TOTAL_RULES_COUNT
} from "../../utils/actionConstants";

const initialState = {
    ruleList: [],
    view: TABLE,
    count: 0, // total records of db
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
        case SET_RULES: {
            return {
                ...state,
                ruleList: action.rules
            };
        }
        case SET_TOTAL_RULES_COUNT: {
            return {
                ...state,
                count: action.count
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
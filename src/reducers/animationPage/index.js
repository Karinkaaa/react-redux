import { TABLE } from "../../utils/constants";
import {
    CHANGE_ANIMATION_FILTER_VALUE,
    CHANGE_ANIMATION_LIMIT,
    CHANGE_ANIMATION_PAGE,
    CHANGE_ANIMATION_SORT,
    CHANGE_ANIMATION_VIEW,
    SET_ANIMATIONS,
    SET_TOTAL_ANIMATIONS_COUNT
} from "../../utils/actionConstants";

const initialState = {
    animationList: [],
    count: 0, // total records of db
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

const AnimationPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANIMATIONS: {
            return {
                ...state,
                animationList: action.animations
            };
        }
        case SET_TOTAL_ANIMATIONS_COUNT: {
            return {
                ...state,
                count: action.count
            };
        }
        case CHANGE_ANIMATION_VIEW: {
            return {
                ...state,
                view: action.view
            };
        }
        case CHANGE_ANIMATION_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            };
        }
        case CHANGE_ANIMATION_LIMIT: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    limit: action.limit
                }
            };
        }
        case CHANGE_ANIMATION_SORT: {
            return {
                ...state,
                sorting: {
                    ...state.sorting,
                    field: action.field,
                    direction: (state.sorting.direction === "asc") ? "desc" : "asc"
                }
            };
        }
        case CHANGE_ANIMATION_FILTER_VALUE: {
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

export default AnimationPage;
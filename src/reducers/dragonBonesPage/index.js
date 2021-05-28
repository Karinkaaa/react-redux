import { TABLE } from "../../utils/constants";
import {
    CHANGE_DRAGON_BONES_FILTER_VALUE,
    CHANGE_DRAGON_BONES_LIMIT,
    CHANGE_DRAGON_BONES_PAGE,
    CHANGE_DRAGON_BONES_SORT,
    CHANGE_DRAGON_BONES_VIEW,
    SET_DRAGON_BONES,
    SET_TOTAL_DRAGON_BONES_COUNT
} from "../../utils/actionConstants";

const initialState = {
    dragonBonesList: [],
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

const DragonBonesPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_DRAGON_BONES: {
            return {
                ...state,
                dragonBonesList: action.dragonBones
            };
        }
        case SET_TOTAL_DRAGON_BONES_COUNT: {
            return {
                ...state,
                count: action.count
            };
        }
        case CHANGE_DRAGON_BONES_VIEW: {
            return {
                ...state,
                view: action.view
            };
        }
        case CHANGE_DRAGON_BONES_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            };
        }
        case CHANGE_DRAGON_BONES_LIMIT: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    limit: action.limit
                }
            };
        }
        case CHANGE_DRAGON_BONES_SORT: {
            return {
                ...state,
                sorting: {
                    ...state.sorting,
                    field: action.field,
                    direction: (state.sorting.direction === "asc") ? "desc" : "asc"
                }
            };
        }
        case CHANGE_DRAGON_BONES_FILTER_VALUE: {
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

export default DragonBonesPage;
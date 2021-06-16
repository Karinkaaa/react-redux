import {
    ANIMATIONS_KEY,
    ASCENDING_SORT,
    AUDIOS_KEY,
    DESCENDING_SORT,
    DRAGON_BONES_KEY,
    IMAGES_KEY,
    LAYERS_KEY,
    MOVIES_KEY,
    RULES_KEY,
    TABLE
} from "../../utils/constants";
import {
    CHANGE_DATA_VIEW,
    CHANGE_TABLE_FILTERS,
    CHANGE_TABLE_LIMIT,
    CHANGE_TABLE_PAGE,
    CHANGE_TABLE_SORT,
    SET_TABLE_DATA,
    SET_TOTAL_TABLE_DATA_COUNT
} from "../../utils/actionConstants";

const initialTable = {
    list: [],
    count: 0, // total records of db
    view: TABLE,
    pagination: {
        page: 0,
        limit: 4
    },
    sorting: {
        field: "",
        direction: DESCENDING_SORT
    },
    filters: {}
};

export const initialState = {
    [IMAGES_KEY]: { ...initialTable },
    [ANIMATIONS_KEY]: { ...initialTable },
    [DRAGON_BONES_KEY]: { ...initialTable },
    [AUDIOS_KEY]: { ...initialTable },
    [RULES_KEY]: { ...initialTable },
    [LAYERS_KEY]: { ...initialTable },
    [MOVIES_KEY]: { ...initialTable }
};

const ResourcePage = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE_DATA: {
            const { tableKey, list } = action;

            return {
                ...state,
                [tableKey]: {
                    ...state[tableKey],
                    list
                }
            };
        }
        case SET_TOTAL_TABLE_DATA_COUNT: {
            const { tableKey, count } = action;

            return {
                ...state,
                [tableKey]: {
                    ...state[tableKey],
                    count
                }
            };
        }
        case CHANGE_DATA_VIEW: {
            const { tableKey, view } = action;

            return {
                ...state,
                [tableKey]: {
                    ...state[tableKey],
                    view
                }
            };
        }
        case CHANGE_TABLE_PAGE: {
            const { tableKey, page } = action;

            return {
                ...state,
                [tableKey]: {
                    ...state[tableKey],
                    pagination: {
                        ...state[tableKey].pagination,
                        page
                    }
                }
            };
        }
        case CHANGE_TABLE_LIMIT: {
            const { tableKey, limit } = action;

            return {
                ...state,
                [tableKey]: {
                    ...state[tableKey],
                    pagination: {
                        page: 0,
                        limit
                    }
                }
            };
        }
        case CHANGE_TABLE_SORT: {
            const { tableKey, field } = action;

            return {
                ...state,
                [tableKey]: {
                    ...state[tableKey],
                    sorting: {
                        ...state[tableKey].sorting,
                        field,
                        direction: (state[tableKey].sorting.direction === ASCENDING_SORT) ? DESCENDING_SORT : ASCENDING_SORT
                    }
                }
            };
        }
        case CHANGE_TABLE_FILTERS: {
            const { tableKey, filters } = action;

            return {
                ...state,
                [tableKey]: {
                    ...state[tableKey],
                    filters
                }
            };
        }
        default:
            return state;
    }
};

export default ResourcePage;
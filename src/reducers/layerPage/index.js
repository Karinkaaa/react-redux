import {
    CHANGE_LAYER_FILTER_VALUE,
    CHANGE_LAYER_LIMIT,
    CHANGE_LAYER_PAGE,
    CHANGE_LAYER_SORT,
    SET_LAYERS,
    SET_TOTAL_LAYERS_COUNT
} from "../../utils/actionConstants";

const initialState = {
    layerList: [],
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

const LayerPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_LAYERS: {
            return {
                ...state,
                layerList: action.layers
            };
        }
        case SET_TOTAL_LAYERS_COUNT: {
            return {
                ...state,
                count: action.count
            };
        }
        case CHANGE_LAYER_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            };
        }
        case CHANGE_LAYER_LIMIT: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    limit: action.limit
                }
            };
        }
        case CHANGE_LAYER_SORT: {
            return {
                ...state,
                sorting: {
                    ...state.sorting,
                    field: action.field,
                    direction: (state.sorting.direction === "asc") ? "desc" : "asc"
                }
            };
        }
        case CHANGE_LAYER_FILTER_VALUE: {
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

export default LayerPage;
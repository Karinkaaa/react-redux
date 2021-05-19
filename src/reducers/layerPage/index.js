import uuid from "react-uuid";
import { getAvailableCurrentPage, removeItemById, saveItemTo } from "../../utils/methods";
import { isValidName } from "../../utils/validation";
import {
    ADD_LAYER,
    CHANGE_LAYER_FILTER_VALUE,
    CHANGE_LAYER_LIMIT,
    CHANGE_LAYER_PAGE,
    CHANGE_LAYER_SORT,
    DELETE_LAYER,
    UPDATE_LAYER
} from "../../utils/actionConstants";

const initialState = {
    layerList: [
        {
            id: "123",
            name: "Main Layer",
            isValidName: true,
            elements: [
                {
                    id: "1",
                    position: {
                        x: 200,
                        y: 300
                    },
                    size: {
                        width: 100,
                        height: 100
                    },
                    ref: "",
                    zIndex: 0
                },
                {
                    id: "2",
                    position: {
                        x: 400,
                        y: 500
                    },
                    size: {
                        width: 100,
                        height: 100
                    },
                    ref: "",
                    zIndex: 0
                }
            ]
        },
        {
            id: "1235",
            name: "Layer",
            isValidName: true,
            elements: [
                {
                    id: "6",
                    position: {
                        x: 200,
                        y: 300
                    },
                    size: {
                        width: 100,
                        height: 100
                    },
                    ref: "",
                    zIndex: 0
                },
                {
                    id: "8",
                    position: {
                        x: 400,
                        y: 500
                    },
                    size: {
                        width: 100,
                        height: 100
                    },
                    ref: "",
                    zIndex: 0
                }
            ]
        }
    ],
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
        case ADD_LAYER: {
            const { layerList } = state;
            const { name, elements } = action;

            return {
                ...state,
                layerList: saveItemTo(layerList, {
                    id: uuid(),
                    name,
                    isValidName: isValidName(name),
                    elements
                })
            };
        }
        case UPDATE_LAYER: {
            const { layerList } = state;
            const { id, name, elements } = action;

            return {
                ...state,
                layerList: saveItemTo(layerList, { id, name, elements })
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
        case DELETE_LAYER: {
            const { layerList, pagination } = state;
            const { page, limit } = pagination;
            const { id } = action;

            const result = removeItemById(layerList, id);
            const pageNumber = getAvailableCurrentPage(result.length, page, limit);

            return {
                ...state,
                layerList: result,
                pagination: {
                    ...pagination,
                    page: pageNumber
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
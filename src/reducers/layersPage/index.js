import uuid from "react-uuid";
import { getItemById, removeItemById, saveItemTo } from "../../utils/methods";
import { isValidName } from "../../utils/validation";
import {
    ADD_LAYER,
    CHANGE_LAYER_FILTER_VALUE,
    CHANGE_LAYER_LIMIT,
    CHANGE_LAYER_PAGE,
    CHANGE_LAYER_SORT,
    DELETE_LAYER_ELEMENT,
    DELETE_NESTED_LAYER_ELEMENT,
    DRAG_AND_DROP,
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
                    }
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
                    }
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
                    }
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
                    }
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

export default (state = initialState, action) => {
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
            const { layer } = action;

            return {
                ...state,
                layerList: saveItemTo(layerList, layer)
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
        case DELETE_LAYER_ELEMENT: {
            const { layerList } = state;
            const { id } = action;

            return {
                ...state,
                layerList: removeItemById(layerList, id)
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
        case DELETE_NESTED_LAYER_ELEMENT: {
            const { id, nestedId } = action;
            const { layerList } = state;

            const layerItem = getItemById(layerList, id);
            const elements = layerItem.elements.filter(element => element.id !== nestedId);

            return {
                ...state,
                layerList: saveItemTo(layerList, {
                    ...layerItem,
                    elements
                })
            };
        }
        case DRAG_AND_DROP: {
            const { id, result } = action;
            const { layerList } = state;
            const layerItem = getItemById(layerList, id);

            return {
                ...state,
                layerList: saveItemTo(layerList, {
                    ...layerItem,
                    elements: result
                })
            };
        }
        default:
            return state;
    }
}

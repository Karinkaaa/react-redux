import { TABLE } from "../../utils/constants";
import {
    CHANGE_IMAGE_FILTER_VALUE,
    CHANGE_IMAGE_LIMIT,
    CHANGE_IMAGE_PAGE,
    CHANGE_IMAGE_SORT,
    CHANGE_IMAGE_VIEW,
    SET_IMAGES,
    SET_TOTAL_IMAGES_COUNT
} from "../../utils/actionConstants";

const initialState = {
    imageList: [],
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

const ImagePage = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES: {
            return {
                ...state,
                imageList: action.images
            };
        }
        case SET_TOTAL_IMAGES_COUNT: {
            return {
                ...state,
                count: action.count
            };
        }
        case CHANGE_IMAGE_VIEW: {
            return {
                ...state,
                view: action.view
            };
        }
        case CHANGE_IMAGE_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            };
        }
        case CHANGE_IMAGE_LIMIT: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    limit: action.limit
                }
            };
        }
        case CHANGE_IMAGE_SORT: {
            return {
                ...state,
                sorting: {
                    ...state.sorting,
                    field: action.field,
                    direction: (state.sorting.direction === "asc") ? "desc" : "asc"
                }
            };
        }
        case CHANGE_IMAGE_FILTER_VALUE: {
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

export default ImagePage;
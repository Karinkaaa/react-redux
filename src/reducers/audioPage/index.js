import { TABLE } from "../../utils/constants";
import {
    CHANGE_AUDIO_FILTER_VALUE,
    CHANGE_AUDIO_LIMIT,
    CHANGE_AUDIO_PAGE,
    CHANGE_AUDIO_SORT,
    CHANGE_AUDIO_VIEW,
    SET_AUDIOS,
    SET_TOTAL_AUDIOS_COUNT
} from "../../utils/actionConstants";

const initialState = {
    playlist: [],
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

const AudioPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUDIOS: {
            return {
                ...state,
                playlist: action.audios
            };
        }
        case SET_TOTAL_AUDIOS_COUNT: {
            return {
                ...state,
                count: action.count
            };
        }
        case CHANGE_AUDIO_VIEW: {
            return {
                ...state,
                view: action.view
            };
        }
        case CHANGE_AUDIO_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            };
        }
        case CHANGE_AUDIO_LIMIT: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    limit: action.limit
                }
            };
        }
        case CHANGE_AUDIO_SORT: {
            return {
                ...state,
                sorting: {
                    ...state.sorting,
                    field: action.field,
                    direction: (state.sorting.direction === "asc") ? "desc" : "asc"
                }
            };
        }
        case CHANGE_AUDIO_FILTER_VALUE: {
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

export default AudioPage;
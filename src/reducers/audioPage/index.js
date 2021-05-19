import uuid from "react-uuid";
import { getAvailableCurrentPage, removeItemById, saveItemTo } from "../../utils/methods";
import { TABLE } from "../../utils/constants";
import {
    ADD_AUDIO_RESOURCE,
    CHANGE_AUDIO_FILTER_VALUE,
    CHANGE_AUDIO_LIMIT,
    CHANGE_AUDIO_PAGE,
    CHANGE_AUDIO_SORT,
    CHANGE_AUDIO_VIEW,
    DELETE_AUDIO_RESOURCE,
    UPDATE_AUDIO_RESOURCE
} from "../../utils/actionConstants";

const initialState = {
    playlist: [
        {
            id: "7",
            name: "Tuesday",
            url: "https://static.muzlo.cc/download/31095/Burak-Yeter-Danelle-Sandoval_-_Tuesday-TPaul-Sax-Remix.mp3"
        },
        {
            id: "6",
            name: "My Life Is Going On",
            url: "https://static.muzlo.cc/download/24036/Burak-Yeter-Cecilia-Krull_-_My-Life-Is-Going-On-Burak-Yeter-Remix.mp3"
        },
        {
            id: "8",
            name: "Gorit",
            url: "http://uzmuzon.net/files/zarubezhnye-pesni/dorofeeva-gorit-diflex-remix.mp3"
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

const AudioPage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUDIO_RESOURCE: {
            const { playlist } = state;
            const { name, url } = action;

            return {
                ...state,
                playlist: saveItemTo(playlist, {
                    id: uuid(),
                    name,
                    url
                })
            };
        }
        case UPDATE_AUDIO_RESOURCE: {
            const { playlist } = state;
            const { id, name, url } = action;

            return {
                ...state,
                playlist: saveItemTo(playlist, { id, name, url })
            };
        }
        case DELETE_AUDIO_RESOURCE: {
            const { playlist, pagination } = state;
            const { page, limit } = pagination;

            const result = removeItemById(playlist, action.id);
            const pageNumber = getAvailableCurrentPage(result.length, page, limit);

            return {
                ...state,
                playlist: result,
                pagination: {
                    ...pagination,
                    page: pageNumber
                }
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
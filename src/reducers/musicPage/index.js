import uuid from "react-uuid";
import { getAvailableCurrentPage, removeItemById, saveItemTo } from "../../utils/methods";
import { TABLE } from "../../utils/constants";
import {
    ADD_MUSIC_RESOURCE,
    CHANGE_MUSIC_FILTER_VALUE,
    CHANGE_MUSIC_LIMIT,
    CHANGE_MUSIC_PAGE,
    CHANGE_MUSIC_SORT,
    CHANGE_MUSIC_VIEW,
    DELETE_MUSIC_RESOURCE,
    UPDATE_MUSIC_RESOURCE
} from "../../utils/actionConstants";

const initialState = {
    playlist: [
        {
            id: "10",
            name: "My Life Is Going On",
            url: "https://static.muzlo.cc/download/31095/Burak-Yeter-Danelle-Sandoval_-_Tuesday-TPaul-Sax-Remix.mp3"
        },
        {
            id: "2",
            name: "Tuesday",
            url: "https://static.muzlo.cc/download/24036/Burak-Yeter-Cecilia-Krull_-_My-Life-Is-Going-On-Burak-Yeter-Remix.mp3"
        },
        {
            id: "4",
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

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD_MUSIC_RESOURCE: {
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
        case UPDATE_MUSIC_RESOURCE: {
            const { playlist } = state;
            const { id, name, url } = action;

            return {
                ...state,
                playlist: saveItemTo(playlist, { id, name, url })
            };
        }
        case DELETE_MUSIC_RESOURCE: {
            const { playlist, pagination } = state;
            const { page, limit } = pagination;

            const result = removeItemById(playlist, action.id);
            const pageNumber = getAvailableCurrentPage(result, page, limit);

            return {
                ...state,
                playlist: result,
                pagination: {
                    ...pagination,
                    page: pageNumber
                }
            };
        }
        case CHANGE_MUSIC_VIEW: {
            return {
                ...state,
                view: action.view
            };
        }
        case CHANGE_MUSIC_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            };
        }
        case CHANGE_MUSIC_LIMIT: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    limit: action.limit
                }
            };
        }
        case CHANGE_MUSIC_SORT: {
            return {
                ...state,
                sorting: {
                    ...state.sorting,
                    field: action.field,
                    direction: (state.sorting.direction === "asc") ? "desc" : "asc"
                }
            };
        }
        case CHANGE_MUSIC_FILTER_VALUE: {
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
}

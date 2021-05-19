import {
    CHANGE_MOVIE_FILTER_VALUE,
    CHANGE_MOVIE_LIMIT,
    CHANGE_MOVIE_PAGE,
    CHANGE_MOVIE_SORT,
    CLEAR_MOVIE_FORM,
    SET_MOVIE_FORM_SAGA,
    SET_MOVIES_SAGA,
    SET_TOTAL_MOVIES_COUNT
} from "../../utils/actionConstants";

const initialState = {
    movieList: [],
    count: 0, // total records of db
    form: {
        name: "",
        year: 0,
        rating: ""
    },
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

const Movies = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES_SAGA: {
            return {
                ...state,
                movieList: action.movies
            };
        }
        case SET_MOVIE_FORM_SAGA: {
            const { movie } = action;
            return {
                ...state,
                form: {
                    id: movie.id,
                    name: movie.name,
                    year: movie.year,
                    rating: movie.rating
                }
            };
        }
        case SET_TOTAL_MOVIES_COUNT: {
            return {
                ...state,
                count: action.count
            };
        }
        case CLEAR_MOVIE_FORM: {
            return {
                ...state,
                form: {
                    name: "",
                    year: 0,
                    rating: ""
                }
            };
        }
        case CHANGE_MOVIE_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            };
        }
        case CHANGE_MOVIE_LIMIT: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    limit: action.limit
                }
            };
        }
        case CHANGE_MOVIE_SORT: {
            return {
                ...state,
                sorting: {
                    ...state.sorting,
                    field: action.field,
                    direction: (state.sorting.direction === "asc") ? "desc" : "asc"
                }
            };
        }
        case CHANGE_MOVIE_FILTER_VALUE: {
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

export default Movies;
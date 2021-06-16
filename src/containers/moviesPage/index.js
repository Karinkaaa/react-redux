import { connect } from "react-redux";
import Movie from "../../pages/movies";
import { clearMovieForm } from "../../actions/movieForm";
import { getMoviesSaga, removeMovieSaga } from "../../actions/moviesSaga";
import { changeTableFilters, changeTableLimit, changeTablePage, changeTableSort } from "../../actions/table";
import { MOVIES_KEY } from "../../utils/constants";

const mapStateToProps = (state) => {
    return {
        movies: state.table.movies.list,
        count: state.table.movies.count,
        pagination: state.table.movies.pagination,
        sorting: state.table.movies.sorting,
        filters: state.table.movies.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => dispatch(clearMovieForm()),
        getMovies: () => dispatch(getMoviesSaga()),
        removeMovie: (id) => dispatch(removeMovieSaga(id)),
        onChangePage: (page) => dispatch(changeTablePage(MOVIES_KEY, page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit(MOVIES_KEY, limit)),
        onChangeSort: (field) => dispatch(changeTableSort(MOVIES_KEY, field)),
        onChangeFilters: (filters) => dispatch(changeTableFilters(MOVIES_KEY, filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
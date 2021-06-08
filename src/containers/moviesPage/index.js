import { connect } from "react-redux";
import Movie from "../../pages/movies";
import { clearMovieForm } from "../../actions/movieForm";
import {  getMoviesSaga, removeMovieSaga } from "../../actions/moviesSaga";
import { changeTableFilters, changeTableLimit, changeTablePage, changeTableSort } from "../../actions/table";

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
        onChangePage: (page) => dispatch(changeTablePage("movies", page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit("movies", limit)),
        onChangeSort: (field) => dispatch(changeTableSort("movies", field)),
        onChangeFilters: (filters) => dispatch(changeTableFilters("movies", filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
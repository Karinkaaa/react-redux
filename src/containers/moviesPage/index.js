import { connect } from "react-redux";
import Movie from "../../pages/movies";
import {
    changeMovieFilterValue,
    changeMovieLimit,
    changeMoviePage,
    changeMovieSort,
    clearMovieForm,
    getMoviesSaga,
    removeMovieSaga
} from "../../actions/movies";

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movieList,
        count: state.movies.count,
        pagination: state.movies.pagination,
        sorting: state.movies.sorting,
        filters: state.movies.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(getMoviesSaga()),
        removeMovie: (id) => dispatch(removeMovieSaga(id)),
        clearForm: () => dispatch(clearMovieForm()),
        onChangePage: (page) => dispatch(changeMoviePage(page)),
        onChangeLimit: (limit) => dispatch(changeMovieLimit(limit)),
        onChangeSort: (field) => dispatch(changeMovieSort(field)),
        onChangeFilterValue: (props) => dispatch(changeMovieFilterValue(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
import { connect } from "react-redux";
import MovieForm from "../../components/movieForm";
import { getMovieByIdSaga, saveMovieSaga, setMovieForm, updateMovieSaga } from "../../actions/movies";

const mapStateToProps = (state) => {
    return {
        movie: state.movies.form
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveMovie: (movie) => dispatch(saveMovieSaga(movie)),
        updateMovie: (id, movie) => dispatch(updateMovieSaga(id, movie)),
        putDataToForm: (id) => dispatch(getMovieByIdSaga(id)),
        onChangeMovie: (movie) => dispatch(setMovieForm(movie))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);
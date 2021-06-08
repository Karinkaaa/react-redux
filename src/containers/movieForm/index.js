import { connect } from "react-redux";
import MovieForm from "../../components/movieForm";
import { getMovieByIdSaga } from "../../actions/moviesSaga";
import { saveMovieSaga, setMovieForm, updateMovieSaga } from "../../actions/movieForm";

const mapStateToProps = (state) => {
    return {
        movie: state.movieForm
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveMovie: (movie) => dispatch(saveMovieSaga(movie)),
        updateMovie: (id, movie) => dispatch(updateMovieSaga(id, movie)),
        onPutData: (id) => dispatch(getMovieByIdSaga(id)),
        onChangeMovie: (movie) => dispatch(setMovieForm(movie))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieForm);
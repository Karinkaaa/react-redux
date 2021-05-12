import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, TextField } from "@material-ui/core";
import { Save, UpdateRounded } from "@material-ui/icons";
import { INFO } from "../../utils/links";
import { getMovieByIdSaga, saveMovieSaga, updateMovieSaga } from "../../actions/movie";

const InfoForm = ({ movie, saveMovie, putDataToForm, updateMovie }) => {
    const { id } = useParams();

    const onPutData = (id) => {
        putDataToForm(id);
    };

    const onSave = ({ id, ...movie }) => {
        saveMovie(movie);


    };

    const onUpdate = ({ id, ...movie }) => {
        updateMovie(id, movie);


    };

    useEffect(() => {
        if (id) onPutData(id);
    }, []);

    return (
        <Grid container spacing={5} style={{ margin: 50 }}>
            <Grid item xs={2}>
                <TextField
                    label={"Title"}
                    value={movie.title}
                    // onChange={(e) => setMovie({ ...movie, title: e.target.value })}
                />
            </Grid>

            <Grid item xs={2}>
                <TextField
                    label={"Year"}
                    value={movie.year}
                    type={"number"}
                    // onChange={(e) => setMovie({ ...movie, year: parseInt(e.target.value) })}
                />
            </Grid>

            <Grid item xs={3}>
                <TextField
                    label={"Rating"}
                    value={movie.rating}
                    // onChange={(e) => setMovie({ ...movie, rating: e.target.value })}
                />
            </Grid>

            <Grid item xs={2}>
                {
                    id ? (
                        <Link to={INFO}>
                            <Button
                                onClick={() => onUpdate(movie)}
                                color={"primary"}
                                variant={"contained"}
                                startIcon={<UpdateRounded/>}
                            >
                                Update movie
                            </Button>
                        </Link>
                    ) : (
                        <Link to={INFO}>
                            <Button
                                onClick={() => onSave(movie)}
                                color={"primary"}
                                variant={"contained"}
                                startIcon={<Save/>}
                            >
                                Save movie
                            </Button>
                        </Link>
                    )
                }
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state) => {
    return {movie: state.movies.form};
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveMovie: (movie) => dispatch(saveMovieSaga(movie)),
        updateMovie: (id, movie) => dispatch(updateMovieSaga(id, movie)),
        putDataToForm: (id) => dispatch(getMovieByIdSaga(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoForm);

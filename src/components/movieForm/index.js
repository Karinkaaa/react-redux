import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, TextField } from "@material-ui/core";
import { Save, UpdateRounded } from "@material-ui/icons";
import { MOVIES } from "../../utils/links";

const MovieForm = ({ movie, onChangeMovie, saveMovie, updateMovie, putDataToForm }) => {
    const { id } = useParams();

    const onPutData = (id) => putDataToForm(id);
    const onSave = ({ id, ...movie }) => saveMovie(movie);
    const onUpdate = ({ id, ...movie }) => updateMovie(id, movie);

    useEffect(() => {
        if (id) onPutData(id);
    }, []);

    return (
        <Grid container spacing={5} style={{ margin: 50 }}>
            <Grid item xs={2}>
                <TextField
                    label={"Name"}
                    value={movie.name}
                    onChange={(e) => onChangeMovie({ ...movie, name: e.target.value })}
                />
            </Grid>

            <Grid item xs={2}>
                <TextField
                    label={"Year"}
                    value={movie.year}
                    type={"number"}
                    onChange={(e) => onChangeMovie({ ...movie, year: parseInt(e.target.value) })}
                />
            </Grid>

            <Grid item xs={3}>
                <TextField
                    label={"Rating"}
                    value={movie.rating}
                    onChange={(e) => onChangeMovie({ ...movie, rating: e.target.value })}
                />
            </Grid>

            <Grid item xs={2}>
                {
                    id ? (
                        <Link to={MOVIES}>
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
                        <Link to={MOVIES}>
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

MovieForm.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        rating: PropTypes.string.isRequired
    }).isRequired,
    onChangeMovie: PropTypes.func.isRequired,
    saveMovie: PropTypes.func.isRequired,
    updateMovie: PropTypes.func.isRequired,
    putDataToForm: PropTypes.func.isRequired
};

export default MovieForm;

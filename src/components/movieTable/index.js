import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoviesHead from "./MoviesHead";
import MoviesBody from "./MoviesBody";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color
    }
}));

const MovieTable = ({
                        movies, sorting, onChangeSort, onChangeFilterValue, onChangeIsOpen,
                        onDelete, onClickPutResourceToForm
                    }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.content}>
            <MoviesHead
                sorting={sorting}
                onChangeSort={onChangeSort}
                onChangeFilterValue={onChangeFilterValue}
            />

            <MoviesBody
                movies={movies}
                onDelete={onDelete}
                onChangeIsOpen={onChangeIsOpen}
                onClickPutResourceToForm={onClickPutResourceToForm}
            />
        </Grid>
    );
};

MovieTable.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            rating: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilterValue: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func,
    onDelete: PropTypes.func.isRequired,
    onClickPutResourceToForm: PropTypes.func
};

export default MovieTable;
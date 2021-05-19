import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import MovieRow from "./MovieRow";

const MoviesBody = ({ movies, onDelete }) => (
    <Grid item xs={12}>
        {
            movies.map(({ id, name, year, rating }) =>
                <MovieRow
                    key={id}
                    id={id}
                    name={name}
                    year={year}
                    rating={rating}
                    onDelete={onDelete}
                />
            )
        }
    </Grid>
);

MoviesBody.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            rating: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default MoviesBody;
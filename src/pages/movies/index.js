import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Update } from "@material-ui/icons";
import { MOVIE_CREATE_FORM, MOVIE_UPDATE_FORM } from "../../utils/links";
import {
    changeMovieLimit,
    changeMoviePage,
    clearMovieForm,
    getMoviesSaga,
    removeMovieSaga
} from "../../actions/movies";

const Movie = ({ movies, count, pagination, getMovies, removeMovie, clearForm, onChangePage, onChangeLimit }) => {
    const { page, limit } = pagination;

    const onRemove = (id) => removeMovie(id);
    const handleChangeMoviePage = (event, newPage) => onChangePage(newPage);
    const handleChangeMovieLimit = (event) => onChangeLimit(parseInt(event.target.value, 10));

    useEffect(() => {
        getMovies();
    }, [pagination]);

    return (
        <Container style={{ marginTop: 50 }}>
            <Link to={MOVIE_CREATE_FORM}>
                <Button
                    variant={"contained"}
                    color={"primary"}
                    onClick={clearForm}
                >
                    Create movie
                </Button>
            </Link>

            <TablePagination
                style={{ color: "#cfeaff" }}
                component="div"
                color="primary"
                colSpan={6}
                page={page}
                count={count}
                rowsPerPage={limit}
                rowsPerPageOptions={[4, 8, 12, 16, 20, 40, 60, 80, 100]}
                onChangePage={handleChangeMoviePage}
                onChangeRowsPerPage={handleChangeMovieLimit}
            />

            <Table>
                <TableBody>
                    {
                        movies.map(({ id, name, year, rating }) =>
                            <TableRow key={id}>
                                <TableCell>{id}</TableCell>
                                <TableCell>{name}</TableCell>
                                <TableCell>{year}</TableCell>
                                <TableCell>{rating}</TableCell>

                                <TableCell>
                                    <Link to={MOVIE_UPDATE_FORM.replace(":id", id)}>
                                        <IconButton><Update/></IconButton>
                                    </Link>
                                </TableCell>

                                <TableCell>
                                    <IconButton onClick={() => onRemove(id)}><Delete/></IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </Container>
    );
};

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
        onChangeLimit: (limit) => dispatch(changeMovieLimit(limit))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
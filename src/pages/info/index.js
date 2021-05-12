import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Container, Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Update } from "@material-ui/icons";
import { INFO_CREATE_FORM, INFO_UPDATE_FORM } from "../../utils/links";
import { getMoviesSaga, removeMovieSaga } from "../../actions/movie";

const Info = ({ movies, getMovies, removeMovie }) => {
    const onRemove = (id) => {
        removeMovie(id);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <Container style={{ marginTop: 50 }}>
            <Link to={INFO_CREATE_FORM}>
                <Button variant={"contained"} color={"primary"}>
                    Create movie
                </Button>
            </Link>

            <Table>
                <TableBody>
                    {
                        movies.map(({ id, title, year, rating }) =>
                            <TableRow key={id}>
                                <TableCell>{id}</TableCell>
                                <TableCell>{title}</TableCell>
                                <TableCell>{year}</TableCell>
                                <TableCell>{rating}</TableCell>

                                <TableCell>
                                    <Link to={INFO_UPDATE_FORM.replace(":id", id)}>
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
        movies: state.movies.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMovies: () => dispatch(getMoviesSaga()),
        removeMovie: (id) => dispatch(removeMovieSaga(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
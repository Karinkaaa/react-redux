import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { MOVIE_UPDATE_FORM } from "../../utils/links";

const useStyles = makeStyles(theme => ({
    grid: {
        borderBottom: "outset",
        borderBottomWidth: "thin",
        alignItems: "center"
    },
    gridItem: {
        overflow: "overlay",
        padding: "20px 25px"
    },
    updateIcon: {
        color: theme.palette.success3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    },
    typo: {
        color: theme.palette.primary3Color,
        maxWidth: 600,
        maxHeight: 25,
        overflow: "overlay",
        textAlign: "left",
        fontSize: 14,
        wordBreak: "break-all",
        paddingRight: 15,
        marginRight: 15
    }
}));

const MovieRow = ({ id, name, year, rating, onDelete }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid}>
            <Grid item xs={2} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {id}
                </Typography>
            </Grid>

            <Grid item xs={4} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {name}
                </Typography>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {year}
                </Typography>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {rating}
                </Typography>
            </Grid>

            <Grid item xs={1}>
                <Link to={MOVIE_UPDATE_FORM.replace(":id", id)}>
                    <IconButton>
                        <Update className={classes.updateIcon}/>
                    </IconButton>
                </Link>
            </Grid>

            <Grid item xs={1}>
                <IconButton onClick={() => onDelete(id)}>
                    <Delete className={classes.deleteIcon}/>
                </IconButton>
            </Grid>
        </Grid>
    );
};

MovieRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default MovieRow;
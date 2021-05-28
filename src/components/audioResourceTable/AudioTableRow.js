import React from "react";
import PropTypes from "prop-types";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import AudioPlayButton from "../audioPlayer";

const useStyles = makeStyles(theme => ({
    grid: {
        borderBottom: "outset",
        borderBottomWidth: "thin",
        alignItems: "center"
    },
    gridItem: {
        overflow: "overlay",
        padding: 20
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

const AudioTableRow = ({ id, name, url, handleOpen, handleToggle }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid}>
            <Grid item xs={1} className={classes.gridItem}>
                <AudioPlayButton url={url}/>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {id}
                </Typography>
            </Grid>

            <Grid item xs={3} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {name}
                </Typography>
            </Grid>

            <Grid item xs={4} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {url}
                </Typography>
            </Grid>

            <Grid item xs={1}>
                <IconButton
                    data-id={id}
                    onClick={() => handleOpen(id)}
                >
                    <Update className={classes.updateIcon}/>
                </IconButton>
            </Grid>

            <Grid item xs={1}>
                <IconButton
                    data-id={id}
                    data-url={url}
                    onClick={handleToggle}
                >
                    <Delete className={classes.deleteIcon}/>
                </IconButton>
            </Grid>
        </Grid>
    );
};

AudioTableRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default AudioTableRow;
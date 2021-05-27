import React from "react";
import PropTypes from "prop-types";
import { Avatar, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    grid: {
        padding: "5px 10px"
    },
    gridItem: {
        margin: "auto"
    },
    typo: {
        maxWidth: 600,
        maxHeight: 25,
        overflow: "overlay",
        textAlign: "left",
        color: theme.palette.blueGrey3Color,
        fontSize: 14,
        wordBreak: "break-all",
        paddingRight: 15,
        marginRight: 30
    }
}));

const NestedTableItem = ({ url }) => {
    const classes = useStyles();

    return (
        <Grid container item spacing={1} className={classes.grid}>
            <Grid item xs={2}/>

            <Grid item xs={1}>
                <Avatar src={url}/>
            </Grid>

            <Grid item className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {url}
                </Typography>
            </Grid>

            <Grid item xs={2}/>
        </Grid>
    );
};

NestedTableItem.propTypes = {
    url: PropTypes.string.isRequired
};

export default NestedTableItem;
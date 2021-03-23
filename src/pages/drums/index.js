import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: 100,
        position: "absolute",
        width: 600,
        background: "lightblue",
        border: "3px solid #1e88e5",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 8),
        borderRadius: "3px"
    }
}));

const Drums = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.paper}>
            U busihi krasiva zhopa
        </Grid>
    );
};

export default Drums;
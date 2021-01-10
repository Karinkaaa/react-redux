import React from "react";
import { Button } from "@material-ui/core";
import DrumsForRules from "../../components/drumsForRules";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
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
            <Grid item xs={12}>
                <TextField
                    label="Name"
                    placeholder="Enter the name of rule"
                    variant="outlined"
                    required
                    fullWidth
                    error={true}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    label="Cost"
                    placeholder="Enter the cost of rule"
                    variant="outlined"
                    type={"number"}
                    required
                    fullWidth
                    error={true}
                />
            </Grid>

            <Grid container item xs={12}>
                <Grid item xs={12}>
                    <DrumsForRules/>
                </Grid>
            </Grid>

            <Grid item xs={6}>
                <Button
                    fullWidth
                    color="secondary"
                    variant="contained"
                >
                    Cancel
                </Button>
            </Grid>

            <Grid item xs={6}>
                <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                >
                    Save
                </Button>
            </Grid>
        </Grid>
    );
};

export default Drums;
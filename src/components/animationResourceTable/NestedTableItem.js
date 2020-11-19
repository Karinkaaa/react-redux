import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {Avatar, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Delete} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    grid: {
        padding: "5px 10px",
    },
    gridItem: {
        margin: "auto",
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
    },
    updateIcon: {
        color: theme.palette.update3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color,
    },
}))

const NestedTableItem = (({url, handleToggle}) => {
        const classes = useStyles();

        return (
            <Grid container item spacing={1} className={classes.grid}>
                <Grid item xs={2}/>

                <Grid item xs={1}>
                    <Avatar src={url}/>
                </Grid>

                <Grid item xs={6} className={classes.gridItem}>
                    <Typography className={classes.typo}>
                        {url}
                    </Typography>
                </Grid>

                <Grid item xs={1}>
                    <IconButton
                        onClick={handleToggle}
                        data-id={url}
                    >
                        <Delete className={classes.deleteIcon}/>
                    </IconButton>
                </Grid>

                <Grid item xs={2}/>
            </Grid>
        )
    }
)

NestedTableItem.propTypes = {
    url: PropTypes.string.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default NestedTableItem
import React from "react";
import Grid from "@material-ui/core/Grid";
import {Avatar, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Delete} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    typo: {
        maxWidth: 600,
        maxHeight: 25,
        overflow: "overlay",
        textAlign: "left",
        color: theme.palette.blueGrey3Color,
        fontSize: 14,
        wordBreak: "break-all"
    },
    updateIcon: {
        color: theme.palette.update3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    },
}))

const NestedTable = ({id, urls, open, handleToggle}) => {

    const classes = useStyles();
    return (
        <>
            {
                open && (
                    <Grid container>
                        {
                            urls.map(url =>
                                <Grid container item spacing={4}>
                                    <Grid item xs={2}/>

                                    <Grid item xs={1}>
                                        <Avatar src={url}/>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Typography className={classes.typo}>
                                            {url}
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <IconButton
                                            data-id={id}
                                            onClick={handleToggle}
                                        >
                                            <Delete className={classes.deleteIcon}/>
                                        </IconButton>
                                    </Grid>

                                    <Grid item xs={2}/>
                                </Grid>
                            )
                        }
                    </Grid>
                )
            }
        </>
    )
}

export default NestedTable

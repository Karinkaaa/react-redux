import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Avatar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

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

const ImageTableRow = ({ id, name, url, handleOpen, handleToggle, onClickPutResourceToForm }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid}>
            <Grid item xs={1} className={classes.gridItem}>
                <Avatar src={url}/>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {id}
                </Typography>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {name}
                </Typography>
            </Grid>

            <Grid item xs={5} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    {url}
                </Typography>
            </Grid>

            <Grid item xs={1}>
                <IconButton
                    data-id={id}
                    onClick={() => {
                        handleOpen();
                        onClickPutResourceToForm({ id, name, url });
                    }}
                >
                    <Update className={classes.updateIcon}/>
                </IconButton>
            </Grid>

            <Grid item xs={1}>
                <IconButton
                    data-id={id}
                    onClick={handleToggle}
                >
                    <Delete className={classes.deleteIcon}/>
                </IconButton>
            </Grid>
        </Grid>
    );
};

ImageTableRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    onClickPutResourceToForm: PropTypes.func.isRequired
};

export default ImageTableRow;
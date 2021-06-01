import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { LAYER_FORM } from "../../utils/links";

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

const LayerTableRow = ({ id, name, handleToggle, onClickPutLayerToForm }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid}>
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

            <Grid item xs={5} className={classes.gridItem}>
                <Typography className={classes.typo}>
                    . . . . . . . . . . . . . . . . .
                </Typography>
            </Grid>

            <Grid item xs={1}>
                <Link to={LAYER_FORM}>
                    <IconButton
                        data-id={id}
                        onClick={() => onClickPutLayerToForm(id)}
                    >
                        <Update className={classes.updateIcon}/>
                    </IconButton>
                </Link>
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

LayerTableRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleToggle: PropTypes.func.isRequired,
    onClickPutLayerToForm: PropTypes.func.isRequired
};

export default LayerTableRow;
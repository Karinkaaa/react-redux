import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import LayerTableHead from "./LayerTableHead";
import LayerTableBody from "./LayerTableBody";
import ConfirmMenu from "../confirmMenu";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color
    }
}));

const LayersTable = ({ layers, sorting, onChangeSort, onChangeFilterValue, onDelete, onClickPutLayerToForm }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <LayerTableHead
                sorting={sorting}
                onChangeSort={onChangeSort}
                onChangeFilterValue={onChangeFilterValue}
            />

            <LayerTableBody
                layers={layers}
                setAnchorEl={setAnchorEl}
                onClickPutLayerToForm={onClickPutLayerToForm}
            />

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Grid>
    );
};

LayersTable.propTypes = {
    layers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isValidName: PropTypes.bool,
            elements: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    position: PropTypes.shape({
                        x: PropTypes.number.isRequired,
                        y: PropTypes.number.isRequired
                    }),
                    size: PropTypes.shape({
                        height: PropTypes.number.isRequired,
                        width: PropTypes.number.isRequired
                    }),
                    ref: PropTypes.string,
                    zIndex: PropTypes.number
                }).isRequired
            ).isRequired
        }).isRequired
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilterValue: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClickPutLayerToForm: PropTypes.func.isRequired
};

export default LayersTable;
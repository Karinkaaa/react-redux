import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ConfirmMenu from "../confirmMenu";
import AnimationTableHead from "./AnimationTableHead";
import AnimationTableBody from "./AnimationTableBody";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color
    }
}));

const AnimationResourceTable = ({
                                    animations, sorting, filters, onChangeSort, onChangeFilters,
                                    onRemoveAnimation, onPutDataToForm
                                }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <AnimationTableHead
                sorting={sorting}
                filters={filters}
                onChangeSort={onChangeSort}
                onChangeFilters={onChangeFilters}
            />

            <AnimationTableBody
                animations={animations}
                setAnchorEl={setAnchorEl}
                onPutDataToForm={onPutDataToForm}
            />

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onRemoveAnimation}
            />
        </Grid>
    );
};

AnimationResourceTable.propTypes = {
    animations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    filters: PropTypes.object.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onRemoveAnimation: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired,
    onChangeFilters: PropTypes.func.isRequired
};

export default AnimationResourceTable;
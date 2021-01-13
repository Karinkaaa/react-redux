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
                                    animations, sorting, onChangeSort, onChangeFilterValue,
                                    onDelete, onChangeIsOpen, onClickPutResourceToForm,
                                    onDeleteNestedImage, onDragAndDrop
                                }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <AnimationTableHead
                sorting={sorting}
                onChangeSort={onChangeSort}
                onChangeFilterValue={onChangeFilterValue}
            />

            <AnimationTableBody
                animations={animations}
                onChangeIsOpen={onChangeIsOpen}
                setAnchorEl={setAnchorEl}
                onClickPutResourceToForm={onClickPutResourceToForm}
                onDeleteNestedImage={onDeleteNestedImage}
                onDragAndDrop={onDragAndDrop}
            />

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Grid>
    );
};

AnimationResourceTable.propTypes = {
    animations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            urls: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutResourceToForm: PropTypes.func.isRequired,
    onChangeFilterValue: PropTypes.func.isRequired,
    onDeleteNestedImage: PropTypes.func.isRequired,
    onDragAndDrop: PropTypes.func.isRequired
};

export default AnimationResourceTable;
import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DragonBonesTableHead from "./DragonBonesTableHead";
import DragonBonesTableBody from "./DragonBonesTableBody";
import ConfirmMenu from "../confirmMenu";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color
    }
}));

const DragonBonesResourceTable = ({
                                      dragonBones, sorting, onChangeDragonBonesSort, onChangeDragonBonesFilterValue,
                                      onDelete, onChangeIsOpen, onClickPutDragonBonesResourceToForm
                                  }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <DragonBonesTableHead
                sorting={sorting}
                onChangeDragonBonesSort={onChangeDragonBonesSort}
                onChangeDragonBonesFilterValue={onChangeDragonBonesFilterValue}
            />

            <DragonBonesTableBody
                dragonBones={dragonBones}
                setAnchorEl={setAnchorEl}
                onChangeIsOpen={onChangeIsOpen}
                onClickPutDragonBonesResourceToForm={onClickPutDragonBonesResourceToForm}
            />

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Grid>
    );
};

DragonBonesResourceTable.propTypes = {
    dragonBones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            texture: PropTypes.string.isRequired,
            textureJson: PropTypes.string.isRequired,
            skeleton: PropTypes.string.isRequired
        })
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeDragonBonesSort: PropTypes.func.isRequired,
    onChangeDragonBonesFilterValue: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutDragonBonesResourceToForm: PropTypes.func.isRequired
};

export default DragonBonesResourceTable;
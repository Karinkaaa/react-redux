import React, {useState} from 'react';
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import ConfirmMenu from "../confirmMenu";
import AnimationTableBody from "./AnimationTableBody";
import AnimationTableHead from "./AnimationTableHead";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color,
    },
}));

const AnimationResourceTable = ({
                                    animations, sorting, onChangeAnimationSort, onChangeAnimationFilterValue,
                                    onDelete, onChangeIsOpen, onClickPutAnimationResourceToForm, onChangeItemIndexes
                                }) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <AnimationTableHead
                sorting={sorting}
                onChangeAnimationSort={onChangeAnimationSort}
                onChangeAnimationFilterValue={onChangeAnimationFilterValue}
            />

            <AnimationTableBody
                animations={animations}
                onChangeIsOpen={onChangeIsOpen}
                setAnchorEl={setAnchorEl}
                onClickPutAnimationResourceToForm={onClickPutAnimationResourceToForm}
                onChangeItemIndexes={onChangeItemIndexes}
            />

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Grid>
    )
}

AnimationResourceTable.propTypes = {
    animations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            urls: PropTypes.array.isRequired
        })
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeAnimationSort: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutAnimationResourceToForm: PropTypes.func.isRequired,
    onChangeAnimationFilterValue: PropTypes.func.isRequired,
}

export default AnimationResourceTable
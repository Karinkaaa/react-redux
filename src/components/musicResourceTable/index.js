import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import MusicTableHead from "./MusicTableHead";
import MusicTableBody from "./MusicTableBody";
import ConfirmMenu from "../confirmMenu";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color
    }
}));

const MusicResourceTable = ({
                                music, sorting, onChangeMusicSort, onChangeMusicFilterValue,
                                onDelete, onChangeIsOpen, onClickPutMusicResourceToForm
                            }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <MusicTableHead
                sorting={sorting}
                onChangeMusicSort={onChangeMusicSort}
                onChangeMusicFilterValue={onChangeMusicFilterValue}
            />

            <MusicTableBody
                music={music}
                setAnchorEl={setAnchorEl}
                onChangeIsOpen={onChangeIsOpen}
                onClickPutMusicResourceToForm={onClickPutMusicResourceToForm}
            />

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Grid>
    );
};

MusicResourceTable.propTypes = {
    music: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeMusicSort: PropTypes.func.isRequired,
    onChangeMusicFilterValue: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutMusicResourceToForm: PropTypes.func.isRequired
};

export default MusicResourceTable;
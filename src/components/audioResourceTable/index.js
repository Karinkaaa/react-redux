import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AudioTableHead from "./AudioTableHead";
import AudioTableBody from "./AudioTableBody";
import ConfirmMenu from "../confirmMenu";

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color
    }
}));

const AudioResourceTable = ({
                                audios, sorting, onChangeAudioSort, onChangeAudioFilterValue,
                                onDelete, onChangeIsOpen, onClickPutAudioResourceToForm
                            }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <AudioTableHead
                sorting={sorting}
                onChangeAudioSort={onChangeAudioSort}
                onChangeAudioFilterValue={onChangeAudioFilterValue}
            />

            <AudioTableBody
                audios={audios}
                setAnchorEl={setAnchorEl}
                onChangeIsOpen={onChangeIsOpen}
                onClickPutAudioResourceToForm={onClickPutAudioResourceToForm}
            />

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Grid>
    );
};

AudioResourceTable.propTypes = {
    audios: PropTypes.arrayOf(
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
    onChangeAudioSort: PropTypes.func.isRequired,
    onChangeAudioFilterValue: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutAudioResourceToForm: PropTypes.func.isRequired
};

export default AudioResourceTable;
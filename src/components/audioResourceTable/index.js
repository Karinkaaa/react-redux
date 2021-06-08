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
                                audios, sorting, filters, onChangeSort, onChangeFilterValue,
                                onDelete, onClickPutResourceToForm
                            }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <AudioTableHead
                sorting={sorting}
                filters={filters}
                onChangeSort={onChangeSort}
                onChangeFilterValue={onChangeFilterValue}
            />

            <AudioTableBody
                audios={audios}
                setAnchorEl={setAnchorEl}
                onClickPutResourceToForm={onClickPutResourceToForm}
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
        }).isRequired
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    filters: PropTypes.object.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilterValue: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClickPutResourceToForm: PropTypes.func.isRequired
};

export default AudioResourceTable;
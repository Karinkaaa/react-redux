import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ImageTableHead from "./imageTableHead";
import ImageTableBody from "./ImageTableBody";
import ConfirmMenu from "../confirmMenu";
import { ASCENDING_SORT, DESCENDING_SORT } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color
    }
}));

const ImageResourceTable = ({
                                images, sorting, filters, onChangeSort, onChangeFilters, onRemoveImage, onPutDataToForm
                            }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <ImageTableHead
                sorting={sorting}
                filters={filters}
                onChangeSort={onChangeSort}
                onChangeFilters={onChangeFilters}
            />

            <ImageTableBody
                images={images}
                setAnchorEl={setAnchorEl}
                onPutDataToForm={onPutDataToForm}
            />

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onRemoveImage}
            />
        </Grid>
    );
};

ImageResourceTable.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf([ASCENDING_SORT, DESCENDING_SORT]).isRequired
        }
    ).isRequired,
    filters: PropTypes.object.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilters: PropTypes.func.isRequired,
    onRemoveImage: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default ImageResourceTable;
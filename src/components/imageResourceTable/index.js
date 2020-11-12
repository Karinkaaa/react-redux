import React, {useState} from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {Table} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ImageTableHead from "./imageTableHead";
import ImageTableBody from "./ImageTableBody";
import ConfirmMenu from "../confirmMenu";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color,
    },
}));

const ImageResourceTable = ({
                                images, sorting, onChangeImageSort, onChangeImageFilterValue,
                                onDelete, onChangeIsOpen, onClickPutImageResourceToForm
                            }) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container>
            <Table className={classes.content}>
                <ImageTableHead
                    sorting={sorting}
                    onChangeImageSort={onChangeImageSort}
                    onChangeImageFilterValue={onChangeImageFilterValue}
                />

                <ImageTableBody
                    images={images}
                    setAnchorEl={setAnchorEl}
                    onChangeIsOpen={onChangeIsOpen}
                    onClickPutImageResourceToForm={onClickPutImageResourceToForm}
                />

                <ConfirmMenu
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    onAccept={onDelete}
                />
            </Table>
        </Grid>
    )
}

ImageResourceTable.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeImageSort: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutImageResourceToForm: PropTypes.func.isRequired,
    onChangeImageFilterValue: PropTypes.func.isRequired,
}

export default ImageResourceTable
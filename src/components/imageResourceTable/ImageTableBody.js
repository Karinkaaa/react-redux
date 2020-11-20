import React from "react";
import {Avatar, TableBody} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import {Delete, Update} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    cell: {
        maxWidth: "300px",
        overflow: "overlay",
        textAlign: "left",
        color: theme.palette.primary3Color
    },
    cellIcon: {
        textAlign: "center",
        maxWidth: "50px",
    },
    updateIcon: {
        color: theme.palette.update3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    },
}));

const ImageTableBody = ({images, onChangeIsOpen, setAnchorEl, onClickPutImageResourceToForm}) => {

    const classes = useStyles();
    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <TableBody>
            {
                images
                    .map(({id, name, url}) =>
                        <TableRow key={id}>
                            <TableCell className={classes.cell}><Avatar src={url}/></TableCell>
                            <TableCell className={classes.cell}>{id}</TableCell>
                            <TableCell className={classes.cell}>{name}</TableCell>
                            <TableCell className={classes.cell}>{url}</TableCell>

                            <TableCell className={classes.cellIcon}>
                                <IconButton
                                    data-id={id}
                                    onClick={() => {
                                        handleOpen();
                                        onClickPutImageResourceToForm({id, name, url});
                                    }}
                                >
                                    <Update className={classes.updateIcon}/>
                                </IconButton>
                            </TableCell>

                            <TableCell className={classes.cellIcon}>
                                <IconButton
                                    data-id={id}
                                    onClick={handleToggle}
                                >
                                    <Delete className={classes.deleteIcon}/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )}
        </TableBody>
    )
}

ImageTableBody.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onClickPutImageResourceToForm: PropTypes.func.isRequired,
}

export default ImageTableBody
import React from "react";
import PropTypes from "prop-types";
import {Avatar, Table, TableBody, TableHead} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import {Delete, Update} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import ConfirmMenu from "../confirmMenu";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color,
    },
    head: {
        backgroundColor: theme.palette.primary2Color,
    },
    headCell: {
        fontSize: 16,
        fontWeight: 700,
    },
    cell: {
        color: theme.palette.primary3Color,
    },
    urlCell: {
        maxWidth: "300px",
        overflow: "overlay",
        textAlign: "center",
        color: theme.palette.primary3Color
    },
    updateIcon: {
        color: theme.palette.update3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    }
}));

const ImageResourceTable = ({images, onDelete}) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(false);

    const handleToggle = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Table className={classes.content}>
            <TableHead>
                <TableRow className={classes.head}>
                    <TableCell className={classes.headCell}>Image</TableCell>
                    <TableCell className={classes.headCell}>ID</TableCell>
                    <TableCell className={classes.headCell}>Name</TableCell>
                    <TableCell align="center" className={classes.headCell}>URL</TableCell>
                    <TableCell align="center" className={classes.headCell}>UPDATE</TableCell>
                    <TableCell align="center" className={classes.headCell}>DELETE</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    images
                        .map(image =>
                            <TableRow key={image.id}>
                                <TableCell className={classes.cell}><Avatar src={image.url}/></TableCell>
                                <TableCell className={classes.cell}>{image.id}</TableCell>
                                <TableCell className={classes.cell}>{image.name}</TableCell>
                                <TableCell className={classes.urlCell}>{image.url}</TableCell>

                                <TableCell className={classes.urlCell}>
                                    <IconButton data-id={image.id}>
                                        <Update className={classes.updateIcon}/>
                                    </IconButton>
                                </TableCell>

                                <TableCell className={classes.urlCell}>
                                    <IconButton
                                        data-id={image.id}
                                        onClick={handleToggle}
                                    >
                                        <Delete className={classes.deleteIcon}/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )}
            </TableBody>

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Table>
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
    onDelete: PropTypes.func.isRequired
}

export default ImageResourceTable
import React from "react";
import {Avatar, Table, TableBody, TableHead} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import {Delete} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import ConfirmMenu from "../confirmMenu";

export const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color,
    },
    button: {
        marginTop: 10,
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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 500,
        background: "linear-gradient(rgba(218, 239, 239, 1), rgba(121, 171, 180, 1))",
        border: '3px solid #1e88e5',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 8),
        borderRadius: "3px",
    },
    icon: {
        color: theme.palette.success3Color
    }
}));

export default ({resources, onDelete}) => {

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
                    <TableCell align="center" className={classes.headCell}>DELETE</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {resources.map(resource =>
                    <TableRow key={resource.id}>
                        <TableCell className={classes.cell}><Avatar src={resource.url}/></TableCell>
                        <TableCell className={classes.cell}>{resource.id}</TableCell>
                        <TableCell className={classes.cell}>{resource.name}</TableCell>
                        <TableCell className={classes.urlCell}>{resource.url}</TableCell>
                        <TableCell className={classes.urlCell}>
                            <IconButton
                                data-id={resource.id}
                                onClick={handleToggle}
                            >
                                <Delete className={classes.icon}/>
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
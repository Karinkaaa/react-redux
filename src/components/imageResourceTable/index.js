import React, {useState} from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import {Avatar, Table, TableBody, TableHead} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import InputBase from "@material-ui/core/InputBase";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import {Delete, FilterList, Update} from "@material-ui/icons";
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
        textAlign: "left",
    },
    headCellIcon: {
        textAlign: "center",
        maxWidth: "50px",
    },
    cell: {
        maxWidth: "300px",
        overflow: "overlay",
        textAlign: "left",
        color: theme.palette.primary3Color
    },
    updateIcon: {
        color: theme.palette.update3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    },
    filter: {
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(0),
        },
    },
    filterIcon: {
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.blue2Color,
    },
    input: {
        fontSize: 15,
        color: theme.palette.primary1Color,
        paddingLeft: theme.spacing(4),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const ImageResourceTable = ({
                                images, sorting, onChangeSort, onChangeFilterValue,
                                onDelete, onChangeIsOpen, onClickPutImageResourceToForm
                            }) => {

    const classes = useStyles();

    const {field, direction} = sorting;
    const [anchorEl, setAnchorEl] = useState(false);

    const handleOpen = () => onChangeIsOpen(true);
    const handleClose = () => setAnchorEl(null);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Grid container>
            <Table className={classes.content}>
                <TableHead>
                    <TableRow className={classes.head}>
                        <TableCell className={classes.headCell}>Image</TableCell>

                        <TableCell className={classes.headCell}>
                            <TableSortLabel
                                active={field === "id"}
                                direction={direction}
                                onClick={() => onChangeSort("id")}
                            >
                                ID
                            </TableSortLabel>

                            <div className={classes.filter}>
                                <div className={classes.filterIcon}>
                                    <FilterList/>
                                </div>
                                <InputBase
                                    placeholder="Search..."
                                    className={classes.input}
                                    inputProps={{'aria-label': 'filter'}}
                                    onChange={(e) => onChangeFilterValue({
                                        filterKey: "id",
                                        filterValue: e.target.value
                                    })}
                                />
                            </div>
                        </TableCell>

                        <TableCell className={classes.headCell}>
                            <TableSortLabel
                                active={field === "name"}
                                direction={direction}
                                onClick={() => onChangeSort("name")}
                            >
                                Name
                            </TableSortLabel>

                            <div className={classes.filter}>
                                <div className={classes.filterIcon}>
                                    <FilterList/>
                                </div>
                                <InputBase
                                    placeholder="Search..."
                                    className={classes.input}
                                    inputProps={{'aria-label': 'filter'}}
                                    onChange={(e) => onChangeFilterValue({
                                        filterKey: "name",
                                        filterValue: e.target.value
                                    })}
                                />
                            </div>
                        </TableCell>
                        <TableCell className={classes.headCell}>URL</TableCell>
                        <TableCell className={classes.headCellIcon}><Update/></TableCell>
                        <TableCell className={classes.headCellIcon}><Delete/></TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {
                        images
                            .map(({id, name, url}) =>
                                <TableRow key={id}>
                                    <TableCell className={classes.cell}><Avatar src={url}/></TableCell>
                                    <TableCell className={classes.cell}>{id}</TableCell>
                                    <TableCell className={classes.cell}>{name}</TableCell>
                                    <TableCell className={classes.cell}>{url}</TableCell>

                                    <TableCell className={classes.headCellIcon}>
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

                                    <TableCell className={classes.headCellIcon}>
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
    onChangeSort: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutImageResourceToForm: PropTypes.func.isRequired,
    onChangeFilterValue: PropTypes.func.isRequired,
}

export default ImageResourceTable
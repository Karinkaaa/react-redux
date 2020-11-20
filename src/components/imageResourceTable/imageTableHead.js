import React from "react";
import {TableHead} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import {FilterList} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    head: {
        backgroundColor: theme.palette.primary2Color,
    },
    headCell: {
        fontSize: 16,
        fontWeight: 700,
        textAlign: "left",
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

const ImageTableHead = ({sorting, onChangeImageSort, onChangeImageFilterValue}) => {

    const classes = useStyles();
    const {field, direction} = sorting;

    return (
        <TableHead>
            <TableRow className={classes.head}>
                <TableCell className={classes.headCell}>Image</TableCell>

                <TableCell className={classes.headCell}>
                    <TableSortLabel
                        active={field === "id"}
                        direction={direction}
                        onClick={() => onChangeImageSort("id")}
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
                            onChange={(e) => onChangeImageFilterValue({
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
                        onClick={() => onChangeImageSort("name")}
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
                            onChange={(e) => onChangeImageFilterValue({
                                filterKey: "name",
                                filterValue: e.target.value
                            })}
                        />
                    </div>
                </TableCell>

                <TableCell colSpan={3} className={classes.headCell}>URL</TableCell>
            </TableRow>
        </TableHead>
    )
}

ImageTableHead.propTypes = {
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeImageSort: PropTypes.func.isRequired,
    onChangeImageFilterValue: PropTypes.func.isRequired,
}

export default ImageTableHead
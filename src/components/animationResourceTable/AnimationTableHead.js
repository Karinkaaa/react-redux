import React from "react";
import {Grid} from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import {Delete, FilterList, Update} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    head: {
        backgroundColor: theme.palette.primary2Color,
        padding: "15px 25px",
    },
    headCell: {
        fontSize: 16,
        fontWeight: 700,
        textAlign: "left",
    },
    headCellIcon: {
        textAlign: "right",
        padding: "15px 20px",
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

const AnimationTableHead = ({sorting, onChangeAnimationSort, onChangeAnimationFilterValue}) => {

    const classes = useStyles();
    const {field, direction} = sorting;

    return (
        <Grid container className={classes.head}>
            <Grid item xs={2} className={classes.headCell}>
                Image
            </Grid>

            <Grid item xs={2} className={classes.headCell}>
                <TableSortLabel
                    active={field === "id"}
                    direction={direction}
                    onClick={() => onChangeAnimationSort("id")}
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
                        onChange={(e) => onChangeAnimationFilterValue({
                            filterKey: "id",
                            filterValue: e.target.value
                        })}
                    />
                </div>
            </Grid>

            <Grid item xs={6} className={classes.headCell}>
                <TableSortLabel
                    active={field === "name"}
                    direction={direction}
                    onClick={() => onChangeAnimationSort("name")}
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
                        onChange={(e) => onChangeAnimationFilterValue({
                            filterKey: "name",
                            filterValue: e.target.value
                        })}
                    />
                </div>
            </Grid>

            <Grid item xs={1} className={classes.headCellIcon}><Update/></Grid>
            <Grid item xs={1} className={classes.headCellIcon}><Delete/></Grid>
        </Grid>
    )
}

export default AnimationTableHead

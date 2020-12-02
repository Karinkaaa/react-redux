import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    head: {
        backgroundColor: theme.palette.primary2Color,
        padding: "20px 25px"
    },
    headCell: {
        fontSize: 16,
        fontWeight: 700,
        textAlign: "left"
    },
    filter: {
        position: "relative",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(0)
        }
    },
    filterIcon: {
        height: "100%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        color: theme.palette.blue2Color
    },
    input: {
        fontSize: 15,
        color: theme.palette.primary1Color,
        paddingLeft: theme.spacing(4),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch"
            }
        }
    },
    sortLabel: {
        paddingLeft: 5
    }
}));

const DragonBonesTableHead = ({ sorting, onChangeDragonBonesSort, onChangeDragonBonesFilterValue }) => {
    const classes = useStyles();
    const { field, direction } = sorting;

    return (
        <Grid container className={classes.head}>
            <Grid item xs={1} className={classes.headCell}>
                Texture
            </Grid>

            <Grid item xs={2} className={classes.headCell}>
                <TableSortLabel
                    active={field === "id"}
                    direction={direction}
                    onClick={() => onChangeDragonBonesSort("id")}
                    className={classes.sortLabel}
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
                        inputProps={{ "aria-label": "filter" }}
                        onChange={(e) => onChangeDragonBonesFilterValue({
                            filterKey: "id",
                            filterValue: e.target.value
                        })}
                    />
                </div>
            </Grid>

            <Grid item xs={2} className={classes.headCell}>
                <TableSortLabel
                    active={field === "name"}
                    direction={direction}
                    onClick={() => onChangeDragonBonesSort("name")}
                    className={classes.sortLabel}
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
                        inputProps={{ "aria-label": "filter" }}
                        onChange={(e) => onChangeDragonBonesFilterValue({
                            filterKey: "name",
                            filterValue: e.target.value
                        })}
                    />
                </div>
            </Grid>

            <Grid item xs={3} className={classes.headCell} style={{ paddingLeft: 20 }}>Texture JSON</Grid>
            <Grid item className={classes.headCell} style={{ paddingLeft: 20 }}>Skeleton</Grid>
        </Grid>
    );
};

DragonBonesTableHead.propTypes = {
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf(["asc", "desc"]).isRequired
        }
    ).isRequired,
    onChangeDragonBonesSort: PropTypes.func.isRequired,
    onChangeDragonBonesFilterValue: PropTypes.func.isRequired
};

export default DragonBonesTableHead;
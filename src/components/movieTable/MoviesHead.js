import React from "react";
import PropTypes from "prop-types";
import { Grid, InputBase, TableSortLabel } from "@material-ui/core";
import { FilterList } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { ASCENDING_SORT, DESCENDING_SORT } from "../../utils/constants";

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
        paddingLeft: 3
    }
}));

const MoviesHead = ({ sorting, filters, onChangeSort, onChangeFilters }) => {
    const classes = useStyles();
    const { field, direction } = sorting;

    return (
        <Grid container className={classes.head}>
            <Grid item xs={2} className={classes.headCell}>
                <TableSortLabel
                    active={field === "id"}
                    direction={direction}
                    onClick={() => onChangeSort("id")}
                    className={classes.sortLabel}
                >
                    ID
                </TableSortLabel>

                <div className={classes.filter}>
                    <div className={classes.filterIcon}>
                        <FilterList/>
                    </div>

                    <InputBase
                        placeholder={"Search..."}
                        className={classes.input}
                        value={filters.id || ""}
                        inputProps={{ "aria-label": "filter" }}
                        onChange={(e) => onChangeFilters({
                            ...filters,
                            id: e.target.value
                        })}
                    />
                </div>
            </Grid>

            <Grid item xs={4} className={classes.headCell} style={{ paddingLeft: 2 }}>
                <TableSortLabel
                    active={field === "name"}
                    direction={direction}
                    onClick={() => onChangeSort("name")}
                    className={classes.sortLabel}
                >
                    Name
                </TableSortLabel>

                <div className={classes.filter}>
                    <div className={classes.filterIcon}>
                        <FilterList/>
                    </div>

                    <InputBase
                        placeholder={"Search..."}
                        className={classes.input}
                        value={filters.name || ""}
                        inputProps={{ "aria-label": "filter" }}
                        onChange={(e) => onChangeFilters({
                            ...filters,
                            name: e.target.value
                        })}
                    />
                </div>
            </Grid>

            <Grid item xs={2} className={classes.headCell} style={{ paddingLeft: 15 }}>
                <TableSortLabel
                    active={field === "year"}
                    direction={direction}
                    onClick={() => onChangeSort("year")}
                    className={classes.sortLabel}
                >
                    Year
                </TableSortLabel>

                <div className={classes.filter}>
                    <div className={classes.filterIcon}>
                        <FilterList/>
                    </div>

                    <InputBase
                        placeholder={"Search..."}
                        className={classes.input}
                        value={filters.year || ""}
                        inputProps={{ "aria-label": "filter" }}
                        onChange={(e) => onChangeFilters({
                            ...filters,
                            year: e.target.value
                        })}
                    />
                </div>
            </Grid>

            <Grid item xs={2} className={classes.headCell} style={{ paddingLeft: 20 }}>
                <TableSortLabel
                    active={field === "rating"}
                    direction={direction}
                    onClick={() => onChangeSort("rating")}
                    className={classes.sortLabel}
                >
                    Rating
                </TableSortLabel>

                <div className={classes.filter}>
                    <div className={classes.filterIcon}>
                        <FilterList/>
                    </div>

                    <InputBase
                        placeholder={"Search..."}
                        className={classes.input}
                        value={filters.rating || ""}
                        inputProps={{ "aria-label": "filter" }}
                        onChange={(e) => onChangeFilters({
                            ...filters,
                            rating: e.target.value
                        })}
                    />
                </div>
            </Grid>
        </Grid>
    );
};

MoviesHead.propTypes = {
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf([ASCENDING_SORT, DESCENDING_SORT]).isRequired
        }
    ).isRequired,
    filters: PropTypes.object.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onChangeFilters: PropTypes.func.isRequired
};

export default MoviesHead;
import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ConfirmMenu from "../confirmMenu";
import RuleTableHead from "./RuleTableHead";
import RuleTableBody from "./RuleTableBody";
import { ASCENDING_SORT, DESCENDING_SORT } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
    content: {
        marginTop: 75,
        background: theme.palette.blueGrey1Color
    }
}));

const RuleTable = ({ rules, sorting, filters, onChangeSort, onChangeFilters, onDelete, onPutDataToForm }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(false);

    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container className={classes.content}>
            <RuleTableHead
                sorting={sorting}
                filters={filters}
                onChangeSort={onChangeSort}
                onChangeFilters={onChangeFilters}
            />

            <RuleTableBody
                rules={rules}
                setAnchorEl={setAnchorEl}
                onPutDataToForm={onPutDataToForm}
            />

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Grid>
    );
};

RuleTable.propTypes = {
    rules: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            cost: PropTypes.number.isRequired,
            conditions: PropTypes.arrayOf(
                PropTypes.shape({
                        x: PropTypes.number.isRequired,
                        y: PropTypes.number.isRequired
                    }
                ).isRequired
            ).isRequired
        }).isRequired
    ).isRequired,
    sorting: PropTypes.shape({
            field: PropTypes.string.isRequired,
            direction: PropTypes.oneOf([ASCENDING_SORT, DESCENDING_SORT]).isRequired
        }
    ).isRequired,
    filters: PropTypes.object.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired,
    onChangeFilters: PropTypes.func.isRequired
};

export default RuleTable;
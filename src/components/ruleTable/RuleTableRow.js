import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid, IconButton } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import RulesGrid from "./RulesGrid";
import { LINK_TO_RULES_UPDATE_FORM } from "../../utils/links";

const useStyles = makeStyles(theme => ({
    grid: {
        borderBottom: "outset",
        borderBottomWidth: "thin",
        alignItems: "center"
    },
    gridItem: {
        overflow: "overlay",
        textAlign: "left",
        color: theme.palette.primary3Color,
        padding: "20px 25px"
    },
    updateIcon: {
        color: theme.palette.success3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    }
}));

const RuleTableRow = ({ id, name, cost, conditions, onPutDataToForm, handleToggle }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid}>
            <Grid item xs={3} className={classes.gridItem}>
                <RulesGrid conditions={conditions}/>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>{id}</Grid>
            <Grid item xs={3} className={classes.gridItem}>{name}</Grid>
            <Grid item xs={2} className={classes.gridItem}>{cost}</Grid>

            <Grid item xs={1}>
                <Link to={LINK_TO_RULES_UPDATE_FORM.replace(":id", id)}>
                    <IconButton
                        data-id={id}
                        onClick={() => onPutDataToForm(id)}
                    >
                        <Update className={classes.updateIcon}/>
                    </IconButton>
                </Link>
            </Grid>

            <Grid item xs={1}>
                <IconButton
                    data-id={id}
                    onClick={handleToggle}
                >
                    <Delete className={classes.deleteIcon}/>
                </IconButton>
            </Grid>
        </Grid>
    );
};

RuleTableRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    conditions: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleToggle: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default RuleTableRow;
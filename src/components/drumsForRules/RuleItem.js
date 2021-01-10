import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    buttonTrue: {
        "&:hover": {
            background: "lightsteelblue"
        },
        border: "inset",
        borderColor: theme.palette.primary1Color,
        background: theme.palette.primary3Color
    },
    buttonFalse: {
        "&:hover": {
            background: "steelblue"
        },
        border: "inset",
        borderColor: theme.palette.primary1Color,
        background: theme.palette.success2Color
    }
}));

const RuleItem = ({ ruleItem, x, y, onChangeCondition }) => {
    const classes = useStyles();

    const { Icon, id} = ruleItem;
    const [isActiveButton, setIsActiveButton] = useState(true);

    return (
        <Grid item key={id}>
            <IconButton
                className={isActiveButton ? classes.buttonTrue : classes.buttonFalse}
                onClick={() => onChangeCondition({x, y})}
            >
                <Icon/>
            </IconButton>
        </Grid>
    );
};

RuleItem.propTypes = {
    ruleItem: PropTypes.object.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    onChangeCondition: PropTypes.func.isRequired
};

export default RuleItem;
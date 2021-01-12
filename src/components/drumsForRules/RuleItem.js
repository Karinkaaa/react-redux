import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { isExistCondition } from "../../utils/methods";

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

const RuleItem = ({ ruleItem, x, y, conditions, onChangeCondition }) => {
    const classes = useStyles();
    const { Icon, id } = ruleItem;

    const isExistCurrentCondition = isExistCondition(conditions, { x, y });
    const [isActiveButton, setIsActiveButton] = useState(isExistCurrentCondition);

    const handleClick = () => {
        onChangeCondition({ x, y });
        setIsActiveButton(!isActiveButton);
    };

    return (
        <Grid item key={id}>
            <IconButton
                className={isActiveButton ? classes.buttonFalse : classes.buttonTrue}
                onClick={() => handleClick()}
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
    conditions: PropTypes.arrayOf(PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onChangeCondition: PropTypes.func.isRequired
};

export default RuleItem;
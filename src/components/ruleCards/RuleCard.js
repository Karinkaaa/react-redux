import React from "react";
import PropTypes from "prop-types";
import { Card, CardActions, CardContent, IconButton, Typography } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import RulesGrid from "../ruleTable/RulesGrid";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        backgroundColor: theme.palette.blueGrey1Color,
        color: theme.palette.primary3Color
    },
    header: {
        display: "flex",
        alignItems: "center",
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default
    },
    updateIcon: {
        color: theme.palette.success3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    },
    gridContainer: {
        maxWidth: 350,
        color: theme.palette.primary2Color,
        marginLeft: 45
    }
}));

const RuleCard = ({ id, name, cost, conditions, setAnchorEl, onChangeIsOpen, onClickPutRuleToForm }) => {
    const classes = useStyles();

    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography gutterBottom variant={"h5"} component={"h2"}>
                    {name}
                </Typography>

                <Typography gutterBottom variant={"h5"} component={"h2"} color={"secondary"}>
                    {cost}
                </Typography>

                <div className={classes.gridContainer}>
                    <RulesGrid conditions={conditions}/>
                </div>
            </CardContent>

            <CardActions>
                <IconButton
                    data-id={id}
                    onClick={() => {
                        handleOpen();
                        onClickPutRuleToForm({ id, name, cost, conditions });
                    }}
                >
                    <Update className={classes.updateIcon}/>
                </IconButton>

                <IconButton
                    data-id={id}
                    onClick={handleToggle}
                >
                    <Delete className={classes.deleteIcon}/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

RuleCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    conditions: PropTypes.arrayOf(PropTypes.object).isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutRuleToForm: PropTypes.func.isRequired
};

export default RuleCard;
import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import { RadioButtonChecked, RadioButtonUnchecked } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { RuleItems } from "../drumsForRules/RuleItems";

const useStyles = makeStyles({
    container: {
        maxWidth: 150,
        marginLeft: 0
    },
    gridContainer: {
        margin: 0
    }
});

const RulesGrid = ({ ruleItems, conditions }) => {
    const classes = useStyles();

    return (
        <Container maxWidth={"xs"} className={classes.container}>
            <Grid container className={classes.gridContainer}>
                {
                    ruleItems.map(rule => {
                        const ruleConditions = rule.map(conditions => conditions);

                        return ruleConditions.map(ruleCondition => {
                                const { x, y } = ruleCondition;
                                const element = conditions.find(item => item.x === x && item.y === y);

                                return (
                                    <Grid item key={uuid()}>
                                        {element ?
                                            <RadioButtonChecked fontSize={"small"}/>
                                            :
                                            <RadioButtonUnchecked fontSize={"small"}/>}
                                    </Grid>
                                );
                            }
                        );
                    })
                }
            </Grid>
        </Container>
    );
};

RulesGrid.defaultProps = {
    ruleItems: RuleItems
};

RulesGrid.propTypes = {
    conditions: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RulesGrid;
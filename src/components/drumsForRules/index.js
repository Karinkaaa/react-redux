import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { RuleItems } from "./RuleItems";
import RuleItemElement from "./RuleItemElement";

const useStyles = makeStyles((theme) => ({
    container: {
        border: "inset",
        borderRadius: 5,
        borderColor: theme.palette.primary2Color,
        background: "linear-gradient(to right, paleturquoise, lightsteelblue)"
    },
    gridContainer: {
        marginTop: 10,
        marginBottom: 10
    }
}));

const DrumsForRules = ({ ruleItems, conditions, onChangeCondition }) => {
    const classes = useStyles();

    return (
        <Container maxWidth={"xs"} className={classes.container}>
            <Grid container spacing={2} className={classes.gridContainer}>
                {
                    ruleItems
                        .map((ruleItem, y) =>
                            <RuleItemElement
                                key={uuid()}
                                ruleItems={ruleItem}
                                y={y}
                                conditions={conditions}
                                onChangeCondition={onChangeCondition}
                            />
                        )
                }
            </Grid>
        </Container>
    );
};

DrumsForRules.defaultProps = {
    ruleItems: RuleItems
};

DrumsForRules.propTypes = {
    ruleItems: PropTypes.arrayOf(PropTypes.array),
    conditions: PropTypes.arrayOf(PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onChangeCondition: PropTypes.func.isRequired
};

export default DrumsForRules;
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Grid, TextField, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DrumsForRules from "../drumsForRules";
import { saveItemTo } from "../../utils/methods";
import { LINK_TO_RULES } from "../../utils/links";

const useStyles = makeStyles((theme) => ({
    paper: {
        background: "lightblue",
        padding: theme.spacing(4, 8),
        borderRadius: "5px"
    },
    btn: {
        marginInlineStart: "auto"
    }
}));

const RuleForm = ({ name, cost, conditions, onSaveRule, onUpdateRule, onPutDataToForm, onChangeFormData }) => {
    const classes = useStyles();
    const { id } = useParams();

    const onChangeCondition = (value, index) => {
        onChangeFormData("conditions", saveItemTo(conditions, value, index));
    };

    useEffect(() => {
        if (id) onPutDataToForm(id);
    }, []);

    return (
        <div>
            <Toolbar/>
            <Container className={classes.paper}>
                <Grid container spacing={3}>
                    {
                        id && (
                            <Grid item xs={12}>
                                <TextField
                                    label={"ID"}
                                    variant={"outlined"}
                                    value={id}
                                    required
                                    fullWidth
                                    disabled
                                />
                            </Grid>
                        )
                    }

                    <Grid item xs={12}>
                        <TextField
                            label={"Name"}
                            placeholder={"Enter the name of rule"}
                            variant={"outlined"}
                            value={name}
                            required
                            fullWidth
                            onChange={e => onChangeFormData("name", e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label={"Cost"}
                            placeholder={"Enter the cost of rule"}
                            variant={"outlined"}
                            value={cost}
                            type={"number"}
                            required
                            fullWidth
                            onChange={e => onChangeFormData("cost", parseInt(e.target.value))}
                        />
                    </Grid>

                    <Grid container item xs={12}>
                        <Grid item xs={12}>
                            <DrumsForRules
                                conditions={conditions}
                                onChangeCondition={onChangeCondition}
                            />
                        </Grid>
                    </Grid>


                    <Grid item xs={2}>
                        <Link to={LINK_TO_RULES}>
                            <Button
                                fullWidth
                                color={"secondary"}
                                variant={"contained"}
                            >
                                Cancel
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={2} className={classes.btn}>
                        <Link to={LINK_TO_RULES}>
                            <Button
                                fullWidth
                                color={"primary"}
                                variant={"contained"}
                                onClick={() => {
                                    id ? onUpdateRule(id, { name, cost, conditions })
                                        : onSaveRule({ name, cost, conditions });
                                }}
                            >
                                {id ? "Update" : "Save"}
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

RuleForm.propTypes = {
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    conditions: PropTypes.arrayOf(PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onSaveRule: PropTypes.func.isRequired,
    onUpdateRule: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired,
    onChangeFormData: PropTypes.func.isRequired
};

export default RuleForm;
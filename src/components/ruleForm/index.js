import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DrumsForRules from "../drumsForRules";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        position: "absolute",
        width: 600,
        background: "lightblue",
        border: "3px solid #1e88e5",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 8),
        borderRadius: "3px"
    }
}));

const RuleForm = ({
                      onSave, onUpdate, id,
                      name, isValidName, onChangeName,
                      cost, isValidCost, onChangeCost,
                      conditions, onChangeCondition,
                      isOpen, onChangeIsOpen
                  }) => {
    const classes = useStyles();

    const handleClose = () => onChangeIsOpen(false);
    const isDisabledButtonSave = () => !isValidName || !isValidCost || conditions.length === 0;

    return (
        <Modal
            className={classes.modal}
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <Fade in={isOpen}>
                <Grid container spacing={3} className={classes.paper}>
                    {
                        id && (
                            <Grid item xs={12}>
                                <TextField
                                    label="ID"
                                    variant="outlined"
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
                            label="Name"
                            placeholder="Enter the name of rule"
                            variant="outlined"
                            value={name}
                            required
                            fullWidth
                            error={!isValidName}
                            onChange={e => onChangeName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Cost"
                            placeholder="Enter the cost of rule"
                            variant="outlined"
                            value={cost}
                            type={"number"}
                            required
                            fullWidth
                            error={!isValidCost}
                            onChange={e => onChangeCost(e.target.value)}
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

                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            onClick={handleClose}
                            color="secondary"
                            variant="contained"
                        >
                            Cancel
                        </Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            onClick={() => {
                                id ? onUpdate({ id, name, cost, conditions }) : onSave({
                                    id,
                                    name,
                                    cost,
                                    conditions
                                });
                                handleClose();
                            }}
                            disabled={isDisabledButtonSave()}
                            color="primary"
                            variant="contained"
                        >
                            {id ? "Update" : "Save"}
                        </Button>
                    </Grid>
                </Grid>
            </Fade>
        </Modal>
    );
};

RuleForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isValidName: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired,
    cost: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string]),
    isValidCost: PropTypes.bool.isRequired,
    onChangeCost: PropTypes.func.isRequired,
    conditions: PropTypes.arrayOf(PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,
    onChangeCondition: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired
};

export default RuleForm;
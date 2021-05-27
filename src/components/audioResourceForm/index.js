import React from "react";
import PropTypes from "prop-types";
import { Backdrop, Button, Fade, Grid, Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        position: "absolute",
        width: 500,
        background: "lightblue",
        border: "3px solid #1e88e5",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 8),
        borderRadius: "3px"
    }
}));

const AudioResourceForm = ({
                               id, name, isValidName, url, isValidUrl, isOpen,
                               onSave, onUpdate, onChangeName, onChangeUrl, onChangeIsOpen
                           }) => {
    const classes = useStyles();

    const handleClose = () => onChangeIsOpen(false);
    const isDisabledButtonSave = () => !isValidUrl || !isValidName;

    return (
        <Modal
            className={classes.modal}
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
        >
            <Fade in={isOpen}>
                <Grid container spacing={3} className={classes.paper}>
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
                            placeholder={"Enter the name of audio resource"}
                            variant={"outlined"}
                            value={name}
                            required
                            fullWidth
                            error={!isValidName}
                            onChange={e => onChangeName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label={"URL"}
                            placeholder={"Enter the URL of audio resource"}
                            variant={"outlined"}
                            value={url}
                            required
                            fullWidth
                            error={!isValidUrl}
                            onChange={e => onChangeUrl(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            onClick={handleClose}
                            color={"secondary"}
                            variant={"contained"}
                        >
                            Cancel
                        </Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Button
                            fullWidth
                            onClick={() => {
                                id ? onUpdate({ id, name, url }) : onSave({ name, url });
                                handleClose();
                            }}
                            disabled={isDisabledButtonSave()}
                            color={"primary"}
                            variant={"contained"}
                        >
                            {id ? "Update" : "Save"}
                        </Button>
                    </Grid>
                </Grid>
            </Fade>
        </Modal>
    );
};

AudioResourceForm.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isValidName: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    isValidUrl: PropTypes.bool.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onSave: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    onChangeName: PropTypes.func.isRequired,
    onChangeUrl: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired
};

export default AudioResourceForm;
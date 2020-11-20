import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 500,
        background: "lightblue",
        border: '3px solid #1e88e5',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 8),
        borderRadius: "3px",
    },
}));

const AnimationResourceForm = ({
                                   onSave, onUpdate, id,
                                   name, isValidName, onChangeName,
                                   urls, isValidUrls, onChangeUrl,
                                   isOpen, onChangeIsOpen
                               }) => {

    const classes = useStyles();
    const iValidAllTheUrls = isValidUrls.every((isValid) => isValid === true);

    const handleClose = () => onChangeIsOpen(false);
    const isDisabledButtonSave = () => !iValidAllTheUrls || !isValidName;

    return (
        <Modal
            className={classes.modal}
            open={isOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
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
                            placeholder="Enter the name of animation resource"
                            variant="outlined"
                            value={name}
                            required
                            fullWidth
                            error={!isValidName}
                            onChange={e => onChangeName(e.target.value)}
                        />
                    </Grid>

                    <Grid container item xs={12} spacing={2}>
                        {
                            urls.map((url, index) =>
                                <Grid item xs={12} key={url}>
                                    <TextField
                                        label="URL"
                                        placeholder="Enter the URL of animation resource"
                                        variant="outlined"
                                        value={url}
                                        required
                                        fullWidth
                                        error={!isValidUrls[index]}
                                        onChange={e => onChangeUrl(index, e.target.value)}
                                    />
                                </Grid>
                            )
                        }
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
                                id ? onUpdate({id, name, urls}) : onSave({id, name, urls});
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
    )
}

AnimationResourceForm.propTypes = {

    onSave: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    isValidName: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired,
    urls: PropTypes.array.isRequired,
    isValidUrls: PropTypes.array.isRequired,
    onChangeUrl: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired
}

export default AnimationResourceForm
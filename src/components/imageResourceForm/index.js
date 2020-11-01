import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import {Button} from "@material-ui/core";
import {useStyles} from "../imageResourceTable";

const ImageResourceForm = ({
                               onSave,
                               name, isValidName, onChangeName,
                               url, isValidUrl, onChangeUrl,
                               isOpen, onChangeIsOpen
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
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={isOpen}>
                <Grid container spacing={3} className={classes.paper}>
                    <Grid item xs={12}>
                        <TextField
                            label="Enter the name of image resource"
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
                            label="Enter the URL of image resource"
                            variant="outlined"
                            value={url}
                            required
                            fullWidth
                            error={!isValidUrl}
                            onChange={e => onChangeUrl(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Button
                            className={classes.button}
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
                            className={classes.button}
                            fullWidth
                            onClick={() => {
                                onSave({name, url});
                                handleClose();
                            }}
                            disabled={isDisabledButtonSave()}
                            color="primary"
                            variant="contained"
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Fade>
        </Modal>
    )
}

ImageResourceForm.propTypes = {

    onSave: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    isValidName: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    isValidUrl: PropTypes.bool.isRequired,
    onChangeUrl: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired
}

export default ImageResourceForm
import React from "react";
import {Button} from "@material-ui/core";
import {Add} from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import {useStyles} from "./Images";

export default ({onSave, url, isValidUrl, onChangeUrl, isOpen, onChangeIsOpen}) => {

    const classes = useStyles();

    const handleOpen = () => onChangeIsOpen(true);
    const handleClose = () => onChangeIsOpen(false);
    const isDisabledButtonSave = () => !isValidUrl;

    return (
        <div>
            <Button variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<Add/>}
                    onClick={handleOpen}
            >
                Add resource
            </Button>
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
                    <div className={classes.paper}>
                        <TextField
                            label="Enter the URL of resource"
                            variant="outlined"
                            value={url}
                            required
                            fullWidth
                            error={!isValidUrl}
                            onChange={e => onChangeUrl(e.target.value)}
                        />
                        <Button
                            className={classes.button}
                            fullWidth
                            onClick={() => {
                                onSave(url);
                                handleClose();
                            }}
                            disabled={isDisabledButtonSave()}
                            color="primary"
                            variant="contained"
                        >
                            Save resource
                        </Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}
import React from "react";
import PropTypes from "prop-types";
import { Backdrop, Button, Fade, Grid, Modal, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { readFile } from "../../utils/methods";
import DropzoneArea from "../dropzoneArea";

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
    },
    dropZone: {
        zoom: 0.6,
        mixBlendMode: "multiply"
    }
}));

const ImageResourceForm = ({
                               id, name, isValidName, onChangeName, url, isValidUrl, onChangeUrl,
                               isOpen, onChangeIsOpen, saveImage, updateImage
                           }) => {
    const classes = useStyles();

    const onSave = (image) => saveImage(image);
    const onUpdate = ({ id, ...image }) => updateImage(id, image);

    const handleClose = () => onChangeIsOpen(false);
    const isDisabledButtonSave = () => !isValidUrl || !isValidName;

    const handleClickOnDropZone = async (e) => {
        if (e[0]) onChangeUrl(await readFile(e[0]));
        else onChangeUrl("");
    };

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
                            placeholder={"Enter the name of image resource"}
                            variant={"outlined"}
                            value={name}
                            required
                            fullWidth
                            error={!isValidName}
                            onChange={e => onChangeName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12} className={classes.dropZone}>
                        <DropzoneArea
                            acceptedFiles={["image/*"]}
                            filesLimit={1}
                            dropzoneText={"Drag and drop an image here or click"}
                            initialFiles={url ? [url] : []}
                            onChange={e => handleClickOnDropZone(e)}
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

ImageResourceForm.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isValidName: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    isValidUrl: PropTypes.bool.isRequired,
    onChangeUrl: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    saveImage: PropTypes.func.isRequired,
    updateImage: PropTypes.func.isRequired
};

export default ImageResourceForm;
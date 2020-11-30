import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
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

const DragonBonesResourceForm = ({
                                     onSave, onUpdate, id,
                                     name, isValidName, onChangeName,
                                     texture, isValidTexture, onChangeTexture,
                                     textureJson, isValidTextureJson, onChangeTextureJson,
                                     skeleton, isValidSkeleton, onChangeSkeleton,
                                     isOpen, onChangeIsOpen
                                 }) => {

    const classes = useStyles();

    const handleClose = () => onChangeIsOpen(false);
    const isDisabledButtonSave = () => !isValidTexture || !isValidName;

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
                            placeholder="Enter the name of dragon bones resource"
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
                            label="Texture URL"
                            placeholder="Enter the texture URL of dragon bones resource"
                            variant="outlined"
                            value={texture}
                            required
                            fullWidth
                            error={!isValidTexture}
                            onChange={e => onChangeTexture(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Texture JSON"
                            placeholder="Enter the texture data of dragon bones resource"
                            variant="outlined"
                            value={textureJson}
                            required
                            fullWidth
                            error={!isValidTextureJson}
                            onChange={e => onChangeTextureJson(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Skeleton JSON"
                            placeholder="Enter the skeleton JSON of dragon bones resource"
                            variant="outlined"
                            value={skeleton}
                            required
                            fullWidth
                            error={!isValidSkeleton}
                            onChange={e => onChangeSkeleton(e.target.value)}
                        />
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
                                id
                                    ? onUpdate({ id, name, texture, textureJson, skeleton })
                                    : onSave({ id, name, texture, textureJson, skeleton });
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

DragonBonesResourceForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    isValidName: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired,
    texture: PropTypes.string.isRequired,
    isValidTexture: PropTypes.bool.isRequired,
    onChangeTexture: PropTypes.func.isRequired,
    textureJson: PropTypes.string.isRequired,
    isValidTextureJson: PropTypes.bool.isRequired,
    onChangeTextureJson: PropTypes.func.isRequired,
    skeleton: PropTypes.string.isRequired,
    isValidSkeleton: PropTypes.bool.isRequired,
    onChangeSkeleton: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired
};

export default DragonBonesResourceForm;
import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Add, Remove } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { isValidImageUrl } from "../../utils/validation";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
        position: "absolute",
        width: 800,
        background: "lightblue",
        border: "3px solid #1e88e5",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 8),
        borderRadius: "3px"
    },
    grid: {
        whiteSpace: "noWrap",
        marginTop: 10
    },
    media: {
        padding: 12,
        marginRight: 25
    },
    iconBtnAdd: {
        marginLeft: 10
    },
    iconBtnRemove: {
        marginLeft: 10
    }
}));

const AnimationResourceForm = ({
                                   onSave, onDeleteImage, onAddImage, onUpdate, id,
                                   name, isValidName, onChangeName,
                                   urls, isValidUrls, onChangeUrl,
                                   isOpen, onChangeIsOpen
                               }) => {
    const classes = useStyles();
    const iValidAllTheUrls = isValidUrls.every((isValid) => isValid === true);

    const handleClose = () => onChangeIsOpen(false);
    const isDisabledButtonSave = () => !iValidAllTheUrls || !isValidName || urls.length === 0;

    const [url, setUrl] = useState("");
    const isValidUrl = isValidImageUrl(url);

    const handleClickAdd = () => {
        onAddImage(url);
        setUrl("");
    };

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
                            placeholder="Enter the name of image resource"
                            variant="outlined"
                            value={name}
                            required
                            fullWidth
                            error={!isValidName}
                            onChange={e => onChangeName(e.target.value)}
                        />
                    </Grid>

                    <Grid container spacing={2} className={classes.grid}>
                        {
                            urls.map((url, index) =>
                                <Grid container item xs={12} key={url}>
                                    <Grid item xs={1} className={classes.media}>
                                        <Avatar src={url}/>
                                    </Grid>

                                    <Grid item xs={9}>
                                        <TextField
                                            label="URL"
                                            placeholder="Enter the URL of image resource"
                                            variant="outlined"
                                            value={url}
                                            required
                                            fullWidth
                                            error={!isValidUrls[index]}
                                            onChange={e => onChangeUrl(e.target.value)}
                                        />
                                    </Grid>

                                    <Grid item xs={1}>
                                        <IconButton
                                            className={classes.iconBtnRemove}
                                            onClick={() => onDeleteImage(index)}
                                        >
                                            <Remove color="secondary"/>
                                        </IconButton>
                                    </Grid>

                                </Grid>
                            )
                        }
                    </Grid>

                    <Grid container item xs={12} spacing={2} className={classes.grid}>
                        <Grid item xs={1} className={classes.media}>
                            <Avatar src={url}/>
                        </Grid>

                        <Grid item xs={9}>
                            <TextField
                                label="URL"
                                placeholder="Enter the new URL of image resource"
                                variant="outlined"
                                value={url}
                                required
                                fullWidth
                                error={!isValidUrl}
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={1}>
                            <IconButton
                                className={classes.iconBtnAdd}
                                disabled={!isValidUrl}
                                onClick={handleClickAdd}
                            >
                                <Add color="primary"/>
                            </IconButton>
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
                                id ? onUpdate({ id, name, urls }) : onSave({ id, name, urls });
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

AnimationResourceForm.propTypes = {
    onSave: PropTypes.func.isRequired,
    onDeleteImage: PropTypes.func.isRequired,
    onAddImage: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isValidName: PropTypes.bool.isRequired,
    onChangeName: PropTypes.func.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    isValidUrls: PropTypes.arrayOf(PropTypes.bool).isRequired,
    onChangeUrl: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired
};

export default AnimationResourceForm;
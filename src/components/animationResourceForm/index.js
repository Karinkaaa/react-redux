import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AnimationSpeed from "./AnimationSpeed";
import GridUrls from "./GridUrls";
import ClearUrlComponent from "./ClearUrlComponent";
import { ANIMATIONS } from "../../utils/links";

const useStyles = makeStyles((theme) => ({
    paper: {
        background: "lightblue",
        padding: theme.spacing(4, 8),
        borderRadius: "5px"
    },
    btn: {
        marginInlineStart: "auto"
    },
    speed: {
        marginLeft: 50
    },
    link: {
        pointerEvents: ({ isDisabledButtonSave }) => isDisabledButtonSave() ? "none" : "auto"
    }
}));

const AnimationResourceForm = ({
                                   id, speed, urls, name, isValidName, onChangeName, onChangeSpeed, onAddImage,
                                   onDeleteImage, isValidUrls, onChangeUrl, onSave, onUpdate, onDragAndDrop
                               }) => {
    const iValidAllTheUrls = isValidUrls.every((isValid) => isValid === true);
    const isDisabledButtonSave = () => !iValidAllTheUrls || !isValidName || urls.length === 0 || speed === 0;

    const classes = useStyles({ isDisabledButtonSave });

    return (
        <div>
            <Toolbar/>
            <Container className={classes.paper}>
                <Grid container spacing={3}>
                    {
                        id && (
                            <Grid item xs={3}>
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

                    <Grid item xs={id ? 9 : 12}>
                        <TextField
                            label={"Name"}
                            placeholder={"Enter the name of animation resource"}
                            variant={"outlined"}
                            value={name}
                            required
                            fullWidth
                            error={!isValidName}
                            onChange={e => onChangeName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            label={"Animation speed (in seconds)"}
                            variant={"outlined"}
                            value={speed}
                            required
                            fullWidth
                            disabled
                        />
                    </Grid>

                    <Grid item xs={8} className={classes.speed}>
                        <AnimationSpeed speed={speed} onChangeSpeed={onChangeSpeed}/>
                    </Grid>

                    <GridUrls
                        id={id}
                        urls={urls}
                        isValidUrls={isValidUrls}
                        onChangeUrl={onChangeUrl}
                        onDeleteImage={onDeleteImage}
                        onDragAndDrop={onDragAndDrop}
                    />

                    <ClearUrlComponent onAddImage={onAddImage}/>

                    <Grid item xs={2}>
                        <Link to={ANIMATIONS}>
                            <Button
                                fullWidth
                                color="secondary"
                                variant="contained"
                            >
                                Cancel
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={2} className={classes.btn}>
                        <Link to={ANIMATIONS} className={classes.link}>
                            <Button
                                fullWidth
                                onClick={() => {
                                    id ? onUpdate({ id, name, urls, speed })
                                        : onSave({ id, name, urls, speed });
                                }}
                                disabled={isDisabledButtonSave()}
                                color={"primary"}
                                variant={"contained"}
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

AnimationResourceForm.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    isValidName: PropTypes.bool.isRequired,
    isValidUrls: PropTypes.arrayOf(PropTypes.bool).isRequired,
    onChangeName: PropTypes.func.isRequired,
    onChangeSpeed: PropTypes.func.isRequired,
    onChangeUrl: PropTypes.func.isRequired,
    onAddImage: PropTypes.func.isRequired,
    onDeleteImage: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};

export default AnimationResourceForm;
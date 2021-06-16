import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Grid, TextField, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { removeItemByIndex, saveItemTo } from "../../utils/methods";
import BlankUrlComponent from "./BlankUrlComponent";
import AnimationSpeed from "./AnimationSpeed";
import GridUrls from "./GridUrls";
import { LINK_TO_ANIMATIONS } from "../../utils/links";

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
    }
}));

const AnimationResourceForm = ({ id, name, speed, urls, onChangeFormData, onSaveAnimation, onUpdateAnimation }) => {
    const classes = useStyles();

    const onChangeSpeed = (value) => onChangeFormData("speed", value);
    const onChangeUrl = (value) => onChangeFormData("urls", saveItemTo(urls, value));
    const onAddImage = (value) => onChangeFormData("urls", saveItemTo(urls, value));
    const onRemoveImage = (index) => onChangeFormData("urls", removeItemByIndex(urls, index));
    const onDragAndDrop = (result) => onChangeFormData("urls", result);

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
                            onChange={e => onChangeFormData("name", e.target.value)}
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
                        onChangeUrl={onChangeUrl}
                        onRemoveImage={onRemoveImage}
                        onDragAndDrop={onDragAndDrop}
                    />

                    <BlankUrlComponent onAddImage={onAddImage}/>

                    <Grid item xs={2}>
                        <Link to={LINK_TO_ANIMATIONS}>
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
                        <Link to={LINK_TO_ANIMATIONS}>
                            <Button
                                fullWidth
                                color={"primary"}
                                variant={"contained"}
                                onClick={() => {
                                    id ? onUpdateAnimation(id, { name, urls, speed })
                                        : onSaveAnimation({ name, urls, speed });
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

AnimationResourceForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onChangeFormData: PropTypes.func.isRequired,
    onSaveAnimation: PropTypes.func.isRequired,
    onUpdateAnimation: PropTypes.func.isRequired
};

export default AnimationResourceForm;
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Grid, TextField, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LINK_TO_DRAGON_BONES } from "../../utils/links";

const useStyles = makeStyles((theme) => ({
    paper: {
        background: "lightblue",
        padding: theme.spacing(4, 8),
        borderRadius: "5px"
    },
    btn: {
        marginInlineStart: "auto"
    }
}));

const ImageResourceForm = ({
                               id, name, texture, textureJson, skeleton,
                               onSaveDragonBone, onUpdateDragonBone, onChangeFormData
                           }) => {
    const classes = useStyles();

    return (
        <div>
            <Toolbar/>
            <Container className={classes.paper}>
                <Grid container spacing={3}>
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
                            placeholder={"Enter the name of dragon bone resource"}
                            variant={"outlined"}
                            value={name}
                            required
                            fullWidth
                            onChange={e => onChangeFormData("name", e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label={"Texture URL"}
                            placeholder={"Enter the texture URL of dragon bone resource"}
                            variant={"outlined"}
                            value={texture}
                            required
                            fullWidth
                            onChange={e => onChangeFormData("texture", e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label={"Texture JSON URL"}
                            placeholder={"Enter the texture JSON URL of dragon bone resource"}
                            variant={"outlined"}
                            value={textureJson}
                            required
                            fullWidth
                            onChange={e => onChangeFormData("textureJson", e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label={"Skeleton JSON URL"}
                            placeholder={"Enter the skeleton JSON URL of dragon bone resource"}
                            variant={"outlined"}
                            value={skeleton}
                            required
                            fullWidth
                            onChange={e => onChangeFormData("skeleton", e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <Link to={LINK_TO_DRAGON_BONES}>
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
                        <Link to={LINK_TO_DRAGON_BONES}>
                            <Button
                                fullWidth
                                color={"primary"}
                                variant={"contained"}
                                onClick={() => {
                                    id ? onUpdateDragonBone(id, { name, texture, textureJson, skeleton })
                                        : onSaveDragonBone({ name, texture, textureJson, skeleton });
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

ImageResourceForm.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    texture: PropTypes.string.isRequired,
    textureJson: PropTypes.string.isRequired,
    skeleton: PropTypes.string.isRequired,
    onSaveDragonBone: PropTypes.func.isRequired,
    onUpdateDragonBone: PropTypes.func.isRequired,
    onChangeFormData: PropTypes.func.isRequired
};

export default ImageResourceForm;
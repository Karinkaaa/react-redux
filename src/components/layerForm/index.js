import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Container, Grid, InputAdornment, TextField, Toolbar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import ResizableDraggableLayerElement from "../resizableDraggableLayerElement";
import SettingsMenu from "./SettingsMenu";
import ElementsList from "./ElementsList";
import { LAYERS } from "../../utils/links";

const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.blueGrey1Color,
        height: 695,
        marginTop: 20,
        border: "solid 1px white"
    },
    btn: {
        marginLeft: 50
    },
    id: {
        marginRight: 50
    },
    link: {
        pointerEvents: ({ isValidName }) => !isValidName ? "none" : "auto"
    }
}));

const LayerForm = ({
                       id, name, elements, selectedId, selectedElement, images, animations, dragonBones,
                       isValidName, onChangeLayerName, setSelectedId, onAddElement, onDeleteElement,
                       onChangeElement, saveLayer, updateLayer
                   }) => {
    const classes = useStyles({ isValidName });

    const onSave = (layer) => saveLayer(layer);
    const onUpdate = ({ id, ...layer }) => updateLayer(id, layer);

    return (
        <div>
            <Toolbar/>
            <Container>
                <ElementsList
                    elements={elements}
                    selectedId={selectedId}
                    images={images}
                    animations={animations}
                    dragonBones={dragonBones}
                    setSelectedId={setSelectedId}
                    onChangeElement={onChangeElement}
                />

                <Grid container>
                    <Grid item xs={3}>
                        <Button
                            color={"primary"}
                            size={"large"}
                            variant={"contained"}
                            startIcon={<Add/>}
                            onClick={onAddElement}
                        >
                            Add new element
                        </Button>
                    </Grid>

                    {
                        id && (
                            <Grid item xs={2} className={classes.id}>
                                <TextField
                                    value={id}
                                    disabled
                                    InputProps={{
                                        startAdornment: <InputAdornment position={"start"}>ID: </InputAdornment>
                                    }}
                                />
                            </Grid>
                        )
                    }

                    <Grid item xs={id ? 3 : 4}>
                        <TextField
                            fullWidth
                            value={name}
                            error={!isValidName}
                            InputProps={{ startAdornment: <InputAdornment position={"start"}>Name: </InputAdornment> }}
                            onChange={e => onChangeLayerName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={1} className={classes.btn}>
                        <Link to={LAYERS} className={classes.link}>
                            <Button
                                fullWidth
                                size={"large"}
                                color={"primary"}
                                variant={"contained"}
                                disabled={!isValidName}
                                onClick={() => id ? onUpdate({ id, name, elements }) :
                                    onSave({ name, elements })
                                }
                            >
                                {id ? "Update" : "Save"}
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={1} className={classes.btn}>
                        <Link to={LAYERS}>
                            <Button
                                fullWidth
                                size={"large"}
                                color={"secondary"}
                                variant={"contained"}
                            >
                                Cancel
                            </Button>
                        </Link>
                    </Grid>

                    <Grid
                        id={"container"}
                        item xs={12}
                        className={classes.container}
                        onClick={(e) => e.target.id === "container" && setSelectedId(null)}
                    >
                        {
                            elements.map(el =>
                                <ResizableDraggableLayerElement
                                    key={el.id}
                                    isSelected={el.id === selectedId}
                                    setSelectedId={setSelectedId}
                                    element={el}
                                    onChangeElement={onChangeElement}
                                    images={images}
                                    animations={animations}
                                    dragonBones={dragonBones}
                                />
                            )
                        }
                    </Grid>
                </Grid>
            </Container>

            {
                selectedId && (
                    <SettingsMenu
                        selectedElement={selectedElement}
                        images={images}
                        animations={animations}
                        dragonBones={dragonBones}
                        onChangeElement={onChangeElement}
                        onDeleteElement={onDeleteElement}
                    />
                )
            }
        </div>
    );
};

LayerForm.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isValidName: PropTypes.bool.isRequired,
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            position: PropTypes.shape({
                x: PropTypes.number.isRequired,
                y: PropTypes.number.isRequired
            }),
            size: PropTypes.shape({
                height: PropTypes.number.isRequired,
                width: PropTypes.number.isRequired
            }),
            ref: PropTypes.string,
            zIndex: PropTypes.number
        }).isRequired
    ).isRequired,
    selectedId: PropTypes.string,
    selectedElement: PropTypes.shape({
        id: PropTypes.string.isRequired,
        position: PropTypes.shape({
            x: PropTypes.number.isRequired,
            y: PropTypes.number.isRequired
        }),
        size: PropTypes.shape({
            height: PropTypes.number.isRequired,
            width: PropTypes.number.isRequired
        }),
        ref: PropTypes.string,
        zIndex: PropTypes.number
    }),
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    animations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        })
    ).isRequired,
    dragonBones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            texture: PropTypes.string.isRequired,
            textureJson: PropTypes.string.isRequired,
            skeleton: PropTypes.string.isRequired
        })
    ).isRequired,
    setSelectedId: PropTypes.func.isRequired,
    onChangeLayerName: PropTypes.func.isRequired,
    onAddElement: PropTypes.func.isRequired,
    onDeleteElement: PropTypes.func.isRequired,
    onChangeElement: PropTypes.func.isRequired,
    saveLayer: PropTypes.func.isRequired,
    updateLayer: PropTypes.func.isRequired
};

export default LayerForm;
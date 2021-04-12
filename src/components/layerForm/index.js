import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid, InputAdornment, TextField } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { Add, Save, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import ResizableDraggableLayerElement from "../resizableDraggableLayerElement";
import SettingsMenu from "./SettingsMenu";

const useStyles = makeStyles(theme => ({
    container: {
        background: theme.palette.blueGrey1Color,
        height: 700,
        marginTop: 50
    },
    buttonSave: {
        textAlign: "end"
    }
}));

const LayerForm = ({
                       id, name, elements, selectedId, selectedElement, images, animations, dragonBones,
                       isValidName, onChangeLayerName, setSelectedId, onAddElement, onDeleteElement,
                       onChangeElement, onSaveLayer, onUpdateLayer
                   }) => {
    const classes = useStyles();

    return (
        <div>
            <Toolbar/>
            <Container>
                <Grid container>
                    <Grid item xs={3}>
                        <Button
                            color="primary"
                            size="large"
                            variant="contained"
                            startIcon={<Add/>}
                            onClick={onAddElement}
                        >
                            Add new element
                        </Button>
                    </Grid>

                    {
                        id && (
                            <Grid item xs={3}>
                                <TextField
                                    value={id}
                                    disabled
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">ID: </InputAdornment>
                                    }}
                                />
                            </Grid>
                        )
                    }

                    <Grid item xs={id ? 4 : 5}>
                        <TextField
                            fullWidth
                            value={name}
                            error={!isValidName}
                            InputProps={{ startAdornment: <InputAdornment position="start">Name: </InputAdornment> }}
                            onChange={e => onChangeLayerName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={2} className={classes.buttonSave}>
                        <Button
                            size="large"
                            color={"primary"}
                            variant={"contained"}
                            disabled={!isValidName}
                            startIcon={id ? <Update/> : <Save/>}
                            onClick={() => id ? onUpdateLayer({ id, name, elements }) : onSaveLayer({ name, elements })}
                        >
                            {id ? "Update" : "Save"}
                        </Button>
                    </Grid>

                    <Grid item xs={10} className={classes.container}>
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
                </Grid>
            </Container>
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
            })
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
        ref: PropTypes.string
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
            urls: PropTypes.arrayOf(PropTypes.string).isRequired
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
    onSaveLayer: PropTypes.func.isRequired,
    onUpdateLayer: PropTypes.func.isRequired
};

export default LayerForm;
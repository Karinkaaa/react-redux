import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Button, Container, Grid, InputAdornment, TextField, Toolbar } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import ResizableDraggableLayerElement from "../resizableDraggableLayerElement";
import SettingsMenu from "./SettingsMenu";
import ElementsList from "./ElementsList";
import { removeItemById, saveObjectItemTo } from "../../utils/methods";
import { LINK_TO_LAYERS } from "../../utils/links";

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
    }
}));

const LayerForm = ({
                       name, elements, selectedId, selectedElement, images, animations, dragonBones,
                       onSaveLayer, onUpdateLayer, onPutDataToForm, onChangeFormData, getResources
                   }) => {
    const classes = useStyles();
    const { id } = useParams();
    const [filterName, setFilterName] = useState("");

    useEffect(() => {
        if (id) onPutDataToForm(id);
        getResources(filterName);
    }, [filterName]);

    const setSelectedId = (id) => onChangeFormData("selectedId", id);
    const onAddElement = () => onChangeFormData("elements", saveObjectItemTo(elements, { id: uuid() }));
    const onChangeElement = (element) => onChangeFormData("elements", saveObjectItemTo(elements, element));

    const onDeleteElement = (id) => {
        onChangeFormData("selectedId", null);
        onChangeFormData("elements", removeItemById(elements, id));
    };

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
                            InputProps={{ startAdornment: <InputAdornment position={"start"}>Name: </InputAdornment> }}
                            onChange={e => onChangeFormData("name", e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={1} className={classes.btn}>
                        <Link to={LINK_TO_LAYERS}>
                            <Button
                                fullWidth
                                size={"large"}
                                color={"primary"}
                                variant={"contained"}
                                onClick={() => id ? onUpdateLayer({ id, name, elements }) :
                                    onSaveLayer({ name, elements })
                                }
                            >
                                {id ? "Update" : "Save"}
                            </Button>
                        </Link>
                    </Grid>

                    <Grid item xs={1} className={classes.btn}>
                        <Link to={LINK_TO_LAYERS}>
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
                        onClick={(e) => e.target.id === "container" && onChangeFormData("selectedId", null)}
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
                        setFilterName={setFilterName}
                    />
                )
            }
        </div>
    );
};

LayerForm.propTypes = {
    name: PropTypes.string.isRequired,
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
            texture: PropTypes.string.isRequired
        })
    ).isRequired,
    onSaveLayer: PropTypes.func.isRequired,
    onUpdateLayer: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired,
    onChangeFormData: PropTypes.func.isRequired,
    getResources: PropTypes.func.isRequired
};

export default LayerForm;
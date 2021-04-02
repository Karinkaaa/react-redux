import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Grid, InputAdornment, TextField } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { Add, Save } from "@material-ui/icons";
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
                       id, name, elements, selectedId, selectedElement, setSelectedId, onChangeLayerName,
                       onAddElement, onDeleteElement, onChangeElement, onClickPutLayerToForm
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
                            size="medium"
                            variant="contained"
                            startIcon={<Add/>}
                            onClick={onAddElement}
                        >
                            Add new element
                        </Button>
                    </Grid>

                    <Grid item xs={3}>
                        <TextField
                            value={id}
                            disabled
                            InputProps={{ startAdornment: <InputAdornment position="start">ID: </InputAdornment> }}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            value={name}
                            InputProps={{ startAdornment: <InputAdornment position="start">Name: </InputAdornment> }}
                            onChange={e => onChangeLayerName(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={2} className={classes.buttonSave}>
                        <Button
                            size="medium"
                            color={"primary"}
                            variant={"contained"}
                            startIcon={<Save/>}
                            onClick={() => console.log("Save layer")}
                        >
                            Save layer
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
                                />
                            )
                        }
                    </Grid>

                    {
                        selectedId && (
                            <SettingsMenu
                                selectedElement={selectedElement}
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
    elements: PropTypes.arrayOf(PropTypes.shape({
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
        })
    }),
    setSelectedId: PropTypes.func.isRequired,
    onChangeLayerName: PropTypes.func.isRequired,
    onAddElement: PropTypes.func.isRequired,
    onDeleteElement: PropTypes.func.isRequired,
    onChangeElement: PropTypes.func.isRequired,
    onClickPutLayerToForm: PropTypes.func.isRequired
};

export default LayerForm;
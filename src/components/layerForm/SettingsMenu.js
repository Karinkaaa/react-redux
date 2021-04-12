import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, InputAdornment, TextField } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import GroupedResources from "./GroupedResources";

const useStyles = makeStyles({
    menu: {
        background: "linear-gradient(steelblue, paleturquoise, skyblue)",
        height: 700,
        marginTop: 50,
        padding: 20
    },
    title: {
        marginBottom: 50,
        fontSize: 20,
        fontWeight: 900,
        textAlign: "center"
    },
    lastMargin: {
        marginBottom: 15
    }
});

const SettingsMenu = ({ selectedElement, images, animations, dragonBones, onChangeElement, onDeleteElement }) => {
    const classes = useStyles();
    const { position = { x: 0, y: 0 }, size = { height: 100, width: 100 }, ref = "" } = selectedElement;

    return (
        <Grid item xs={2} className={classes.menu}>
            <h3 className={classes.title}>ITEM SETTINGS</h3>

            <TextField
                className={classes.lastMargin}
                fullWidth
                value={selectedElement.id}
                disabled
                InputProps={{ startAdornment: <InputAdornment position="start">ID: </InputAdornment> }}
            />

            <h3>Position:</h3>

            <TextField
                fullWidth
                value={position.x}
                type={"number"}
                InputProps={{ startAdornment: <InputAdornment position="start">x: </InputAdornment> }}
                onChange={e => onChangeElement({
                    ...selectedElement,
                    position: { ...position, x: parseInt(e.target.value) }
                })}
            />

            <TextField
                className={classes.lastMargin}
                fullWidth
                value={position.y}
                type={"number"}
                InputProps={{ startAdornment: <InputAdornment position="start">y: </InputAdornment> }}
                onChange={e => onChangeElement({
                    ...selectedElement,
                    position: { ...position, y: parseInt(e.target.value) }
                })}
            />

            <h3>Size:</h3>

            <TextField
                fullWidth
                value={size.height}
                type={"number"}
                inputProps={{ min: 0, max: 700 }}
                InputProps={{ startAdornment: <InputAdornment position="start">height: </InputAdornment> }}
                onChange={e => onChangeElement({
                    ...selectedElement,
                    size: { ...size, height: parseInt(e.target.value) }
                })}
            />

            <TextField
                className={classes.lastMargin}
                fullWidth
                value={size.width}
                type={"number"}
                inputProps={{ min: 0, max: 875 }}
                InputProps={{ startAdornment: <InputAdornment position="start">width: </InputAdornment> }}
                onChange={e => onChangeElement({
                    ...selectedElement,
                    size: { ...size, width: parseInt(e.target.value) }
                })}
            />

            <h3>Resource:</h3>

            <TextField
                fullWidth
                value={ref}
                disabled
                InputProps={{ startAdornment: <InputAdornment position="start">Ref: </InputAdornment> }}
            />

            <GroupedResources
                images={images}
                animations={animations}
                dragonBones={dragonBones}
                selectedElement={selectedElement}
                onChangeElement={onChangeElement}
            />

            <Button
                fullWidth
                color={"secondary"}
                size={"medium"}
                variant={"contained"}
                startIcon={<DeleteForever/>}
                onClick={() => onDeleteElement(selectedElement.id)}
            >
                Remove
            </Button>
        </Grid>
    );
};

SettingsMenu.propTypes = {
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
    }).isRequired,
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
    onChangeElement: PropTypes.func.isRequired,
    onDeleteElement: PropTypes.func.isRequired
};

export default SettingsMenu;
import React from "react";
import PropTypes from "prop-types";
import { Button, Drawer, InputAdornment, TextField, Toolbar } from "@material-ui/core";
import { DeleteForever } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import GroupedResources from "./GroupedResources";

const useStyles = makeStyles((theme) => ({
    drawer: {
        flexShrink: 0
    },
    title: {
        fontSize: 20,
        fontWeight: 700,
        textAlign: "center",
        marginBottom: 30
    },
    lastMargin: {
        marginBottom: 20
    },
    drawerPaper: {
        width: 170,
        background: theme.palette.blueGrey3Color,
        padding: 20
    },
    btn: {
        marginTop: "auto"
    }
}));

const SettingsMenu = ({ selectedElement, images, animations, dragonBones, onChangeElement, onDeleteElement }) => {
    const classes = useStyles();
    const { position = { x: 0, y: 0 }, size = { height: 100, width: 100 }, ref = "", zIndex = 0 } = selectedElement;

    return (
        <Drawer
            className={classes.drawer}
            variant={"permanent"}
            classes={{ paper: classes.drawerPaper }}
            anchor={"right"}
        >
            <Toolbar/>
            <h3 className={classes.title}>ITEM SETTINGS</h3>

            <TextField
                className={classes.lastMargin}
                fullWidth
                value={selectedElement.id}
                disabled
                InputProps={{ startAdornment: <InputAdornment position={"start"}>ID: </InputAdornment> }}
            />

            <h3>Position:</h3>

            <TextField
                fullWidth
                value={position.x}
                type={"number"}
                InputProps={{ startAdornment: <InputAdornment position={"start"}>x: </InputAdornment> }}
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
                InputProps={{ startAdornment: <InputAdornment position={"start"}>y: </InputAdornment> }}
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
                inputProps={{ min: 0, max: 635 }}
                InputProps={{ startAdornment: <InputAdornment position={"start"}>height: </InputAdornment> }}
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
                InputProps={{ startAdornment: <InputAdornment position={"start"}>width: </InputAdornment> }}
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
                InputProps={{ startAdornment: <InputAdornment position={"start"}>Ref: </InputAdornment> }}
            />

            <GroupedResources
                images={images}
                animations={animations}
                dragonBones={dragonBones}
                selectedElement={selectedElement}
                onChangeElement={onChangeElement}
            />

            <TextField
                className={classes.lastMargin}
                fullWidth
                value={zIndex}
                type={"number"}
                InputProps={{ startAdornment: <InputAdornment position={"start"}>Z-index: </InputAdornment> }}
                onChange={e => onChangeElement({
                    ...selectedElement,
                    zIndex: parseInt(e.target.value)
                })}
            />

            <Button
                className={classes.btn}
                fullWidth
                color={"secondary"}
                size={"medium"}
                variant={"contained"}
                startIcon={<DeleteForever/>}
                onClick={() => onDeleteElement(selectedElement.id)}
            >
                Remove
            </Button>

            <Toolbar/>
        </Drawer>
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
        ref: PropTypes.string,
        zIndex: PropTypes.number
    }).isRequired,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    animations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired
    ).isRequired,
    dragonBones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            texture: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onChangeElement: PropTypes.func.isRequired,
    onDeleteElement: PropTypes.func.isRequired
};

export default SettingsMenu;
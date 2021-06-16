import React from "react";
import PropTypes from "prop-types";
import { Drawer, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ElementIcon from "./ElementIcon";

const useStyles = makeStyles({
    drawerPaper: {
        width: 100,
        padding: 20,
        marginLeft: 250,
        background: "transparent",
        display: "flow-root",
        border: "none",
        bottom: "auto"
    }
});

const ElementsList = ({ elements, selectedId, images, animations, dragonBones, setSelectedId, onChangeElement }) => {
    const classes = useStyles();

    return (
        <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant={"permanent"}
            anchor={"left"}
        >
            <Toolbar/>
            {
                elements.sort((el1, el2) => (el1.zIndex || 0) - (el2.zIndex || 0)).map(el =>
                    <ElementIcon
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
            <Toolbar/>
        </Drawer>
    );
};

ElementsList.propTypes = {
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
            texture: PropTypes.string.isRequired,
            textureJson: PropTypes.string.isRequired,
            skeleton: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    setSelectedId: PropTypes.func.isRequired,
    onChangeElement: PropTypes.func.isRequired
};

export default ElementsList;
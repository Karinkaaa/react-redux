import React from "react";
import { Rnd } from "react-rnd";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    rnd: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "move",
        textAlign: "center",
        background: "#9fbac7",
        position: "absolute",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat"
    }
});

const ResizableDraggableLayerElement = ({
                                            element, onChangeElement, isSelected, setSelectedId,
                                            images, animations, dragonBones
                                        }) => {
    const classes = useStyles();
    const { position = { x: 0, y: 0 }, size = { height: 100, width: 100 }, ref = "", zIndex = 0 } = element;

    const handleDrag = (e, d) => {
        onChangeElement({
            ...element,
            position: {
                x: d.x,
                y: d.y
            }
        });
    };

    const handleResize = (e, direction, ref, delta, position) => {
        onChangeElement({
            ...element,
            position,
            size: {
                height: ref.style.height === "auto" ? size.height : parseInt(ref.style.height),
                width: ref.style.width === "auto" ? size.width : parseInt(ref.style.width)
            }
        });
    };

    const backgroundImage = () => {
        let result = "";

        if ((result = images.find((item) => item.id === ref))) {
            return result.url;
        } else if ((result = animations.find((item) => item.id === ref))) {
            return result.urls[0];
        } else if ((result = dragonBones.find((item) => item.id === ref))) {
            return result.texture;
        }

        return result;
    };

    return (
        <Rnd
            className={classes.rnd}
            position={position}
            size={size}
            onDragStart={() => setSelectedId(element.id)}
            onDragStop={handleDrag}
            onResizeStop={handleResize}
            style={{
                zIndex: isSelected ? 999 : zIndex,
                border: isSelected && "solid 1px white",
                boxShadow: isSelected && "0 0 25px white, 0 5px 15px cyan",
                backgroundImage: `url('${backgroundImage()}')`
            }}
        >
            <div>
                <h5>x: {position.x}</h5>
                <h5>y: {position.y}</h5>
            </div>
        </Rnd>
    );
};

ResizableDraggableLayerElement.propTypes = {
    element: PropTypes.shape({
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
    onChangeElement: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    setSelectedId: PropTypes.func.isRequired,
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
            urls: PropTypes.arrayOf(PropTypes.string).isRequired
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
    ).isRequired
};

export default ResizableDraggableLayerElement;
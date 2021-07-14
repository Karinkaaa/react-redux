import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    btn: {
        background: theme.palette.blueGrey3Color,
        backgroundRepeat: "round",
        flexDirection: "column",
        overflow: "scroll",
        marginTop: 20,
        height: 40
    }
}));

const ElementIcon = ({ element, isSelected, setSelectedId, images, animations, dragonBones }) => {
    const classes = useStyles();
    const { id, ref = "", zIndex = 0 } = element;

    const background = () => {
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
        <Button
            className={classes.btn}
            style={{
                zIndex: zIndex || 9999,
                border: isSelected && "solid 1px white",
                boxShadow: isSelected && "0 0 5px white, 0 5px 10px darkkhaki",
                backgroundImage: `url('${background()}')`
            }}
            onClick={() => setSelectedId(id)}
        />
    );
};

ElementIcon.propTypes = {
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
            urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired
    ).isRequired,
    dragonBones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            texture: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

export default ElementIcon;
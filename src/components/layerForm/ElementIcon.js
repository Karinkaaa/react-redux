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

const ElementIcon = ({ element, isSelected, background, setSelectedId }) => {
    const classes = useStyles();
    const { id, zIndex = 0 } = element;

    return (
        <Button
            className={classes.btn}
            style={{
                zIndex: zIndex || 9999,
                border: isSelected && "solid 1px white",
                boxShadow: isSelected && "0 0 5px white, 0 5px 10px darkkhaki",
                backgroundImage: `url('${background}')`
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
    background: PropTypes.string,
    setSelectedId: PropTypes.func.isRequired
};

export default ElementIcon;
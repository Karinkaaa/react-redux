import React from "react";
import PropTypes from "prop-types";
import Slider from "@material-ui/core/Slider";
import { INITIAL_SPEED } from "../../utils/constants";

const marks = [
    {
        value: 0.01,
        label: "0.01"
    },
    {
        value: 0.1,
        label: "0.1"
    },
    {
        value: 0.2,
        label: "0.2"
    },
    {
        value: 0.3,
        label: "0.3"
    },
    {
        value: 0.4,
        label: "0.4"
    },
    {
        value: 0.5,
        label: "0.5"
    },
    {
        value: 0.6,
        label: "0.6"
    },
    {
        value: 0.7,
        label: "0.7"
    },
    {
        value: 0.8,
        label: "0.8"
    },
    {
        value: 0.9,
        label: "0.9"
    },
    {
        value: 1.0,
        label: "1"
    }
];

const AnimationSpeed = ({ speed, onChangeSpeed }) => (
    <Slider
        defaultValue={INITIAL_SPEED}
        aria-labelledby={"discrete-slider-small-steps"}
        step={INITIAL_SPEED}
        marks={marks}
        min={INITIAL_SPEED}
        max={1}
        valueLabelDisplay={"auto"}
        value={speed}
        onChange={(e, value) => onChangeSpeed(value)}
    />
);

AnimationSpeed.propTypes = {
    speed: PropTypes.number.isRequired,
    onChangeSpeed: PropTypes.func.isRequired
};

export default AnimationSpeed;
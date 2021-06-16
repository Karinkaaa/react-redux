import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { ANIMATIONS_GROUP, DRAGON_BONES_GROUP, IMAGES_GROUP } from "../../utils/constants";

const GroupedResources = ({ images, animations, dragonBones, selectedElement, onChangeElement }) => {
    const sortResourcesByName = (resources) =>
        resources.sort((a, b) => -b.name.localeCompare(a.name));

    const resources = sortResourcesByName(images).map((image) => ({ ...image, groupName: IMAGES_GROUP }))
        .concat(sortResourcesByName(animations).map((animation) => ({ ...animation, groupName: ANIMATIONS_GROUP })))
        .concat(sortResourcesByName(dragonBones).map((dragonBone) => ({ ...dragonBone, groupName: DRAGON_BONES_GROUP})));

    const options = resources.map((option) => option);
    const selectedOption = options.find((option) => option.id === selectedElement.ref) || null;

    return (
        <Autocomplete
            fullWidth
            style={{ marginBottom: 20 }}
            options={options}
            value={selectedOption}
            getOptionSelected={((option, value) => option.id === value.id)}
            groupBy={(option) => option.groupName}
            getOptionLabel={(option) => option.name}
            onChange={(event, value) => onChangeElement({
                ...selectedElement,
                ref: value ? value.id : ""
            })}
            renderInput={(params) => <TextField {...params} label={"Resources"}/>}
        />
    );
};

GroupedResources.propTypes = {
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
    onChangeElement: PropTypes.func.isRequired
};

export default GroupedResources;
import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import DragonBonesTableRow from "./DragonBonesTableRow";

const DragonBonesTableBody = ({ dragonBones, onChangeIsOpen, setAnchorEl, onClickPutDragonBonesResourceToForm }) => {
    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Grid item xs={12}>
            {
                dragonBones
                    .map(({ id, name, texture, textureJson, skeleton }) =>
                        <DragonBonesTableRow
                            key={id}
                            id={id}
                            name={name}
                            texture={texture}
                            textureJson={textureJson}
                            skeleton={skeleton}
                            handleOpen={handleOpen}
                            handleToggle={handleToggle}
                            onClickPutDragonBonesResourceToForm={onClickPutDragonBonesResourceToForm}
                        />
                    )}
        </Grid>
    );
};

DragonBonesTableBody.propTypes = {
    dragonBones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            texture: PropTypes.string.isRequired,
            textureJson: PropTypes.string.isRequired,
            skeleton: PropTypes.string.isRequired
        })
    ).isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onClickPutDragonBonesResourceToForm: PropTypes.func.isRequired
};

export default DragonBonesTableBody;
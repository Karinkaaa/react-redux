import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ConfirmMenu from "../confirmMenu";
import DragonBonesCard from "./DragonBonesCard";

const DragonBonesResourceCards = ({ dragonBones, onRemoveDragonBone, onPutDataToForm }) => {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container spacing={5} style={{ marginTop: 50 }}>
            {
                dragonBones.map(({ id, name, texture }) =>
                    <Grid key={id} item sm={3}>
                        <DragonBonesCard
                            id={id}
                            name={name}
                            texture={texture}
                            setAnchorEl={setAnchorEl}
                            onPutDataToForm={onPutDataToForm}
                        />
                    </Grid>
                )
            }
            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onRemoveDragonBone}
            />
        </Grid>
    );
};

DragonBonesResourceCards.propTypes = {
    dragonBones: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            texture: PropTypes.string.isRequired,
            textureJson: PropTypes.string.isRequired,
            skeleton: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onRemoveDragonBone: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default DragonBonesResourceCards;
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ConfirmMenu from "../confirmMenu";
import AnimationCard from "./AnimationCard";

const AnimationResourceCards = ({ animations, onRemoveAnimation, onPutDataToForm }) => {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container spacing={5} style={{ marginTop: 50 }}>
            {
                animations.map(({ id, name, urls }) =>
                    <Grid key={id} item sm={3}>
                        <AnimationCard
                            id={id}
                            name={name}
                            urls={urls}
                            setAnchorEl={setAnchorEl}
                            onPutDataToForm={onPutDataToForm}
                        />
                    </Grid>
                )
            }
            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onRemoveAnimation}
            />
        </Grid>
    );
};

AnimationResourceCards.propTypes = {
    animations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            urls: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
        }).isRequired
    ).isRequired,
    onRemoveAnimation: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default AnimationResourceCards;
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ConfirmMenu from "../confirmMenu";
import AnimationCard from "./AnimationCard";

const AnimationResourceCards = ({ animations, onDelete, onChangeIsOpen, onClickPutResourceToForm }) => {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container spacing={5} style={{ marginTop: 50 }}>
            {
                animations
                    .map(({ id, name, urls, speed }) =>
                        <Grid key={id} item sm={3}>
                            <AnimationCard
                                id={id}
                                name={name}
                                urls={urls}
                                speed={speed}
                                setAnchorEl={setAnchorEl}
                                onChangeIsOpen={onChangeIsOpen}
                                onClickPutResourceToForm={onClickPutResourceToForm}
                            />
                        </Grid>
                    )
            }
            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Grid>
    );
};

AnimationResourceCards.propTypes = {
    animations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            urls: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutResourceToForm: PropTypes.func.isRequired
};

export default AnimationResourceCards;
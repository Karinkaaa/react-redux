import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ConfirmMenu from "../confirmMenu";
import AudioCard from "./AudioCard";

const AudioResourceCards = ({ audios, onDelete, onPutDataToForm }) => {
    const [anchorEl, setAnchorEl] = useState(false);
    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container spacing={5} style={{ marginTop: 50 }}>
            {
                audios
                    .map(({ id, name, url }) =>
                        <Grid key={id} item sm={3}>
                            <AudioCard
                                id={id}
                                name={name}
                                url={url}
                                setAnchorEl={setAnchorEl}
                                onPutDataToForm={onPutDataToForm}
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

AudioResourceCards.propTypes = {
    audios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default AudioResourceCards;
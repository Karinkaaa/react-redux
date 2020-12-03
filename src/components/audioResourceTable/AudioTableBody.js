import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import AudioTableRow from "./AudioTableRow";

const AudioTableBody = ({ audios, onChangeIsOpen, setAnchorEl, onClickPutAudioResourceToForm }) => {
    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Grid item xs={12}>
            {
                audios
                    .map(({ id, name, url }) =>
                        <AudioTableRow
                            key={id}
                            id={id}
                            name={name}
                            url={url}
                            handleOpen={handleOpen}
                            handleToggle={handleToggle}
                            onClickPutAudioResourceToForm={onClickPutAudioResourceToForm}
                        />
                    )}
        </Grid>
    );
};

AudioTableBody.propTypes = {
    audios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onClickPutAudioResourceToForm: PropTypes.func.isRequired
};

export default AudioTableBody;
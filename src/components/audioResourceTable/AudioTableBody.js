import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import AudioTableRow from "./AudioTableRow";

const AudioTableBody = ({ audios, setAnchorEl, onPutDataToForm }) => {
    const handleOpen = (id) => onPutDataToForm(id);
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
        }).isRequired
    ).isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default AudioTableBody;
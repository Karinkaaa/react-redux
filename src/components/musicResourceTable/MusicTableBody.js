import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import MusicTableRow from "./MusicTableRow";
import { isPlayed, pause, play, stop } from "../../utils/audioMethods";

const MusicTableBody = ({ music, onChangeIsOpen, setAnchorEl, onClickPutMusicResourceToForm }) => {
    const [oldUrl, setOldUrl] = useState();
    const [currentUrl, setCurrentUrl] = useState();

    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    const handleClick = (url) => {
        if (oldUrl && oldUrl !== url) {
            stop(oldUrl);
            play(url);
            setCurrentUrl(url);
        } else if (isPlayed(url)) {
            pause(url);
            setCurrentUrl("");
        } else {
            play(url);
            setCurrentUrl(url);
        }
        setOldUrl(url);
    };

    return (
        <Grid item xs={12}>
            {
                music
                    .map(({ id, name, url }) =>
                        <MusicTableRow
                            key={id}
                            id={id}
                            name={name}
                            url={url}
                            currentUrl={currentUrl}
                            handleOpen={handleOpen}
                            handleToggle={handleToggle}
                            handleClick={() => handleClick(url)}
                            onClickPutMusicResourceToForm={onClickPutMusicResourceToForm}
                        />
                    )}
        </Grid>
    );
};

MusicTableBody.propTypes = {
    music: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onClickPutMusicResourceToForm: PropTypes.func.isRequired
};

export default MusicTableBody;
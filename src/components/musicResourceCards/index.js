import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ConfirmMenu from "../confirmMenu";
import MusicCard from "./MusicCard";

const MusicResourceCards = ({ music, onDelete, onChangeIsOpen, onClickPutMusicResourceToForm }) => {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container spacing={5} style={{ marginTop: 50 }}>
            {
                music
                    .map(({ id, name, url }) =>
                        <Grid key={id} item sm={3}>
                            <MusicCard
                                id={id}
                                name={name}
                                url={url}
                                setAnchorEl={setAnchorEl}
                                onChangeIsOpen={onChangeIsOpen}
                                onClickPutMusicResourceToForm={onClickPutMusicResourceToForm}
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

MusicResourceCards.propTypes = {
    music: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutMusicResourceToForm: PropTypes.func.isRequired
};

export default MusicResourceCards;
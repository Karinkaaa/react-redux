import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import { Pause, PlayArrow } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { clickPlayOrPause } from "../../actions/audioPlayer";

const useStyles = makeStyles((theme) => ({
    playIcon: {
        color: theme.palette.primary2Color
    }
}));

const mapStateToProps = (state) => {
    return {
        currentUrl: state.audioPlayer.currentUrl,
        prevUrl: state.audioPlayer.prevUrl
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickPlayOrPause: (url) => dispatch(clickPlayOrPause(url))
    };
};

const AudioPlayButton = ({ url, currentUrl, onClickPlayOrPause }) => {
    const classes = useStyles();

    return (
        <IconButton
            className={classes.playIcon}
            onClick={() => onClickPlayOrPause(url)}
        >
            {currentUrl === url ? <Pause/> : <PlayArrow/>}
        </IconButton>
    );
};

AudioPlayButton.propTypes = {
    url: PropTypes.string.isRequired,
    currentUrl: PropTypes.string,
    onClickPlayOrPause: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayButton);
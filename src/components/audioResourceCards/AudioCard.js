import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import AudioPlayButton from "../audioPlayer";
import { LINK_TO_AUDIOS_UPDATE_FORM } from "../../utils/links";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.blueGrey1Color,
        color: theme.palette.primary3Color
    },
    action: {
        justifyContent: "space-around"
    },
    updateIcon: {
        color: theme.palette.success3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    }
}));

const AudioCard = ({ id, name, url, setAnchorEl, onPutDataToForm }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant={"h6"}>
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions className={classes.action}>
                <AudioPlayButton url={url}/>

                <Link to={LINK_TO_AUDIOS_UPDATE_FORM.replace(":id", id)}>
                    <IconButton
                        data-id={id}
                        onClick={() => onPutDataToForm(id)}
                    >
                        <Update className={classes.updateIcon}/>
                    </IconButton>
                </Link>

                <IconButton
                    data-id={id}
                    onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                    <Delete className={classes.deleteIcon}/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

AudioCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default AudioCard;
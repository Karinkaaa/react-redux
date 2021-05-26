import React from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.blueGrey1Color,
        color: theme.palette.primary3Color
    },
    media: {
        height: 160
    },
    updateIcon: {
        color: theme.palette.success3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    }
}));

const ImageCard = ({ id, name, url, setAnchorEl, onClickPutResourceToForm }) => {
    const classes = useStyles();
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={url}
                />
                <CardContent>
                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <IconButton
                    data-id={id}
                    onClick={() => onClickPutResourceToForm(id)}
                >
                    <Update className={classes.updateIcon}/>
                </IconButton>

                <IconButton
                    data-id={id}
                    onClick={handleToggle}
                >
                    <Delete className={classes.deleteIcon}/>
                </IconButton>
            </CardActions>
        </Card>
    );
};

ImageCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onClickPutResourceToForm: PropTypes.func.isRequired
};

export default ImageCard;
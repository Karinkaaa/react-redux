import React from "react";
import PropTypes from "prop-types";
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
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

const DragonBonesCard = ({
                             id, name, texture, textureJson, skeleton,
                             setAnchorEl, onChangeIsOpen, onClickPutDragonBonesResourceToForm
                         }) => {
    const classes = useStyles();

    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={texture}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <IconButton
                    data-id={id}
                    onClick={() => {
                        handleOpen();
                        onClickPutDragonBonesResourceToForm({ id, name, texture, textureJson, skeleton });
                    }}
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

DragonBonesCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    texture: PropTypes.string.isRequired,
    textureJson: PropTypes.string.isRequired,
    skeleton: PropTypes.string.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    onClickPutDragonBonesResourceToForm: PropTypes.func.isRequired
};

export default DragonBonesCard;
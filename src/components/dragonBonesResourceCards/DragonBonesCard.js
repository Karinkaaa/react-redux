import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core";
import { Delete, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { LINK_TO_DRAGON_BONE_UPDATE_FORM } from "../../utils/links";

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

const DragonBonesCard = ({ id, name, texture, setAnchorEl, onPutDataToForm }) => {
    const classes = useStyles();
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={texture}
                />

                <CardContent>
                    <Typography gutterBottom variant={"h5"} component={"h2"}>
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Link to={LINK_TO_DRAGON_BONE_UPDATE_FORM.replace(":id", id)}>
                    <IconButton
                        data-id={id}
                        onClick={() => onPutDataToForm(id)}
                    >
                        <Update className={classes.updateIcon}/>
                    </IconButton>
                </Link>

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
    setAnchorEl: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default DragonBonesCard;
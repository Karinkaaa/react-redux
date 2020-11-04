import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Delete, Update} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import ConfirmMenu from "../confirmMenu";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.blueGrey1Color,
        color: theme.palette.primary3Color
    },
    media: {
        height: 160,
    },
    content: {
        marginTop: 50,
    },
    updateIcon: {
        color: theme.palette.update3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color,
    }
}));

const ImageResourceCards = ({images, count, onDelete, onChangeIsOpen, onClickPutImageResourceToForm}) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(false);
    const handleOpen = () => onChangeIsOpen(true);

    const handleToggle = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid container spacing={5} className={classes.content}>
            {
                images
                    .map(({id, name, url}) =>

                        <Grid key={id} item sm={3}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={url}
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
                                            onClickPutImageResourceToForm({id, name, url});
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
                        </Grid>
                    )}

            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Grid>
    )
}

ImageResourceCards.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ImageResourceCards
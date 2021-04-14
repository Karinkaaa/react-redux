import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { Remove } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    grid: {
        paddingTop: 10
    },
    media: {
        padding: 12,
        marginRight: 22,
        marginLeft: 20
    },
    iconBtn: {
        marginLeft: 10
    }
});

const UrlComponent = ({ url, index, isValidUrls, onChangeUrl, onDeleteImage }) => {
    const classes = useStyles();

    return (
        <Grid container item xs={12} key={uuid()} className={classes.grid}>
            <Grid item xs={1} className={classes.media}>
                <Avatar src={url}/>
            </Grid>

            <Grid item xs={9}>
                <TextField
                    label={"URL"}
                    placeholder={"Enter the URL of image resource"}
                    variant={"outlined"}
                    value={url}
                    required
                    fullWidth
                    error={!isValidUrls[index]}
                    onChange={e => onChangeUrl(e.target.value)}
                />
            </Grid>

            <Grid item xs={1}>
                <IconButton
                    className={classes.iconBtn}
                    onClick={() => onDeleteImage(index)}
                >
                    <Remove color={"secondary"}/>
                </IconButton>
            </Grid>
        </Grid>
    );
};

UrlComponent.propTypes = {
    url: PropTypes.string.isRequired,
    index: PropTypes.number,
    isValidUrls: PropTypes.arrayOf(PropTypes.bool).isRequired,
    onChangeUrl: PropTypes.func.isRequired,
    onDeleteImage: PropTypes.func.isRequired
};

export default UrlComponent;
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Button, Grid, IconButton, TextField } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
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
    },
    btn: {
        marginTop: 6,
        width: 100
    }
});

const UrlComponent = ({ url, index, onChangeUrl, onRemoveImage }) => {
    const classes = useStyles();

    const [isDisabled, setIsDisabled] = useState(true);
    const [value, setValue] = useState(url);

    const handleClickButton = () => {
        setIsDisabled(!isDisabled);
        if (!isDisabled) onChangeUrl(value, index);
    };

    return (
        <Grid container item xs={12} className={classes.grid}>
            <Grid item xs={1} className={classes.media}>
                <Avatar src={url}/>
            </Grid>

            <Grid item xs={8}>
                <TextField
                    label={"URL"}
                    placeholder={"Enter the URL of image resource"}
                    variant={"outlined"}
                    value={value}
                    required
                    fullWidth
                    disabled={isDisabled}
                    onChange={e => setValue(e.target.value)}
                />
            </Grid>

            <Grid item xs={1}>
                <IconButton
                    className={classes.iconBtn}
                    onClick={() => onRemoveImage(index)}
                >
                    <Delete color={"secondary"}/>
                </IconButton>
            </Grid>

            <Grid item>
                <Button
                    className={classes.btn}
                    fullWidth
                    color={isDisabled ? "secondary" : "primary"}
                    variant={"contained"}
                    onClick={handleClickButton}
                >
                    {isDisabled ? "EDIT" : "SAVE"}
                </Button>
            </Grid>
        </Grid>
    );
};

UrlComponent.propTypes = {
    url: PropTypes.string.isRequired,
    index: PropTypes.number,
    onChangeUrl: PropTypes.func.isRequired,
    onRemoveImage: PropTypes.func.isRequired
};

export default UrlComponent;
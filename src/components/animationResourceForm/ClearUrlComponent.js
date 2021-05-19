import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Grid, IconButton, TextField } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { isValidImageUrl } from "../../utils/validation";

const useStyles = makeStyles({
    grid: {
        marginTop: 5
    },
    media: {
        padding: 12,
        marginRight: 25
    },
    iconBtn: {
        marginLeft: 10
    },
    clearUrl: {
        maxWidth: "77.7%"
    }
});

const ClearUrlComponent = ({ onAddImage }) => {
    const classes = useStyles();

    const [url, setUrl] = useState("");
    const isValidUrl = isValidImageUrl(url);

    const handleClickAdd = () => {
        onAddImage(url);
        setUrl("");
    };

    return (
        <Grid container item xs={12} className={classes.grid}>
            <Grid item xs={1} className={classes.media}>
                <Avatar src={url}/>
            </Grid>

            <Grid item xs={10} className={classes.clearUrl}>
                <TextField
                    label={"URL"}
                    placeholder={"Enter the URL of image resource"}
                    variant={"outlined"}
                    value={url}
                    required
                    fullWidth
                    error={!isValidUrl}
                    onChange={e => setUrl(e.target.value)}
                />
            </Grid>

            <Grid item xs={1}>
                <IconButton
                    className={classes.iconBtn}
                    onClick={handleClickAdd}
                    disabled={!isValidUrl}
                >
                    <Add color={"primary"}/>
                </IconButton>
            </Grid>
        </Grid>
    );
};

ClearUrlComponent.propTypes = {
    onAddImage: PropTypes.func.isRequired
};

export default ClearUrlComponent;
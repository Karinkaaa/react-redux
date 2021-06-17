import React, { useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Button, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    grid: {
        marginTop: 5
    },
    media: {
        padding: 12,
        marginRight: 25
    },
    btn: {
        margin: "10px 0 0 99px",
        width: 100
    },
    clearUrl: {
        maxWidth: "69%"
    }
});

const BlankUrlComponent = ({ onAddImage }) => {
    const classes = useStyles();
    const [url, setUrl] = useState("");

    const handleClickAdd = () => {
        onAddImage(url);
        setUrl("");
    };

    return (
        <Grid container item xs={12} className={classes.grid}>
            <Grid item xs={1} className={classes.media}>
                <Avatar src={url}/>
            </Grid>

            <Grid item xs={9} className={classes.clearUrl}>
                <TextField
                    label={"URL"}
                    placeholder={"Enter the URL of image resource"}
                    variant={"outlined"}
                    value={url}
                    required
                    fullWidth
                    onChange={e => setUrl(e.target.value)}
                />
            </Grid>

            <Grid item xs={1}>
                <Button
                    className={classes.btn}
                    color={"primary"}
                    variant={"contained"}
                    onClick={handleClickAdd}
                >
                    ADD
                </Button>
            </Grid>
        </Grid>
    );
};

BlankUrlComponent.propTypes = {
    onAddImage: PropTypes.func.isRequired
};

export default BlankUrlComponent;
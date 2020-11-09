import React from "react";
import {Link} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {Home} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import {MAIN_PAGE} from "../../utils/links";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: "#105090",
    },
    homeBtn: {
        marginLeft: -20,
        color: theme.palette.blueGrey3Color
    },
    header: {
        paddingLeft: theme.spacing(2),
        color: theme.palette.primary3Color,
        fontSize: 20,
        fontWeight: 700,
    },
}));

export default () => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Link to={MAIN_PAGE}>
                    <IconButton>
                        <Home className={classes.homeBtn}/>
                    </IconButton>
                </Link>

                <Typography
                    noWrap
                    variant="h6"
                    className={classes.header}
                >
                    BOOSiNKA
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

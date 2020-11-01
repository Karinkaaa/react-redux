import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {Home} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {MAIN_PAGE} from "../../links";
import {useStyles} from "../navigationMenu";

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
                    BOOS KIBOOS
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

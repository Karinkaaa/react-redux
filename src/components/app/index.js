import React from "react";
import "./App.css";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import MenuComponent from "../appBar/MenuComponent";
import PermanentHeader from "../appBar/PermanentHeader";
import Routers from "../routers";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        minHeight: "100vh",
        background: "linear-gradient(rgba(0, 40, 68, 0.9), rgba(0, 43, 80, 0.5))"
    },
    content: {
        flexGrow: 1
    }
}));

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>

            <PermanentHeader/>
            <MenuComponent/>

            <div className={classes.content}>
                <Toolbar/>
                <Routers/>
                <Toolbar/>
            </div>
        </div>
    );
}

import React from 'react';
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import PermanentHeader from "../appBar/PermanentHeader";
import Routers from "../routers";
import Toolbar from "@material-ui/core/Toolbar";
import {useStyles} from "../navigationMenu";
import MenuComponent from "../appBar/MenuComponent";

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
            </div>
        </div>
    );
}

import React from 'react';
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import PermanentHeader from "../appBar/PermanentHeader";
import MenuInLeft, {useStyles} from "../appBar/MenuInLeft";
import Routers from "../router/Routers";

function App() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>

            <PermanentHeader/>
            <MenuInLeft/>

            <main className={classes.content}>
                <Routers/>
            </main>
        </div>
    );
}

export default App;

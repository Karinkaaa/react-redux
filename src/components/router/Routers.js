import React from "react";
import {Route, Switch} from 'react-router-dom';
import MainPage from "../main/MainPage";
import ImagesPage from "../../containers/ImagesPage";
import {IMAGES, MAIN_PAGE} from "../../links";

export default () => {
    return (
        <main>
            <Switch>
                <Route exact path={MAIN_PAGE} component={MainPage}/>
                <Route exact path={IMAGES} component={ImagesPage}/>
            </Switch>
        </main>
    )
}
import React from "react";
import {Route, Switch} from 'react-router-dom';
import MainPage from "../mainPage";
import Images from "../../pages/images";
import {IMAGES, MAIN_PAGE} from "../../links";

export default () => {
    return (
        <main>
            <Switch>
                <Route exact path={MAIN_PAGE} component={MainPage}/>
                <Route exact path={IMAGES} component={Images}/>
            </Switch>
        </main>
    )
}
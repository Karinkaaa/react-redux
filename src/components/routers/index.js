import React from "react";
import {Route, Switch} from 'react-router-dom';
import {ANIMATIONS, IMAGES, MAIN_PAGE} from "../../utils/links";
import MainPage from "../mainPage";
import Images from "../../pages/images";
import Animations from "../../components/animations";

export default () => {
    return (
        <main>
            <Switch>
                <Route exact path={MAIN_PAGE} component={MainPage}/>
                <Route exact path={IMAGES} component={Images}/>
                <Route exact path={ANIMATIONS} component={Animations}/>
            </Switch>
        </main>
    )
}
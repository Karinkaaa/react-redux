import React from "react";
import { Route, Switch } from "react-router-dom";
import { ANIMATIONS, DRAGON_BONES, DRUMS, IMAGES, MAIN_PAGE, AUDIO } from "../../utils/links";
import MainPage from "../mainPage";
import Images from "../../containers/imagePage";
import Animations from "../../containers/animationPage";
import DragonBones from "../../containers/dragonBonesPage";
import Audio from "../../containers/audioPage";
import Drums from "../../pages/drums";

export default () => (
    <main>
        <Switch>
            <Route exact path={MAIN_PAGE} component={MainPage}/>
            <Route exact path={IMAGES} component={Images}/>
            <Route exact path={ANIMATIONS} component={Animations}/>
            <Route exact path={DRAGON_BONES} component={DragonBones}/>
            <Route exact path={AUDIO} component={Audio}/>
            <Route exact path={DRUMS} component={Drums}/>
        </Switch>
    </main>
);
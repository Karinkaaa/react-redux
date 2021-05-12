import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../mainPage";
import Images from "../../containers/imagePage";
import Animations from "../../containers/animationPage";
import AnimationForm from "../../containers/animationResourceForm";
import DragonBones from "../../containers/dragonBonesPage";
import Audio from "../../containers/audioPage";
import Drums from "../../pages/drums";
import Rules from "../../containers/rulePage";
import LayerForm from "../../containers/layerForm";
import Layers from "../../containers/layerPage";
import Info from "../../pages/info";
import InfoForm from "../../pages/info/InfoForm";
import {
    ANIMATION_FORM,
    ANIMATIONS,
    AUDIOS,
    DRAGON_BONES,
    DRUMS,
    IMAGES,
    INFO,
    INFO_CREATE_FORM,
    INFO_UPDATE_FORM,
    LAYER_FORM,
    LAYERS,
    MAIN_PAGE,
    RULES
} from "../../utils/links";

const Routers = () => (
    <main>
        <Switch>
            <Route exact path={MAIN_PAGE} component={MainPage}/>
            <Route exact path={IMAGES} component={Images}/>
            <Route exact path={ANIMATIONS} component={Animations}/>
            <Route exact path={ANIMATION_FORM} component={AnimationForm}/>
            <Route exact path={DRAGON_BONES} component={DragonBones}/>
            <Route exact path={AUDIOS} component={Audio}/>
            <Route exact path={DRUMS} component={Drums}/>
            <Route exact path={RULES} component={Rules}/>
            <Route exact path={LAYERS} component={Layers}/>
            <Route exact path={LAYER_FORM} component={LayerForm}/>
            <Route exact path={INFO} component={Info}/>
            <Route exact path={INFO_UPDATE_FORM} component={InfoForm}/>
            <Route exact path={INFO_CREATE_FORM} component={InfoForm}/>
        </Switch>
    </main>
);

export default Routers;
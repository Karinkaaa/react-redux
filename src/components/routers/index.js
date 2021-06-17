import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../mainPage";
import Images from "../../containers/imagePage";
import ImageForm from "../../containers/imageResourceForm";
import Animations from "../../containers/animationPage";
import AnimationForm from "../../containers/animationResourceForm";
import DragonBones from "../../containers/dragonBonesPage";
import DragonBoneForm from "../../containers/dragonBoneResourceForm";
import Audio from "../../containers/audioPage";
import AudioForm from "../../containers/audioResourceForm";
import Drums from "../../pages/drums";
import Rules from "../../containers/rulePage";
import RuleForm from "../../containers/ruleForm";
import LayerForm from "../../containers/layerForm";
import Layers from "../../containers/layerPage";
import Movies from "../../containers/moviesPage";
import MovieForm from "../../containers/movieForm";
import {
    LINK_TO_ANIMATION_CREATE_FORM,
    LINK_TO_ANIMATION_UPDATE_FORM,
    LINK_TO_ANIMATIONS,
    LINK_TO_AUDIOS,
    LINK_TO_AUDIOS_CREATE_FORM,
    LINK_TO_AUDIOS_UPDATE_FORM,
    LINK_TO_DRAGON_BONE_CREATE_FORM,
    LINK_TO_DRAGON_BONE_UPDATE_FORM,
    LINK_TO_DRAGON_BONES,
    LINK_TO_DRUMS,
    LINK_TO_IMAGE_CREATE_FORM,
    LINK_TO_IMAGE_UPDATE_FORM,
    LINK_TO_IMAGES,
    LINK_TO_LAYER_FORM,
    LINK_TO_LAYERS,
    LINK_TO_MAIN_PAGE,
    LINK_TO_MOVIE_CREATE_FORM,
    LINK_TO_MOVIE_UPDATE_FORM,
    LINK_TO_MOVIES,
    LINK_TO_RULES,
    LINK_TO_RULES_CREATE_FORM,
    LINK_TO_RULES_UPDATE_FORM
} from "../../utils/links";

const Routers = () => (
    <main>
        <Switch>
            <Route exact path={LINK_TO_MAIN_PAGE} component={MainPage}/>
            <Route exact path={LINK_TO_IMAGES} component={Images}/>
            <Route exact path={LINK_TO_IMAGE_CREATE_FORM} component={ImageForm}/>
            <Route exact path={LINK_TO_IMAGE_UPDATE_FORM} component={ImageForm}/>
            <Route exact path={LINK_TO_ANIMATIONS} component={Animations}/>
            <Route exact path={LINK_TO_ANIMATION_CREATE_FORM} component={AnimationForm}/>
            <Route exact path={LINK_TO_ANIMATION_UPDATE_FORM} component={AnimationForm}/>
            <Route exact path={LINK_TO_DRAGON_BONES} component={DragonBones}/>
            <Route exact path={LINK_TO_DRAGON_BONE_CREATE_FORM} component={DragonBoneForm}/>
            <Route exact path={LINK_TO_DRAGON_BONE_UPDATE_FORM} component={DragonBoneForm}/>
            <Route exact path={LINK_TO_AUDIOS} component={Audio}/>
            <Route exact path={LINK_TO_AUDIOS_CREATE_FORM} component={AudioForm}/>
            <Route exact path={LINK_TO_AUDIOS_UPDATE_FORM} component={AudioForm}/>
            <Route exact path={LINK_TO_DRUMS} component={Drums}/>
            <Route exact path={LINK_TO_RULES} component={Rules}/>
            <Route exact path={LINK_TO_RULES_CREATE_FORM} component={RuleForm}/>
            <Route exact path={LINK_TO_RULES_UPDATE_FORM} component={RuleForm}/>
            <Route exact path={LINK_TO_LAYERS} component={Layers}/>
            <Route exact path={LINK_TO_LAYER_FORM} component={LayerForm}/>
            <Route exact path={LINK_TO_MOVIES} component={Movies}/>
            <Route exact path={LINK_TO_MOVIE_UPDATE_FORM} component={MovieForm}/>
            <Route exact path={LINK_TO_MOVIE_CREATE_FORM} component={MovieForm}/>
        </Switch>
    </main>
);

export default Routers;
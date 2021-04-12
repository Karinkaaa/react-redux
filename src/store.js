import { combineReducers, createStore } from "redux";
import images from "./reducers/imagePage";
import imageForm from "./reducers/imageResourceForm";
import animations from "./reducers/animationPage";
import animationForm from "./reducers/animationResourceForm";
import dragonBones from "./reducers/dragonBonesPage";
import dragonBonesForm from "./reducers/dragonBonesResourceForm";
import audios from "./reducers/audioPage";
import audioForm from "./reducers/audioResourceForm";
import audioPlayer from "./reducers/audioPlayer";
import rules from "./reducers/rulePage";
import ruleForm from "./reducers/ruleForm";
import layers from "./reducers/layerPage";
import layerForm from "./reducers/layerForm";

const reducers = combineReducers({
    images,
    imageForm,
    animations,
    animationForm,
    dragonBones,
    dragonBonesForm,
    audios,
    audioForm,
    audioPlayer,
    rules,
    ruleForm,
    layers,
    layerForm
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import { combineReducers, createStore } from "redux";
import images from "./reducers/imagesPage";
import createImageForm from "./reducers/imageResourceForm";
import animations from "./reducers/animationsPage";
import createAnimationForm from "./reducers/animationResourceForm";
import dragonBones from "./reducers/dragonBonesPage";
import createDragonBonesForm from "./reducers/dragonBonesResourceForm";
import audios from "./reducers/audioPage";
import createAudioForm from "./reducers/audioResourceForm";
import audioPlayer from "./reducers/audioPlayer";

const reducers = combineReducers({
    images,
    createImageForm,
    animations,
    createAnimationForm,
    dragonBones,
    createDragonBonesForm,
    audios,
    createAudioForm,
    audioPlayer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

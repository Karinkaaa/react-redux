import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import mainSaga from "./saga";
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
import movies from "./reducers/movies";

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
    layerForm,
    movies
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
    composeWithDevTools(applyMiddleware(
        sagaMiddleware
    ))
);

sagaMiddleware.run(mainSaga);

export default store;

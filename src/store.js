import { combineReducers, createStore } from "redux";
import images from "./reducers/imagesPage";
import createImageForm from "./reducers/imageResourceForm";
import animations from "./reducers/animationsPage";
import createAnimationForm from "./reducers/animationResourceForm";
import dragonBones from "./reducers/dragonBonesPage";
import createDragonBonesForm from "./reducers/dragonBonesResourceForm";

const reducers = combineReducers({
    images,
    createImageForm,
    animations,
    createAnimationForm,
    dragonBones,
    createDragonBonesForm
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

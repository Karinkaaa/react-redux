import { combineReducers, createStore } from "redux";
import images from "./reducers/imagesPage";
import createImageForm from "./reducers/imageResourceForm";
import animations from "./reducers/animationsPage";
import createAnimationForm from "./reducers/animationResourceForm";

const reducers = combineReducers({
    images,
    createImageForm,
    animations,
    createAnimationForm,
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

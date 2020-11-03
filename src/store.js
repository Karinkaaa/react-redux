import {combineReducers, createStore} from "redux";
import images from "./reducers/imagesPage";
import createImageForm from "./reducers/imageResourceForm";

const reducers = combineReducers({
    images,
    createImageForm
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

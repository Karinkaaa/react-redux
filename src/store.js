import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import mainSaga from "./saga";
import imageForm from "./reducers/imageResourceForm";
import dragonBonesForm from "./reducers/dragonBonesResourceForm";
import audioForm from "./reducers/audioResourceForm";
import audioPlayer from "./reducers/audioPlayer";
import ruleForm from "./reducers/ruleForm";
import layerForm from "./reducers/layerForm";
import movieForm from "./reducers/movieForm";
import table from "./reducers/table";
import form from "./reducers/form";

const reducers = combineReducers({
    imageForm,
    dragonBonesForm,
    audioForm,
    audioPlayer,
    ruleForm,
    layerForm,
    movieForm,
    table,
    form
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
    composeWithDevTools(applyMiddleware(
        sagaMiddleware
    ))
);

sagaMiddleware.run(mainSaga);

export default store;

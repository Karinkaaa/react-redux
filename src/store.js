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
import { SET_FORM_SAGA, SET_MOVIES_SAGA } from "./utils/actionConstants";

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
    movies: (state = {
                 list: [],
                 form: {
                     title: "",
                     year: 0,
                     rating: ""
                 }
             },
             action) => {
        switch (action.type) {
            case SET_MOVIES_SAGA: {
                return { ...state, list: action.movies };
            }
            case SET_FORM_SAGA: {
                const { movie } = action;
                return {
                    ...state,
                    form: {
                        title: movie.title,
                        year: movie.year,
                        rating: movie.rating
                    }
                };
            }
        }
        return state;
    }
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers,
    composeWithDevTools(applyMiddleware(
        sagaMiddleware
    ))
);

sagaMiddleware.run(mainSaga);


export default store;

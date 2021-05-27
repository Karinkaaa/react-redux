import { all } from "redux-saga/effects";
import { watchRemoveMovieSaga } from "./movies/removeMovieSaga";
import { watchSaveMovieSaga } from "./movies/saveMovieSaga";
import { watchUpdateMovieSaga } from "./movies/updateMovieSaga";
import { watchGetMoviesSaga } from "./movies/getMoviesSaga";
import { watchPutDataToFormSaga } from "./movies/getMovieByIdSaga";
import { watchGetImagesSaga } from "./images/getImagesSaga";
import { watchGetImageByIdSaga } from "./images/getImageByIdSaga";
import { watchRemoveImageSaga } from "./images/removeImageSaga";
import { watchSaveImageSaga } from "./images/saveImageSaga";
import { watchUpdateImageSaga } from "./images/updateImageSaga";
import { watchGetAnimationsSaga } from "./animations/getAnimationsSaga";
import { watchGetAnimationById } from "./animations/getAnimationByIdSaga";
import { watchUpdateAnimationSaga } from "./animations/updateAnimationSaga";
import { watchRemoveAnimationSaga } from "./animations/removeAnimationSaga";
import { watchSaveAnimationSaga } from "./animations/saveAnimationSaga";

export default function* mainSaga() {
    yield all([
        watchRemoveMovieSaga(),
        watchSaveMovieSaga(),
        watchUpdateMovieSaga(),
        watchGetMoviesSaga(),
        watchPutDataToFormSaga(),
        watchGetImagesSaga(),
        watchGetImageByIdSaga(),
        watchRemoveImageSaga(),
        watchSaveImageSaga(),
        watchUpdateImageSaga(),
        watchGetAnimationsSaga(),
        watchGetAnimationById(),
        watchUpdateAnimationSaga(),
        watchRemoveAnimationSaga(),
        watchSaveAnimationSaga(),

    ]);
}
import { all } from "redux-saga/effects";
import { watchRemoveMovieSaga } from "./removeMovieSaga";
import { watchSaveMovieSaga } from "./saveMovieSaga";
import { watchUpdateMovieSaga } from "./updateMovieSaga";
import { watchGetMoviesSaga } from "./getMoviesSaga";
import { watchPutDataToFormSaga } from "./getMovieByIdSaga";

export default function* mainSaga() {
    yield all([
        watchRemoveMovieSaga(),
        watchSaveMovieSaga(),
        watchUpdateMovieSaga(),
        watchGetMoviesSaga(),
        watchPutDataToFormSaga()
    ]);
}
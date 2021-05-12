import { takeEvery } from "redux-saga/effects";
import { SAVE_MOVIE_SAGA } from "../utils/actionConstants";

export function* saveMovieSaga(action) {
    const { movie } = action;
    console.log("saga save", movie);

    fetch("/api/movies", {
        method: "POST",
        body: JSON.stringify({ movie: movie })
    });
}

export function* watchSaveMovieSaga() {
    yield takeEvery(SAVE_MOVIE_SAGA, saveMovieSaga);
}
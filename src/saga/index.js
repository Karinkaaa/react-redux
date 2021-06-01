import { all } from "redux-saga/effects";
import { watchRemoveMovieSaga } from "./movies/removeMovieSaga";
import { watchSaveMovieSaga } from "./movies/saveMovieSaga";
import { watchUpdateMovieSaga } from "./movies/updateMovieSaga";
import { watchGetMoviesSaga } from "./movies/getMoviesSaga";
import { watchGetMovieByIdSaga } from "./movies/getMovieByIdSaga";
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
import { watchGetDragonBonesSaga } from "./dragonBones/getDragonBonesSaga";
import { watchGetDragonBoneByIdSaga } from "./dragonBones/getDragonBoneByIdSaga";
import { watchUpdateDragonBoneSaga } from "./dragonBones/updateDragonBoneSaga";
import { watchSaveDragonBoneSaga } from "./dragonBones/saveDragonBoneSaga";
import { watchRemoveDragonBoneSaga } from "./dragonBones/removeDragonBoneSaga";
import { watchGetAudiosSaga } from "./audios/getAudiosSaga";
import { watchGetAudioByIdSaga } from "./audios/getAudioByIdSaga";
import { watchUpdateAudioSaga } from "./audios/updateAudioSaga";
import { watchSaveAudioSaga } from "./audios/saveAudioSaga";
import { watchRemoveAudioSaga } from "./audios/removeAudioSaga";
import { watchGetRulesSaga } from "./rules/getRulesSaga";
import { watchGetRuleByIdSaga } from "./rules/getRuleByIdSaga";
import { watchUpdateRuleSaga } from "./rules/updateRuleSaga";
import { watchSaveRuleSaga } from "./rules/saveRuleSaga";
import { watchRemoveRuleSaga } from "./rules/removeRuleSaga";
import { watchGetLayersSaga } from "./layers/getLayersSaga";
import { watchGetLayerByIdSaga } from "./layers/getLayerByIdSaga";
import { watchUpdateLayerSaga } from "./layers/updateLayerSaga";
import { watchSaveLayerSaga } from "./layers/saveLayerSaga";
import { watchRemoveLayerSaga } from "./layers/removeLayerSaga";

export default function* mainSaga() {
    yield all([
        watchGetImagesSaga(),
        watchGetImageByIdSaga(),
        watchUpdateImageSaga(),
        watchSaveImageSaga(),
        watchRemoveImageSaga(),
        watchGetAnimationsSaga(),
        watchGetAnimationById(),
        watchUpdateAnimationSaga(),
        watchSaveAnimationSaga(),
        watchRemoveAnimationSaga(),
        watchGetDragonBonesSaga(),
        watchGetDragonBoneByIdSaga(),
        watchUpdateDragonBoneSaga(),
        watchSaveDragonBoneSaga(),
        watchRemoveDragonBoneSaga(),
        watchGetAudiosSaga(),
        watchGetAudioByIdSaga(),
        watchUpdateAudioSaga(),
        watchSaveAudioSaga(),
        watchRemoveAudioSaga(),
        watchGetRulesSaga(),
        watchGetRuleByIdSaga(),
        watchUpdateRuleSaga(),
        watchSaveRuleSaga(),
        watchRemoveRuleSaga(),
        watchGetLayersSaga(),
        watchGetLayerByIdSaga(),
        watchUpdateLayerSaga(),
        watchSaveLayerSaga(),
        watchRemoveLayerSaga(),
        watchGetMoviesSaga(),
        watchGetMovieByIdSaga(),
        watchUpdateMovieSaga(),
        watchSaveMovieSaga(),
        watchRemoveMovieSaga()
    ]);
}
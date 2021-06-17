import {
    GET_DRAGON_BONE_BY_ID_SAGA,
    GET_DRAGON_BONES_SAGA,
    REMOVE_DRAGON_BONE_SAGA,
    SAVE_DRAGON_BONE_SAGA,
    UPDATE_DRAGON_BONE_SAGA
} from "../../utils/actionSagaConstants";

// form
export const saveDragonBoneSaga = (dragonBone) => ({
    type: SAVE_DRAGON_BONE_SAGA,
    dragonBone
});

export const updateDragonBoneSaga = (id, dragonBone) => ({
    type: UPDATE_DRAGON_BONE_SAGA,
    id,
    dragonBone
});

// table
export const getDragonBonesSaga = () => ({
    type: GET_DRAGON_BONES_SAGA
});

export const getDragonBoneByIdSaga = (id) => ({
    type: GET_DRAGON_BONE_BY_ID_SAGA,
    id
});

export const removeDragonBoneSaga = ({ id }) => ({
    type: REMOVE_DRAGON_BONE_SAGA,
    id
});
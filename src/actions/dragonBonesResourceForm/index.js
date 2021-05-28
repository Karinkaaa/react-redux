import {
    CLEAR_DRAGON_BONE_FORM,
    OPEN_OR_CLOSE_DRAGON_BONE_MODAL,
    SAVE_DRAGON_BONE_SAGA,
    SET_DRAGON_BONE_FORM,
    UPDATE_DRAGON_BONE_NAME,
    UPDATE_DRAGON_BONE_SAGA,
    UPDATE_SKELETON,
    UPDATE_TEXTURE,
    UPDATE_TEXTURE_JSON
} from "../../utils/actionConstants";

export const updateDragonBoneName = (name) => ({
    type: UPDATE_DRAGON_BONE_NAME,
    name
});

export const updateTexture = (texture) => ({
    type: UPDATE_TEXTURE,
    texture
});

export const updateTextureJson = (textureJson) => ({
    type: UPDATE_TEXTURE_JSON,
    textureJson
});

export const updateSkeletonUrl = (skeleton) => ({
    type: UPDATE_SKELETON,
    skeleton
});

export const isOpenDragonBoneModal = (isOpen) => ({
    type: OPEN_OR_CLOSE_DRAGON_BONE_MODAL,
    isOpen
});

export const setDragonBoneForm = (dragonBone) => ({
    type: SET_DRAGON_BONE_FORM,
    dragonBone
});

export const clearDragonBoneForm = () => ({
    type: CLEAR_DRAGON_BONE_FORM
});

// saga
export const saveDragonBoneSaga = (dragonBone) => ({
    type: SAVE_DRAGON_BONE_SAGA,
    dragonBone
});

export const updateDragonBoneSaga = (id, dragonBone) => ({
    type: UPDATE_DRAGON_BONE_SAGA,
    id,
    dragonBone
});

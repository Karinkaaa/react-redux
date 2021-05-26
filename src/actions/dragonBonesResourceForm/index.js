import {
    CLEAR_DRAGON_BONES_FORM,
    OPEN_OR_CLOSE_DRAGON_BONES_MODAL,
    PUT_DRAGON_BONES_RESOURCE_TO_FORM,
    UPDATE_DRAGON_BONES_NAME,
    UPDATE_SKELETON,
    UPDATE_TEXTURE,
    UPDATE_TEXTURE_JSON
} from "../../utils/actionConstants";

export const updateDragonBonesName = (name) => ({
    type: UPDATE_DRAGON_BONES_NAME,
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

export const isOpenDragonBonesModal = (isOpen) => ({
    type: OPEN_OR_CLOSE_DRAGON_BONES_MODAL,
    isOpen
});

export const putDragonBonesResourceToForm = ({ id, name, texture, textureJson, skeleton }) => ({
    type: PUT_DRAGON_BONES_RESOURCE_TO_FORM,
    id,
    name,
    texture,
    textureJson,
    skeleton
});

export const clearDragonBonesForm = () => ({
    type: CLEAR_DRAGON_BONES_FORM
});

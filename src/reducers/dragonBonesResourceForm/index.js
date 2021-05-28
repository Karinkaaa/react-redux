import { isValidImageUrl, isValidJsonUrl, isValidName } from "../../utils/validation";
import {
    CLEAR_DRAGON_BONE_FORM,
    OPEN_OR_CLOSE_DRAGON_BONE_MODAL,
    SET_DRAGON_BONE_FORM,
    UPDATE_DRAGON_BONE_NAME,
    UPDATE_SKELETON,
    UPDATE_TEXTURE,
    UPDATE_TEXTURE_JSON
} from "../../utils/actionConstants";

const initialState = {
    id: "",
    name: "",
    isValidName: false,
    texture: "",
    isValidTexture: false,
    textureJson: "",
    isValidTextureJson: false,
    skeleton: "",
    isValidSkeleton: false,
    isOpen: false
};

const DragonBonesResourceForm = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_OR_CLOSE_DRAGON_BONE_MODAL: {
            return {
                ...state,
                isOpen: action.isOpen
            };
        }
        case UPDATE_DRAGON_BONE_NAME: {
            const { name } = action;

            return {
                ...state,
                name,
                isValidName: isValidName(name)
            };
        }
        case UPDATE_TEXTURE: {
            const { texture } = action;

            return {
                ...state,
                texture,
                isValidTexture: isValidImageUrl(texture)
            };
        }
        case UPDATE_TEXTURE_JSON: {
            const { textureJson } = action;

            return {
                ...state,
                textureJson,
                isValidTextureJson: isValidJsonUrl(textureJson)
            };
        }
        case UPDATE_SKELETON: {
            const { skeleton } = action;

            return {
                ...state,
                skeleton,
                isValidSkeleton: isValidJsonUrl(skeleton)
            };
        }
        case SET_DRAGON_BONE_FORM: {
            const { dragonBone } = action;

            return {
                ...state,
                ...dragonBone,
                isValidName: isValidName(dragonBone.name),
                isValidTexture: isValidImageUrl(dragonBone.texture),
                isValidTextureJson: isValidJsonUrl(dragonBone.textureJson),
                isValidSkeleton: isValidJsonUrl(dragonBone.skeleton)
            };
        }
        case CLEAR_DRAGON_BONE_FORM: {
            return {
                ...initialState
            };
        }
        default:
            return state;
    }
};

export default DragonBonesResourceForm;
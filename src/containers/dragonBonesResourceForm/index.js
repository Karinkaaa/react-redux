import { connect } from "react-redux";
import DragonBonesResourceForm from "../../components/dragonBonesResourceForm";
import {
    clearDragonBoneForm,
    isOpenDragonBoneModal,
    saveDragonBoneSaga,
    updateDragonBoneSaga,
    updateDragonBoneName,
    updateSkeletonUrl,
    updateTexture,
    updateTextureJson
} from "../../actions/dragonBonesResourceForm";

const mapStateToProps = (state) => {
    return {
        id: state.dragonBonesForm.id,
        name: state.dragonBonesForm.name,
        isValidName: state.dragonBonesForm.isValidName,
        texture: state.dragonBonesForm.texture,
        isValidTexture: state.dragonBonesForm.isValidTexture,
        textureJson: state.dragonBonesForm.textureJson,
        isValidTextureJson: state.dragonBonesForm.isValidTextureJson,
        skeleton: state.dragonBonesForm.skeleton,
        isValidSkeleton: state.dragonBonesForm.isValidSkeleton,
        isOpen: state.dragonBonesForm.isOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveDragonBone: (dragonBone) => dispatch(saveDragonBoneSaga(dragonBone)),
        updateDragonBone: (id, dragonBone) => dispatch(updateDragonBoneSaga(id, dragonBone)),
        onChangeName: (name) => dispatch(updateDragonBoneName(name)),
        onChangeTexture: (texture) => dispatch(updateTexture(texture)),
        onChangeTextureJson: (textureJson) => dispatch(updateTextureJson(textureJson)),
        onChangeSkeleton: (skeleton) => dispatch(updateSkeletonUrl(skeleton)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearDragonBoneForm());
            dispatch(isOpenDragonBoneModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonBonesResourceForm);
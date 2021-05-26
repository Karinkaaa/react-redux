import { connect } from "react-redux";
import DragonBonesResourceForm from "../../components/dragonBonesResourceForm";
import { addDragonBonesResource, updateDragonBonesResource } from "../../actions/dragonBonesResourceComponent";
import {
    clearDragonBonesForm,
    isOpenDragonBonesModal,
    updateDragonBonesName,
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
        onChangeName: (name) => dispatch(updateDragonBonesName(name)),
        onChangeTexture: (texture) => dispatch(updateTexture(texture)),
        onChangeTextureJson: (textureJson) => dispatch(updateTextureJson(textureJson)),
        onChangeSkeleton: (skeleton) => dispatch(updateSkeletonUrl(skeleton)),
        onSave: (props) => dispatch(addDragonBonesResource(props)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearDragonBonesForm());
            dispatch(isOpenDragonBonesModal(isOpen));
        },
        onUpdate: (props) => dispatch(updateDragonBonesResource(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonBonesResourceForm);
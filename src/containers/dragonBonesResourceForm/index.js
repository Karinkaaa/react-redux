import { connect } from "react-redux";
import DragonBonesResourceForm from "../../components/dragonBonesResourceForm";
import { addDragonBonesResource, updateDragonBonesResource } from "../../actions/dragonBonesResourceComponent";
import {
    isOpenDragonBonesModal,
    updateDragonBonesName,
    updateSkeletonUrl,
    updateTexture,
    updateTextureJson
} from "../../actions/dragonBonesResourceForm";

const mapStateToProps = (state) => {
    return {
        id: state.createDragonBonesForm.id,
        name: state.createDragonBonesForm.name,
        isValidName: state.createDragonBonesForm.isValidName,
        texture: state.createDragonBonesForm.texture,
        isValidTexture: state.createDragonBonesForm.isValidTexture,
        textureJson: state.createDragonBonesForm.textureJson,
        isValidTextureJson: state.createDragonBonesForm.isValidTextureJson,
        skeleton: state.createDragonBonesForm.skeleton,
        isValidSkeleton: state.createDragonBonesForm.isValidSkeleton,
        isOpen: state.createDragonBonesForm.isOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (name) => dispatch(updateDragonBonesName(name)),
        onChangeTexture: (texture) => dispatch(updateTexture(texture)),
        onChangeTextureJson: (textureJson) => dispatch(updateTextureJson(textureJson)),
        onChangeSkeleton: (skeleton) => dispatch(updateSkeletonUrl(skeleton)),
        onSave: (props) => dispatch(addDragonBonesResource(props)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenDragonBonesModal(isOpen)),
        onUpdate: (props) => dispatch(updateDragonBonesResource(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonBonesResourceForm);
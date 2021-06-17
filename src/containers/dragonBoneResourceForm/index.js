import { connect } from "react-redux";
import DragonBonesResourceForm from "../../components/dragonBoneResourceForm";
import { saveDragonBoneSaga, updateDragonBoneSaga } from "../../actions/dragonBonesSaga";
import { changeFormData } from "../../actions/form";
import { DRAGON_BONES_KEY } from "../../utils/constants";

const mapStateToProps = (state) => {
    return {
        id: state.form.dragonBones.id,
        name: state.form.dragonBones.name,
        texture: state.form.dragonBones.texture,
        textureJson: state.form.dragonBones.textureJson,
        skeleton: state.form.dragonBones.skeleton
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveDragonBone: (dragonBone) => dispatch(saveDragonBoneSaga(dragonBone)),
        onUpdateDragonBone: (id, dragonBone) => dispatch(updateDragonBoneSaga(id, dragonBone)),
        onChangeFormData: (key, value) => dispatch(changeFormData(DRAGON_BONES_KEY, key, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonBonesResourceForm);
import { connect } from "react-redux";
import AnimationResourceForm from "../../components/animationResourceForm";
import { changeFormData } from "../../actions/form";
import { saveAnimationSaga, updateAnimationSaga } from "../../actions/animationsSaga";

const mapStateToProps = (state) => {
    return {
        id: state.form.animations.id,
        name: state.form.animations.name,
        speed: state.form.animations.speed,
        urls: state.form.animations.urls
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveAnimation: (animation) => dispatch(saveAnimationSaga(animation)),
        onUpdateAnimation: (id, animation) => dispatch(updateAnimationSaga(id, animation)),
        onChangeFormData: (key, value) => dispatch(changeFormData("animations", key, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimationResourceForm);
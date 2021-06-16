import { connect } from "react-redux";
import AnimationResourceForm from "../../components/animationResourceForm";
import { changeFormData } from "../../actions/form";
import { saveAnimationSaga, updateAnimationSaga } from "../../actions/animationsSaga";
import { ANIMATIONS_KEY } from "../../utils/constants";

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
        onChangeFormData: (key, value) => dispatch(changeFormData(ANIMATIONS_KEY, key, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimationResourceForm);
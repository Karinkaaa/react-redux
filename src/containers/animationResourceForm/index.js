import { connect } from "react-redux";
import AnimationResourceForm from "../../components/animationResourceForm";
import { changeFormData } from "../../actions/form";
import { getAnimationByIdSaga, saveAnimationSaga, updateAnimationSaga } from "../../actions/animationsSaga";
import { ANIMATIONS_KEY } from "../../utils/constants";

const mapStateToProps = (state) => {
    return {
        name: state.form.animations.name,
        speed: state.form.animations.speed,
        urls: state.form.animations.urls
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveAnimation: (animation) => dispatch(saveAnimationSaga(animation)),
        onUpdateAnimation: (id, animation) => dispatch(updateAnimationSaga(id, animation)),
        onPutDataToForm: (id) => dispatch(getAnimationByIdSaga(id)),
        onChangeFormData: (key, value) => dispatch(changeFormData(ANIMATIONS_KEY, key, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimationResourceForm);
import { connect } from "react-redux";
import AnimationResourceForm from "../../components/animationResourceForm";
import {
    addImageResourceToAnimation,
    deleteImageFromAnimationForm,
    dragAndDropInAnimationForm,
    saveAnimationSaga,
    updateAnimationName,
    updateAnimationSaga,
    updateAnimationSpeed,
    updateAnimationUrl
} from "../../actions/animationResourceForm";

const mapStateToProps = (state) => {
    return {
        id: state.animationForm.id,
        speed: state.animationForm.speed,
        name: state.animationForm.name,
        isValidName: state.animationForm.isValidName,
        urls: state.animationForm.urls,
        isValidUrls: state.animationForm.isValidUrls
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveAnimation: (animation) => dispatch(saveAnimationSaga(animation)),
        updateAnimation: (id, animation) => dispatch(updateAnimationSaga(id, animation)),
        onChangeSpeed: (speed) => dispatch(updateAnimationSpeed(speed)),
        onChangeName: (name) => dispatch(updateAnimationName(name)),
        onChangeUrl: (index, url) => dispatch(updateAnimationUrl(index, url)),
        onDeleteImage: (index) => dispatch(deleteImageFromAnimationForm(index)),
        onAddImage: (url) => dispatch(addImageResourceToAnimation(url)),
        onDragAndDrop: (result) => dispatch(dragAndDropInAnimationForm(result))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimationResourceForm);
import { connect } from "react-redux";
import AnimationResourceForm from "../../components/animationResourceForm";
import { addAnimationResource, updateAnimationResource } from "../../actions/animationResourceComponent";
import {
    addImageResourceToAnimation,
    deleteImageFromAnimationForm,
    dragAndDropInAnimationForm,
    updateAnimationName,
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
        onChangeSpeed: (speed) => dispatch(updateAnimationSpeed(speed)),
        onChangeName: (name) => dispatch(updateAnimationName(name)),
        onChangeUrl: (index, url) => dispatch(updateAnimationUrl(index, url)),
        onSave: (props) => dispatch(addAnimationResource(props)),
        onUpdate: (props) => dispatch(updateAnimationResource(props)),
        onDeleteImage: (index) => dispatch(deleteImageFromAnimationForm(index)),
        onAddImage: (url) => dispatch(addImageResourceToAnimation(url)),
        onDragAndDrop: (result) => dispatch(dragAndDropInAnimationForm(result))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimationResourceForm);
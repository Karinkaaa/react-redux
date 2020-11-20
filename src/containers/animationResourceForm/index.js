import {connect} from "react-redux";
import AnimationResourceForm from "../../components/animationResourceForm";
import {isOpenAnimationModal, updateAnimationName, updateAnimationUrl} from "../../actions/animationResourceForm";
import {addAnimationResource, updateAnimationResource} from "../../actions/animationResourceComponent";

const mapStateToProps = (state) => {
    return {
        id: state.createAnimationForm.id,
        name: state.createAnimationForm.name,
        isValidName: state.createAnimationForm.isValidName,
        urls: state.createAnimationForm.urls,
        isValidUrls: state.createAnimationForm.isValidUrls,
        isOpen: state.createAnimationForm.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (name) => dispatch(updateAnimationName(name)),
        onChangeUrl: (index, url) => dispatch(updateAnimationUrl(index, url)),
        onSave: (props) => dispatch(addAnimationResource(props)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenAnimationModal(isOpen)),
        onUpdate: (props) => dispatch(updateAnimationResource(props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimationResourceForm);
import {connect} from "react-redux";
import ImageResourceForm from "../../components/imageResourceForm";
import {isOpenImageModal, updateImageName, updateImageUrl} from "../../actions/imageResourceForm";
import {addImageResource, updateImageResource} from "../../actions/imageResourceComponent";

const mapStateToProps = (state) => {
    return {
        id: state.createImageForm.id,
        name: state.createImageForm.name,
        isValidName: state.createImageForm.isValidName,
        url: state.createImageForm.url,
        isValidUrl: state.createImageForm.isValidUrl,
        isOpen: state.createImageForm.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (name) => dispatch(updateImageName(name)),
        onChangeUrl: (url) => dispatch(updateImageUrl(url)),
        onSave: (props) => dispatch(addImageResource(props)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenImageModal(isOpen)),
        onUpdate: (props) => dispatch(updateImageResource(props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageResourceForm);
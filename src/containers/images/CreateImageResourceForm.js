import {connect} from "react-redux";
import CreateResourceForm from "../../components/images/CreateImageResourceForm";
import {isOpenModal, updateName, updateUrl} from "../../actions/CreateImageResourceForm";
import {addImageResource} from "../../actions/ImagesPage";

const mapStateToProps = (state) => {
    return {
        name: state.createImageForm.name,
        isValidName: state.createImageForm.isValidName,
        url: state.createImageForm.url,
        isValidUrl: state.createImageForm.isValidUrl,
        isOpen: state.createImageForm.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (name) => dispatch(updateName(name)),
        onChangeUrl: (url) => dispatch(updateUrl(url)),
        onSave: (props) => dispatch(addImageResource(props)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateResourceForm);
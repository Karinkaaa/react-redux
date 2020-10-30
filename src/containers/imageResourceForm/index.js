import {connect} from "react-redux";
import CreateImageResourceForm from "../../components/imageResourceForm";
import {isOpenModal, updateName, updateUrl} from "../../actions/imageResourceForm";
import {addImageResource} from "../../actions/imageResourceTable";

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateImageResourceForm);
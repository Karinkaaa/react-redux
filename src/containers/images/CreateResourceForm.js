import {connect} from "react-redux";
import CreateResourceForm from "../../components/images/CreateResourceForm";
import {isOpenModal, updateName, updateUrl} from "../../actions/CreateResourceForm";
import {addResource} from "../../actions/ImagesPage";

const mapStateToProps = (state) => {
    return {
        name: state.createForm.name,
        isValidName: state.createForm.isValidName,
        url: state.createForm.url,
        isValidUrl: state.createForm.isValidUrl,
        isOpen: state.createForm.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (name) => dispatch(updateName(name)),
        onChangeUrl: (url) => dispatch(updateUrl(url)),
        onSave: (props) => dispatch(addResource(props)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateResourceForm);
import {connect} from "react-redux";
import CreateResourceForm from "../components/CreateResourceForm";
import {isOpenModal, updateUrl} from "../actions/CreateResourceForm";
import {addResource} from "../actions/Images";

const mapStateToProps = (state) => {
    return {
        url: state.createForm.url,
        isValidUrl: state.createForm.isValidUrl,
        isOpen: state.createForm.isOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeUrl: (url) => dispatch(updateUrl(url)),
        onSave: (url) => dispatch(addResource(url)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateResourceForm);
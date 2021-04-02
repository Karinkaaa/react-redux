import { connect } from "react-redux";
import ImageResourceForm from "../../components/imageResourceForm";
import { addImageResource, updateImageResource } from "../../actions/imageResourceComponent";
import { isOpenImageModal, updateImageName, updateImageUrl } from "../../actions/imageResourceForm";

const mapStateToProps = (state) => {
    return {
        id: state.imageForm.id,
        name: state.imageForm.name,
        isValidName: state.imageForm.isValidName,
        url: state.imageForm.url,
        isValidUrl: state.imageForm.isValidUrl,
        isOpen: state.imageForm.isOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (name) => dispatch(updateImageName(name)),
        onChangeUrl: (url) => dispatch(updateImageUrl(url)),
        onSave: (props) => dispatch(addImageResource(props)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenImageModal(isOpen)),
        onUpdate: (props) => dispatch(updateImageResource(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageResourceForm);
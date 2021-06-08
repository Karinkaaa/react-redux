import { connect } from "react-redux";
import ImageResourceForm from "../../components/imageResourceForm";
import { getImageByIdSaga } from "../../actions/imagesSaga";
import {
    isOpenImageModal,
    saveImageSaga,
    updateImageName,
    updateImageSaga,
    updateImageUrl
} from "../../actions/imageResourceForm";

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
        saveImage: (image) => dispatch(saveImageSaga(image)),
        updateImage: (id, image) => dispatch(updateImageSaga(id, image)),
        putDataToForm: (id) => dispatch(getImageByIdSaga(id)),
        onChangeName: (name) => dispatch(updateImageName(name)),
        onChangeUrl: (url) => dispatch(updateImageUrl(url)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenImageModal(isOpen))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageResourceForm);
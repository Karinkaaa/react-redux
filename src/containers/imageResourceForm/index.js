import { connect } from "react-redux";
import ImageResourceForm from "../../components/imageResourceForm";
import { getImageByIdSaga, saveImageSaga, updateImageSaga } from "../../actions/imagesSaga";
import { changeFormData } from "../../actions/form";
import { IMAGES_KEY } from "../../utils/constants";

const mapStateToProps = (state) => {
    return {
        name: state.form.images.name,
        url: state.form.images.url
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveImage: (image) => dispatch(saveImageSaga(image)),
        onUpdateImage: (id, image) => dispatch(updateImageSaga(id, image)),
        onPutDataToForm: (id) => dispatch(getImageByIdSaga(id)),
        onChangeFormData: (key, value) => dispatch(changeFormData(IMAGES_KEY, key, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageResourceForm);
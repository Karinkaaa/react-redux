import {connect} from "react-redux";
import {isOpenModal, putImageResourceToForm} from "../../actions/imageResourceForm";
import {deleteImageResource} from "../../actions/imageResourceComponent";
import ImageResourceComponent from "../../components/imageResourceComponent";

const mapStateToProps = (state) => {
    return {
        images: state.images.imageList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteImageResource(id)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen)),
        onClickPutImageResourceToForm: (props) => dispatch(putImageResourceToForm(props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageResourceComponent);
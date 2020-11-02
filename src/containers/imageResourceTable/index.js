import {connect} from "react-redux";
import ImageResourceTable from "../../components/imageResourceTable";
import {deleteImageResource} from "../../actions/imageResourceTable";
import {isOpenModal, putImageResourceToForm} from "../../actions/imageResourceForm";

const mapStateToProps = (state) => {
    return {
        images: state.images.imageList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteImageResource(id)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen)),
        onClickPutImageResourceToForm: (props) => dispatch(putImageResourceToForm(props))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageResourceTable);
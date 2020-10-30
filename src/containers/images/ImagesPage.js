import {connect} from "react-redux";
import Images from "../../components/images";
import {deleteImageResource} from "../../actions/ImagesPage";

const mapStateToProps = (state) => {
    return {
        images: state.images.imageList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteImageResource(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Images);
import {connect} from "react-redux";
import ImagesPage from "../../components/images";
import {deleteResource} from "../../actions/ImagesPage";

const mapStateToProps = (state) => {
    return {
        images: state.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteResource(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesPage);
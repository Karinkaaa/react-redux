import {connect} from "react-redux";
import ImagesPage from "../components/images/ImagesPage";
import {deleteResource} from "../actions/ImagesPage";

const mapStateToProps = (state) => {
    return {
        resources: state.resources
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteResource(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesPage);
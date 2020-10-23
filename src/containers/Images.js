import {connect} from "react-redux";
import Resources from "../components/Images";
import {deleteResource} from "../actions/Images";

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

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
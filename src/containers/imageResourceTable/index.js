import {connect} from "react-redux";
import ImageResourceTable from "../../components/imageResourceTable";
import {deleteImageResource} from "../../actions/imageResourceTable";

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

export default connect(mapStateToProps, mapDispatchToProps)(ImageResourceTable);
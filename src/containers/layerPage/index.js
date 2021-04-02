import { connect } from "react-redux";
import { addLayer, deleteLayer, updateLayer } from "../../actions/layerComponent";
import Layers from "../../pages/layers";

const mapStateToProps = (state) => {
    return {
        layerList: state.layers.layerList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (layer) => dispatch(addLayer(layer)),
        onDelete: (id) => dispatch(deleteLayer(id)),
        onChange: (layer) => dispatch(updateLayer(layer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
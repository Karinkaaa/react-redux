import { connect } from "react-redux";
import LayerForm from "../../components/layerForm";
import { changeFormData } from "../../actions/form";
import { getLayerByIdSaga, saveLayerSaga, updateLayerSaga } from "../../actions/layersSaga";
import { LAYERS_KEY } from "../../utils/constants";

const mapStateToProps = (state) => {
    return {
        name: state.form.layers.name,
        elements: state.form.layers.elements,
        selectedElement: state.form.layers.elements.find(el => el.id === state.form.layers.selectedId),
        selectedId: state.form.layers.selectedId,
        images: state.table.images.list,
        animations: state.table.animations.list,
        dragonBones: state.table.dragonBones.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveLayer: (layer) => dispatch(saveLayerSaga(layer)),
        onUpdateLayer: (id, layer) => dispatch(updateLayerSaga(id, layer)),
        onPutDataToForm: (id) => dispatch(getLayerByIdSaga(id)),
        onChangeFormData: (key, value) => dispatch(changeFormData(LAYERS_KEY, key, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerForm);
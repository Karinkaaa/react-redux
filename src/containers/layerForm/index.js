import { connect } from "react-redux";
import LayerForm from "../../components/layerForm";
import {
    addLayerElement,
    deleteLayerElement,
    saveLayerSaga,
    setSelectedId,
    updateLayerElement,
    updateLayerName,
    updateLayerSaga
} from "../../actions/layerForm";

const mapStateToProps = (state) => {
    return {
        id: state.layerForm.id,
        name: state.layerForm.name,
        isValidName: state.layerForm.isValidName,
        elements: state.layerForm.elements,
        selectedElement: state.layerForm.elements.find(el => el.id === state.layerForm.selectedId),
        selectedId: state.layerForm.selectedId,
        images: state.images.imageList,
        animations: state.animations.animationList,
        dragonBones: state.dragonBones.dragonBonesList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveLayer: (layer) => dispatch(saveLayerSaga(layer)),
        updateLayer: (id, layer) => dispatch(updateLayerSaga(id, layer)),
        onAddElement: () => dispatch(addLayerElement()),
        onChangeElement: (element) => dispatch(updateLayerElement(element)),
        onDeleteElement: (id) => {
            dispatch(setSelectedId(null));
            dispatch(deleteLayerElement(id));
        },
        setSelectedId: (id) => dispatch(setSelectedId(id)),
        onChangeLayerName: (name) => dispatch(updateLayerName(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerForm);
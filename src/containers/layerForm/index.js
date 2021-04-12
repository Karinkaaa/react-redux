import { connect } from "react-redux";
import LayerForm from "../../components/layerForm";
import { addLayer, updateLayer } from "../../actions/layerComponent";
import {
    addLayerElement,
    clearLayerForm,
    deleteLayerElement,
    setSelectedId,
    updateLayerElement,
    updateLayerName
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
        onAddElement: () => dispatch(addLayerElement()),
        onDeleteElement: (id) => {
            dispatch(deleteLayerElement(id));
            dispatch(setSelectedId(null));
        },
        onChangeElement: (element) => dispatch(updateLayerElement(element)),
        setSelectedId: (id) => dispatch(setSelectedId(id)),
        onChangeLayerName: (name) => dispatch(updateLayerName(name)),
        onSaveLayer: (props) => {
            dispatch(addLayer(props));
            dispatch(clearLayerForm());
        },
        onUpdateLayer: (props) => {
            dispatch(updateLayer(props));
            dispatch(clearLayerForm());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerForm);
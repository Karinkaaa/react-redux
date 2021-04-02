import { connect } from "react-redux";
import LayerForm from "../../components/layerForm";
import {
    addLayerElement,
    deleteLayerElement,
    putLayerToForm,
    setSelectedId,
    updateLayerElement,
    updateLayerName
} from "../../actions/layerForm";

const mapStateToProps = (state) => {
    return {
        id: state.layerForm.id,
        name: state.layerForm.name,
        elements: state.layerForm.elements,
        selectedElement: state.layerForm.elements.find(el => el.id === state.layerForm.selectedId),
        selectedId: state.layerForm.selectedId
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
        onClickPutLayerToForm: (layer) => dispatch(putLayerToForm(layer))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerForm);
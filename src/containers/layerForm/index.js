import { connect } from "react-redux";
import LayerForm from "../../components/layerForm";
import {
    addLayerElement,
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
        onChangeLayerName: (name) => dispatch(updateLayerName(name))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerForm);
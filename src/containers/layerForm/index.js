import { connect } from "react-redux";
import LayerForm from "../../components/layerForm";
import { changeFormData } from "../../actions/form";
import { getDropdownSaga } from "../../actions/dictionary";
import { getBackgroundSaga } from "../../actions/background";
import { getLayerByIdSaga, saveLayerSaga, updateLayerSaga } from "../../actions/layersSaga";
import { ANIMATIONS_KEY, DRAGON_BONES_KEY, IMAGES_KEY, LAYERS_KEY } from "../../utils/constants";

const getDropdown = (state, key) => state.dictionary[key] || [];

const mapStateToProps = (state) => {
    return {
        name: state.form.layers.name,
        elements: state.form.layers.elements,
        selectedElement: state.form.layers.elements.find(el => el.id === state.form.layers.selectedId),
        selectedId: state.form.layers.selectedId,
        images: getDropdown(state, IMAGES_KEY),
        animations: getDropdown(state, ANIMATIONS_KEY),
        dragonBones: getDropdown(state, DRAGON_BONES_KEY),
        backgrounds: state.background
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getResources: (filterName) => {
            dispatch(getDropdownSaga(IMAGES_KEY, filterName));
            dispatch(getDropdownSaga(ANIMATIONS_KEY, filterName));
            dispatch(getDropdownSaga(DRAGON_BONES_KEY, filterName));
        },
        getBackground: (ref) => dispatch(getBackgroundSaga(ref)),
        onSaveLayer: (layer) => dispatch(saveLayerSaga(layer)),
        onUpdateLayer: (id, layer) => dispatch(updateLayerSaga(id, layer)),
        onPutDataToForm: (id) => dispatch(getLayerByIdSaga(id)),
        onChangeFormData: (key, value) => dispatch(changeFormData(LAYERS_KEY, key, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LayerForm);
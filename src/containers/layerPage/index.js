import { connect } from "react-redux";
import Layers from "../../pages/layers";
import { filteringSortingPagingOfArray } from "../../utils/methods";
import { putLayerToForm } from "../../actions/layerForm";
import {
    addLayer,
    changeLayerFilterValue,
    changeLayerLimit,
    changeLayerPage,
    changeLayerSort,
    deleteLayer,
    deleteNestedLayerElement,
    dragAndDrop,
    updateLayer
} from "../../actions/layerComponent";

const mapStateToProps = (state) => {
    const { data: layers, count } = filteringSortingPagingOfArray(state.layers.layerList,
        {
            pagination: state.layers.pagination,
            sorting: state.layers.sorting,
            filters: state.layers.filters
        }
    );

    return {
        layers,
        count,
        pagination: state.layers.pagination,
        sorting: state.layers.sorting,
        filters: state.layers.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (layer) => dispatch(addLayer(layer)),
        onDelete: (id) => dispatch(deleteLayer(id)),
        onChange: (layer) => dispatch(updateLayer(layer)),
        onChangePage: (page) => dispatch(changeLayerPage(page)),
        onChangeLimit: (limit) => dispatch(changeLayerLimit(limit)),
        onChangeSort: (field) => dispatch(changeLayerSort(field)),
        onChangeFilterValue: (props) => dispatch(changeLayerFilterValue(props)),
        onClickPutLayerToForm: (props) => dispatch(putLayerToForm(props)),
        onDeleteNestedElement: (id, nestedId) => dispatch(deleteNestedLayerElement(id, nestedId)),
        onDragAndDrop: (result, id) => dispatch(dragAndDrop(result, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
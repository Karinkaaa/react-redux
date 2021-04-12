import { connect } from "react-redux";
import Layers from "../../pages/layers";
import { filteringSortingPagingOfArray } from "../../utils/methods";
import { clearLayerForm, putLayerToForm } from "../../actions/layerForm";
import {
    changeLayerFilterValue,
    changeLayerLimit,
    changeLayerPage,
    changeLayerSort,
    deleteLayer,
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
        onAdd: () => dispatch(clearLayerForm()),
        onDelete: (id) => dispatch(deleteLayer(id)),
        onChange: (layer) => dispatch(updateLayer(layer)),
        onChangePage: (page) => dispatch(changeLayerPage(page)),
        onChangeLimit: (limit) => dispatch(changeLayerLimit(limit)),
        onChangeSort: (field) => dispatch(changeLayerSort(field)),
        onChangeFilterValue: (props) => dispatch(changeLayerFilterValue(props)),
        onClickPutLayerToForm: (props) => dispatch(putLayerToForm(props)),
        onDragAndDrop: (result, id) => dispatch(dragAndDrop(result, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
import { connect } from "react-redux";
import Layers from "../../pages/layers";
import { clearLayerForm } from "../../actions/layerForm";
import { getLayerByIdSaga, getLayersSaga, removeLayerSaga } from "../../actions/layersSaga";
import { changeTableFilters, changeTableLimit, changeTablePage, changeTableSort } from "../../actions/table";
import { LAYERS_KEY } from "../../utils/constants";

const mapStateToProps = (state) => {
    return {
        layers: state.table.layers.list,
        count: state.table.layers.count,
        pagination: state.table.layers.pagination,
        sorting: state.table.layers.sorting,
        filters: state.table.layers.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLayers: () => dispatch(getLayersSaga()),
        onPutDataToForm: (id) => dispatch(getLayerByIdSaga(id)),
        removeLayer: (id) => dispatch(removeLayerSaga(id)),
        onAdd: () => dispatch(clearLayerForm()),
        onChangePage: (page) => dispatch(changeTablePage(LAYERS_KEY, page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit(LAYERS_KEY, limit)),
        onChangeSort: (field) => dispatch(changeTableSort(LAYERS_KEY, field)),
        onChangeFilters: (filters) => dispatch(changeTableFilters(LAYERS_KEY, filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
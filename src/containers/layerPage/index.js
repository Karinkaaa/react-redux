import { connect } from "react-redux";
import Layers from "../../pages/layers";
import { clearLayerForm } from "../../actions/layerForm";
import { getLayerByIdSaga, getLayersSaga, removeLayerSaga } from "../../actions/layersSaga";
import { changeTableFilters, changeTableLimit, changeTablePage, changeTableSort } from "../../actions/table";

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
        onPutData: (id) => dispatch(getLayerByIdSaga(id)),
        removeLayer: (id) => dispatch(removeLayerSaga(id)),
        onAdd: () => dispatch(clearLayerForm()),
        onChangePage: (page) => dispatch(changeTablePage("layers", page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit("layers", limit)),
        onChangeSort: (field) => dispatch(changeTableSort("layers", field)),
        onChangeFilters: (filters) => dispatch(changeTableFilters("layers", filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
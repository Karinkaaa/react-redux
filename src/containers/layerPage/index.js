import { connect } from "react-redux";
import Layers from "../../pages/layers";
import { clearLayerForm } from "../../actions/layerForm";
import {
    changeLayerFilterValue,
    changeLayerLimit,
    changeLayerPage,
    changeLayerSort,
    getLayerByIdSaga,
    getLayersSaga,
    removeLayerSaga
} from "../../actions/layerComponent";

const mapStateToProps = (state) => {
    return {
        layers: state.layers.layerList,
        count: state.layers.count,
        pagination: state.layers.pagination,
        sorting: state.layers.sorting,
        filters: state.layers.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLayers: () => dispatch(getLayersSaga()),
        onPutData: (id) => dispatch(getLayerByIdSaga(id)),
        removeLayer: (id) => dispatch(removeLayerSaga(id)),
        onAdd: () => dispatch(clearLayerForm()),
        onChangePage: (page) => dispatch(changeLayerPage(page)),
        onChangeLimit: (limit) => dispatch(changeLayerLimit(limit)),
        onChangeSort: (field) => dispatch(changeLayerSort(field)),
        onChangeFilterValue: (props) => dispatch(changeLayerFilterValue(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layers);
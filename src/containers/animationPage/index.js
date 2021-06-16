import { connect } from "react-redux";
import Animations from "../../pages/animations";
import { clearResourceForm } from "../../actions/form";
import { getAnimationByIdSaga, getAnimationsSaga, removeAnimationSaga } from "../../actions/animationsSaga";
import { ANIMATIONS_KEY } from "../../utils/constants";
import {
    changeDataView,
    changeTableFilters,
    changeTableLimit,
    changeTablePage,
    changeTableSort
} from "../../actions/table";

const mapStateToProps = (state) => {
    return {
        animations: state.table.animations.list,
        count: state.table.animations.count,
        view: state.table.animations.view,
        pagination: state.table.animations.pagination,
        sorting: state.table.animations.sorting,
        filters: state.table.animations.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAnimations: () => dispatch(getAnimationsSaga()),
        onPutDataToForm: (id) => dispatch(getAnimationByIdSaga(id)),
        onRemoveAnimation: (id) => dispatch(removeAnimationSaga(id)),
        onAdd: () => dispatch(clearResourceForm(ANIMATIONS_KEY)),
        onChangePage: (page) => dispatch(changeTablePage(ANIMATIONS_KEY, page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit(ANIMATIONS_KEY, limit)),
        onChangeSort: (field) => dispatch(changeTableSort(ANIMATIONS_KEY, field)),
        onChangeView: (view) => dispatch(changeDataView(ANIMATIONS_KEY, view)),
        onChangeFilters: (filters) => dispatch(changeTableFilters(ANIMATIONS_KEY, filters))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animations);
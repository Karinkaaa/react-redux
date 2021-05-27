import { connect } from "react-redux";
import Animations from "../../pages/animations";
import { clearAnimationForm } from "../../actions/animationResourceForm";
import {
    changeAnimationFilterValue,
    changeAnimationLimit,
    changeAnimationPage,
    changeAnimationSort,
    changeAnimationView,
    getAnimationByIdSaga,
    getAnimationsSaga,
    removeAnimationSaga
} from "../../actions/animationResourceComponent";

const mapStateToProps = (state) => {
    return {
        animations: state.animations.animationList,
        count: state.animations.count,
        view: state.animations.view,
        pagination: state.animations.pagination,
        sorting: state.animations.sorting,
        filters: state.animations.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAnimations: () => dispatch(getAnimationsSaga()),
        onPutData: (id) => dispatch(getAnimationByIdSaga(id)),
        removeAnimation: (id) => dispatch(removeAnimationSaga(id)),
        onAdd: () => dispatch(clearAnimationForm()),
        onChangePage: (page) => dispatch(changeAnimationPage(page)),
        onChangeLimit: (limit) => dispatch(changeAnimationLimit(limit)),
        onChangeSort: (field) => dispatch(changeAnimationSort(field)),
        onChangeView: (view) => dispatch(changeAnimationView(view)),
        onChangeFilterValue: (props) => dispatch(changeAnimationFilterValue(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animations);
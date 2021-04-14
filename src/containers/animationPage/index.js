import { connect } from "react-redux";
import Animations from "../../pages/animations";
import { filteringSortingPagingOfArray } from "../../utils/methods";
import { clearAnimationForm, putAnimationResourceToForm } from "../../actions/animationResourceForm";
import {
    changeAnimationFilterValue,
    changeAnimationLimit,
    changeAnimationPage,
    changeAnimationSort,
    changeAnimationView,
    deleteAnimationResource,
    deleteNestedImageResource
} from "../../actions/animationResourceComponent";

const mapStateToProps = (state) => {
    const { data: animations, count } = filteringSortingPagingOfArray(state.animations.animationList,
        {
            pagination: state.animations.pagination,
            sorting: state.animations.sorting,
            filters: state.animations.filters
        }
    );

    return {
        count,
        animations,
        view: state.animations.view,
        pagination: state.animations.pagination,
        sorting: state.animations.sorting,
        filters: state.animations.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => dispatch(clearAnimationForm()),
        onDelete: (id) => dispatch(deleteAnimationResource(id)),
        onChangePage: (page) => dispatch(changeAnimationPage(page)),
        onChangeLimit: (limit) => dispatch(changeAnimationLimit(limit)),
        onChangeSort: (field) => dispatch(changeAnimationSort(field)),
        onChangeView: (view) => dispatch(changeAnimationView(view)),
        onChangeFilterValue: (props) => dispatch(changeAnimationFilterValue(props)),
        onClickPutResourceToForm: (props) => dispatch(putAnimationResourceToForm(props)),
        onDeleteNestedImage: (id, url) => dispatch(deleteNestedImageResource(id, url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animations);
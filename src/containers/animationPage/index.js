import { connect } from "react-redux";
import { filteringSortingPagingOfArray } from "../../utils/methods";
import { isOpenAnimationModal, putAnimationResourceToForm } from "../../actions/animationResourceForm";
import Animations from "../../pages/animations";
import {
    changeAnimationFilterValue,
    changeAnimationLimit,
    changeAnimationPage,
    changeAnimationSort,
    changeAnimationView,
    deleteAnimationResource,
    deleteNestedImageResource,
    dragAndDrop
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
        onDelete: (id) => dispatch(deleteAnimationResource(id)),
        onChangeAnimationPage: (page) => dispatch(changeAnimationPage(page)),
        onChangeAnimationLimit: (limit) => dispatch(changeAnimationLimit(limit)),
        onChangeAnimationSort: (field) => dispatch(changeAnimationSort(field)),
        onClickChangeAnimationView: (view) => dispatch(changeAnimationView(view)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenAnimationModal(isOpen)),
        onChangeAnimationFilterValue: (props) => dispatch(changeAnimationFilterValue(props)),
        onClickPutAnimationResourceToForm: (props) => dispatch(putAnimationResourceToForm(props)),
        onDeleteNestedImage: (id, url) => dispatch(deleteNestedImageResource(id, url)),
        onDragAndDrop: (result, id) => dispatch(dragAndDrop(result, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Animations);
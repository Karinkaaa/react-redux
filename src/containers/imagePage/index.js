import { connect } from "react-redux";
import { filteringSortingPagingOfArray } from "../../utils/methods";
import { isOpenImageModal, putImageResourceToForm } from "../../actions/imageResourceForm";
import Images from "../../pages/images";
import {
    changeImageFilterValue,
    changeImageLimit,
    changeImagePage,
    changeImageSort,
    changeImageView,
    deleteImageResource
} from "../../actions/imageResourceComponent";

const mapStateToProps = (state) => {
    const { data: images, count } = filteringSortingPagingOfArray(state.images.imageList,
        {
            pagination: state.images.pagination,
            sorting: state.images.sorting,
            filters: state.images.filters
        }
    );

    return {
        count,
        images,
        view: state.images.view,
        pagination: state.images.pagination,
        sorting: state.images.sorting,
        filters: state.images.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteImageResource(id)),
        onChangePage: (page) => dispatch(changeImagePage(page)),
        onChangeLimit: (limit) => dispatch(changeImageLimit(limit)),
        onChangeSort: (field) => dispatch(changeImageSort(field)),
        onChangeView: (view) => dispatch(changeImageView(view)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenImageModal(isOpen)),
        onChangeFilterValue: (props) => dispatch(changeImageFilterValue(props)),
        onClickPutResourceToForm: (props) => dispatch(putImageResourceToForm(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
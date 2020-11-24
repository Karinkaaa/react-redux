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
        onChangeImagePage: (page) => dispatch(changeImagePage(page)),
        onChangeImageLimit: (limit) => dispatch(changeImageLimit(limit)),
        onChangeImageSort: (field) => dispatch(changeImageSort(field)),
        onClickChangeImageView: (view) => dispatch(changeImageView(view)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenImageModal(isOpen)),
        onChangeImageFilterValue: (props) => dispatch(changeImageFilterValue(props)),
        onClickPutImageResourceToForm: (props) => dispatch(putImageResourceToForm(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
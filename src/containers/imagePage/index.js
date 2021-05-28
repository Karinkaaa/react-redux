import { connect } from "react-redux";
import Images from "../../pages/images";
import { clearImageForm, isOpenImageModal } from "../../actions/imageResourceForm";
import {
    changeImageFilterValue,
    changeImageLimit,
    changeImagePage,
    changeImageSort,
    changeImageView,
    getImageByIdSaga,
    getImagesSaga,
    removeImageSaga
} from "../../actions/imageResourceComponent";

const mapStateToProps = (state) => {
    return {
        images: state.images.imageList,
        count: state.images.count,
        view: state.images.view,
        pagination: state.images.pagination,
        sorting: state.images.sorting,
        filters: state.images.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: () => dispatch(getImagesSaga()),
        removeImage: (id) => dispatch(removeImageSaga(id)),
        onChangePage: (page) => dispatch(changeImagePage(page)),
        onChangeLimit: (limit) => dispatch(changeImageLimit(limit)),
        onChangeSort: (field) => dispatch(changeImageSort(field)),
        onChangeView: (view) => dispatch(changeImageView(view)),
        onChangeFilterValue: (props) => dispatch(changeImageFilterValue(props)),
        onPutData: (id) => dispatch(getImageByIdSaga(id)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearImageForm());
            dispatch(isOpenImageModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
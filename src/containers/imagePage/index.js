import { connect } from "react-redux";
import Images from "../../pages/images";
import { clearImageForm, isOpenImageModal } from "../../actions/imageResourceForm";
import { getImageByIdSaga, getImagesSaga, removeImageSaga } from "../../actions/imagesSaga";
import { IMAGES_KEY } from "../../utils/constants";
import {
    changeDataView,
    changeTableFilters,
    changeTableLimit,
    changeTablePage,
    changeTableSort
} from "../../actions/table";

const mapStateToProps = (state) => {
    return {
        images: state.table.images.list,
        count: state.table.images.count,
        view: state.table.images.view,
        pagination: state.table.images.pagination,
        sorting: state.table.images.sorting,
        filters: state.table.images.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getImages: () => dispatch(getImagesSaga()),
        removeImage: (id) => dispatch(removeImageSaga(id)),
        onChangePage: (page) => dispatch(changeTablePage(IMAGES_KEY, page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit(IMAGES_KEY, limit)),
        onChangeSort: (field) => dispatch(changeTableSort(IMAGES_KEY, field)),
        onChangeView: (view) => dispatch(changeDataView(IMAGES_KEY, view)),
        onChangeFilters: (filters) => dispatch(changeTableFilters(IMAGES_KEY, filters)),
        onPutDataToForm: (id) => dispatch(getImageByIdSaga(id)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearImageForm());
            dispatch(isOpenImageModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
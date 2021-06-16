import { connect } from "react-redux";
import Images from "../../pages/images";
import { clearImageForm, isOpenImageModal } from "../../actions/imageResourceForm";
import { getImageByIdSaga, getImagesSaga, removeImageSaga } from "../../actions/imagesSaga";
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
        onChangePage: (page) => dispatch(changeTablePage("images", page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit("images", limit)),
        onChangeSort: (field) => dispatch(changeTableSort("images", field)),
        onChangeView: (view) => dispatch(changeDataView("images", view)),
        onChangeFilters: (filters) => dispatch(changeTableFilters("images", filters)),
        onPutDataToForm: (id) => dispatch(getImageByIdSaga(id)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearImageForm());
            dispatch(isOpenImageModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Images);
import {connect} from "react-redux";
import {changeLimit, changePage, isOpenModal, putImageResourceToForm} from "../../actions/imageResourceForm";
import {deleteImageResource} from "../../actions/imageResourceComponent";
import ImageResourceComponent from "../../components/imageResourceComponent";

const filterSortPaginationArray = (arr, {pagination: {page, limit}}) => {

    const result = arr.slice(page * limit, page * limit + limit);
    return {data: result, count: arr.length};
}

const mapStateToProps = (state) => {
    console.log(state);

    const {data: images, count} = filterSortPaginationArray(state.images.imageList,
        {
            pagination: state.images.pagination,
        }
    );

    return {
        count,
        images,
        page: state.images.pagination.page,
        limit: state.images.pagination.limit
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteImageResource(id)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenModal(isOpen)),
        onClickPutImageResourceToForm: (props) => dispatch(putImageResourceToForm(props)),
        onChangePage: (page) => dispatch(changePage(page)),
        onChangeLimit: (limit) => dispatch(changeLimit(limit)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageResourceComponent);
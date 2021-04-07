import { connect } from "react-redux";
import Audios from "../../pages/audios";
import { filteringSortingPagingOfArray } from "../../utils/methods";
import { isOpenAudioModal, putAudioResourceToForm } from "../../actions/audioResourceForm";
import {
    changeAudioFilterValue,
    changeAudioLimit,
    changeAudioPage,
    changeAudioSort,
    changeAudioView,
    deleteAudioResource
} from "../../actions/audioResourceComponent";

const mapStateToProps = (state) => {
    const { data: audios, count } = filteringSortingPagingOfArray(state.audios.playlist,
        {
            pagination: state.audios.pagination,
            sorting: state.audios.sorting,
            filters: state.audios.filters
        }
    );

    return {
        count,
        audios,
        view: state.audios.view,
        pagination: state.audios.pagination,
        sorting: state.audios.sorting,
        filters: state.audios.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (props) => dispatch(deleteAudioResource(props)),
        onChangePage: (page) => dispatch(changeAudioPage(page)),
        onChangeLimit: (limit) => dispatch(changeAudioLimit(limit)),
        onChangeSort: (field) => dispatch(changeAudioSort(field)),
        onChangeView: (view) => dispatch(changeAudioView(view)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenAudioModal(isOpen)),
        onChangeFilterValue: (props) => dispatch(changeAudioFilterValue(props)),
        onClickPutResourceToForm: (props) => dispatch(putAudioResourceToForm(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Audios);
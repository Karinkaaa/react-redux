import { connect } from "react-redux";
import { filteringSortingPagingOfArray } from "../../utils/methods";
import { isOpenAudioModal, putAudioResourceToForm } from "../../actions/audioResourceForm";
import Audios from "../../pages/audios";
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
        onDelete: (id) => dispatch(deleteAudioResource(id)),
        onChangeAudioPage: (page) => dispatch(changeAudioPage(page)),
        onChangeAudioLimit: (limit) => dispatch(changeAudioLimit(limit)),
        onChangeAudioSort: (field) => dispatch(changeAudioSort(field)),
        onClickChangeAudioView: (view) => dispatch(changeAudioView(view)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenAudioModal(isOpen)),
        onChangeAudioFilterValue: (props) => dispatch(changeAudioFilterValue(props)),
        onClickPutAudioResourceToForm: (props) => dispatch(putAudioResourceToForm(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Audios);
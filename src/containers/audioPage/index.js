import { connect } from "react-redux";
import Audios from "../../pages/audios";
import { clearAudioForm, isOpenAudioModal } from "../../actions/audioResourceForm";
import {
    changeAudioFilterValue,
    changeAudioLimit,
    changeAudioPage,
    changeAudioSort,
    changeAudioView,
    getAudioByIdSaga,
    getAudiosSaga,
    removeAudioSaga
} from "../../actions/audioResourceComponent";

const mapStateToProps = (state) => {
    return {
        audios: state.audios.playlist,
        count: state.audios.count,
        view: state.audios.view,
        pagination: state.audios.pagination,
        sorting: state.audios.sorting,
        filters: state.audios.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAudios: () => dispatch(getAudiosSaga()),
        onPutData: (id) => dispatch(getAudioByIdSaga(id)),
        removeAudio: (id) => dispatch(removeAudioSaga(id)),
        onChangeView: (view) => dispatch(changeAudioView(view)),
        onChangePage: (page) => dispatch(changeAudioPage(page)),
        onChangeLimit: (limit) => dispatch(changeAudioLimit(limit)),
        onChangeSort: (field) => dispatch(changeAudioSort(field)),
        onChangeFilterValue: (props) => dispatch(changeAudioFilterValue(props)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearAudioForm());
            dispatch(isOpenAudioModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Audios);
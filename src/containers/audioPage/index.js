import { connect } from "react-redux";
import Audios from "../../pages/audios";
import { clearAudioForm, isOpenAudioModal } from "../../actions/audioResourceForm";
import { getAudioByIdSaga, getAudiosSaga, removeAudioSaga } from "../../actions/audiosSaga";
import {
    changeDataView,
    changeTableFilters,
    changeTableLimit,
    changeTablePage,
    changeTableSort
} from "../../actions/table";

const mapStateToProps = (state) => {
    return {
        audios: state.table.audios.list,
        count: state.table.audios.count,
        view: state.table.audios.view,
        pagination: state.table.audios.pagination,
        sorting: state.table.audios.sorting,
        filters: state.table.audios.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAudios: () => dispatch(getAudiosSaga()),
        onPutDataToForm: (id) => dispatch(getAudioByIdSaga(id)),
        removeAudio: (id) => dispatch(removeAudioSaga(id)),
        onChangeView: (view) => dispatch(changeDataView("audios", view)),
        onChangePage: (page) => dispatch(changeTablePage("audios", page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit("audios", limit)),
        onChangeSort: (field) => dispatch(changeTableSort("audios", field)),
        onChangeFilters: (filters) => dispatch(changeTableFilters("audios", filters)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearAudioForm());
            dispatch(isOpenAudioModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Audios);
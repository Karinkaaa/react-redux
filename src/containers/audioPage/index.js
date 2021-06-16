import { connect } from "react-redux";
import Audios from "../../pages/audios";
import { clearAudioForm, isOpenAudioModal } from "../../actions/audioResourceForm";
import { getAudioByIdSaga, getAudiosSaga, removeAudioSaga } from "../../actions/audiosSaga";
import { AUDIOS_KEY } from "../../utils/constants";
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
        onChangeView: (view) => dispatch(changeDataView(AUDIOS_KEY, view)),
        onChangePage: (page) => dispatch(changeTablePage(AUDIOS_KEY, page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit(AUDIOS_KEY, limit)),
        onChangeSort: (field) => dispatch(changeTableSort(AUDIOS_KEY, field)),
        onChangeFilters: (filters) => dispatch(changeTableFilters(AUDIOS_KEY, filters)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearAudioForm());
            dispatch(isOpenAudioModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Audios);
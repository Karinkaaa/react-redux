import { connect } from "react-redux";
import AudioResourceForm from "../../components/audioResourceForm";
import { getAudioByIdSaga, saveAudioSaga, updateAudioSaga } from "../../actions/audiosSaga";
import { changeFormData } from "../../actions/form";
import { AUDIOS_KEY } from "../../utils/constants";

const mapStateToProps = (state) => {
    return {
        name: state.form.audios.name,
        url: state.form.audios.url
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveAudio: (audio) => dispatch(saveAudioSaga(audio)),
        onUpdateAudio: (id, audio) => dispatch(updateAudioSaga(id, audio)),
        onPutDataToForm: (id) => dispatch(getAudioByIdSaga(id)),
        onChangeFormData: (key, value) => dispatch(changeFormData(AUDIOS_KEY, key, value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioResourceForm);
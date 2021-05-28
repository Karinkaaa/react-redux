import { connect } from "react-redux";
import AudioResourceForm from "../../components/audioResourceForm";
import {
    isOpenAudioModal,
    saveAudioSaga,
    updateAudioName,
    updateAudioSaga,
    updateAudioUrl
} from "../../actions/audioResourceForm";

const mapStateToProps = (state) => {
    return {
        id: state.audioForm.id,
        name: state.audioForm.name,
        isValidName: state.audioForm.isValidName,
        url: state.audioForm.url,
        isValidUrl: state.audioForm.isValidUrl,
        isOpen: state.audioForm.isOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveAudio: (audio) => dispatch(saveAudioSaga(audio)),
        updateAudio: (id, audio) => dispatch(updateAudioSaga(id, audio)),
        onChangeName: (name) => dispatch(updateAudioName(name)),
        onChangeUrl: (url) => dispatch(updateAudioUrl(url)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenAudioModal(isOpen))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioResourceForm);
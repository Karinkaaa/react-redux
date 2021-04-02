import { connect } from "react-redux";
import AudioResourceForm from "../../components/imageResourceForm";
import { addAudioResource, updateAudioResource } from "../../actions/audioResourceComponent";
import { isOpenAudioModal, updateAudioName, updateAudioUrl } from "../../actions/audioResourceForm";

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
        onChangeName: (name) => dispatch(updateAudioName(name)),
        onChangeUrl: (url) => dispatch(updateAudioUrl(url)),
        onSave: (props) => dispatch(addAudioResource(props)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenAudioModal(isOpen)),
        onUpdate: (props) => dispatch(updateAudioResource(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioResourceForm);
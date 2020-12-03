import { connect } from "react-redux";
import AudioResourceForm from "../../components/imageResourceForm";
import { addAudioResource, updateAudioResource } from "../../actions/audioResourceComponent";
import { isOpenAudioModal, updateAudioName, updateAudioUrl } from "../../actions/audioResourceForm";

const mapStateToProps = (state) => {
    return {
        id: state.createAudioForm.id,
        name: state.createAudioForm.name,
        isValidName: state.createAudioForm.isValidName,
        url: state.createAudioForm.url,
        isValidUrl: state.createAudioForm.isValidUrl,
        isOpen: state.createAudioForm.isOpen
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
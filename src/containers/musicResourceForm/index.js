import { connect } from "react-redux";
import MusicResourceForm from "../../components/imageResourceForm";
import { addMusicResource, updateMusicResource } from "../../actions/musicResourceComponent";
import { isOpenMusicModal, updateMusicName, updateMusicUrl } from "../../actions/musicResourceForm";

const mapStateToProps = (state) => {
    return {
        id: state.createMusicForm.id,
        name: state.createMusicForm.name,
        isValidName: state.createMusicForm.isValidName,
        url: state.createMusicForm.url,
        isValidUrl: state.createMusicForm.isValidUrl,
        isOpen: state.createMusicForm.isOpen
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChangeName: (name) => dispatch(updateMusicName(name)),
        onChangeUrl: (url) => dispatch(updateMusicUrl(url)),
        onSave: (props) => dispatch(addMusicResource(props)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenMusicModal(isOpen)),
        onUpdate: (props) => dispatch(updateMusicResource(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicResourceForm);
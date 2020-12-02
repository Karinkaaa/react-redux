import { connect } from "react-redux";
import { filteringSortingPagingOfArray } from "../../utils/methods";
import { isOpenMusicModal, putMusicResourceToForm } from "../../actions/musicResourceForm";
import Music from "../../pages/music";
import {
    changeMusicFilterValue,
    changeMusicLimit,
    changeMusicPage,
    changeMusicSort,
    changeMusicView,
    deleteMusicResource
} from "../../actions/musicResourceComponent";

const mapStateToProps = (state) => {
    const { data: music, count } = filteringSortingPagingOfArray(state.music.playlist,
        {
            pagination: state.music.pagination,
            sorting: state.music.sorting,
            filters: state.music.filters
        }
    );

    return {
        count,
        music,
        view: state.music.view,
        pagination: state.music.pagination,
        sorting: state.music.sorting,
        filters: state.music.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteMusicResource(id)),
        onChangeMusicPage: (page) => dispatch(changeMusicPage(page)),
        onChangeMusicLimit: (limit) => dispatch(changeMusicLimit(limit)),
        onChangeMusicSort: (field) => dispatch(changeMusicSort(field)),
        onClickChangeMusicView: (view) => dispatch(changeMusicView(view)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenMusicModal(isOpen)),
        onChangeMusicFilterValue: (props) => dispatch(changeMusicFilterValue(props)),
        onClickPutMusicResourceToForm: (props) => dispatch(putMusicResourceToForm(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Music);
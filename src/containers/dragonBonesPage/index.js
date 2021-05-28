import { connect } from "react-redux";
import DragonBones from "../../pages/dragonBones";
import { clearDragonBoneForm, isOpenDragonBoneModal } from "../../actions/dragonBonesResourceForm";
import {
    changeDragonBonesFilterValue,
    changeDragonBonesLimit,
    changeDragonBonesPage,
    changeDragonBonesSort,
    changeDragonBonesView,
    getDragonBoneByIdSaga,
    getDragonBonesSaga,
    removeDragonBoneSaga
} from "../../actions/dragonBonesResourceComponent";

const mapStateToProps = (state) => {
    return {
        dragonBones: state.dragonBones.dragonBonesList,
        count: state.dragonBones.count,
        view: state.dragonBones.view,
        pagination: state.dragonBones.pagination,
        sorting: state.dragonBones.sorting,
        filters: state.dragonBones.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDragonBones: () => dispatch(getDragonBonesSaga()),
        onPutData: (id) => dispatch(getDragonBoneByIdSaga(id)),
        removeDragonBone: (id) => dispatch(removeDragonBoneSaga(id)),
        onChangePage: (page) => dispatch(changeDragonBonesPage(page)),
        onChangeLimit: (limit) => dispatch(changeDragonBonesLimit(limit)),
        onChangeSort: (field) => dispatch(changeDragonBonesSort(field)),
        onChangeView: (view) => dispatch(changeDragonBonesView(view)),
        onChangeFilterValue: (props) => dispatch(changeDragonBonesFilterValue(props)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearDragonBoneForm());
            dispatch(isOpenDragonBoneModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonBones);
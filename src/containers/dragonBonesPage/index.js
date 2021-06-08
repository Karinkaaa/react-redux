import { connect } from "react-redux";
import DragonBones from "../../pages/dragonBones";
import { clearDragonBoneForm, isOpenDragonBoneModal } from "../../actions/dragonBonesResourceForm";
import { getDragonBoneByIdSaga, getDragonBonesSaga, removeDragonBoneSaga } from "../../actions/dragonBonesSaga";
import {
    changeDataView,
    changeTableFilters,
    changeTableLimit,
    changeTablePage,
    changeTableSort
} from "../../actions/table";

const mapStateToProps = (state) => {
    return {
        dragonBones: state.table.dragonBones.list,
        count: state.table.dragonBones.count,
        view: state.table.dragonBones.view,
        pagination: state.table.dragonBones.pagination,
        sorting: state.table.dragonBones.sorting,
        filters: state.table.dragonBones.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDragonBones: () => dispatch(getDragonBonesSaga()),
        onPutData: (id) => dispatch(getDragonBoneByIdSaga(id)),
        removeDragonBone: (id) => dispatch(removeDragonBoneSaga(id)),
        onChangePage: (page) => dispatch(changeTablePage("dragonBones", page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit("dragonBones", limit)),
        onChangeSort: (field) => dispatch(changeTableSort("dragonBones", field)),
        onChangeView: (view) => dispatch(changeDataView("dragonBones", view)),
        onChangeFilters: (filters) => dispatch(changeTableFilters("dragonBones", filters)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearDragonBoneForm());
            dispatch(isOpenDragonBoneModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonBones);
import { connect } from "react-redux";
import DragonBones from "../../pages/dragonBones";
import { clearDragonBoneForm, isOpenDragonBoneModal } from "../../actions/dragonBonesResourceForm";
import { getDragonBoneByIdSaga, getDragonBonesSaga, removeDragonBoneSaga } from "../../actions/dragonBonesSaga";
import { DRAGON_BONES_KEY } from "../../utils/constants";
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
        onPutDataToForm: (id) => dispatch(getDragonBoneByIdSaga(id)),
        removeDragonBone: (id) => dispatch(removeDragonBoneSaga(id)),
        onChangePage: (page) => dispatch(changeTablePage(DRAGON_BONES_KEY, page)),
        onChangeLimit: (limit) => dispatch(changeTableLimit(DRAGON_BONES_KEY, limit)),
        onChangeSort: (field) => dispatch(changeTableSort(DRAGON_BONES_KEY, field)),
        onChangeView: (view) => dispatch(changeDataView(DRAGON_BONES_KEY, view)),
        onChangeFilters: (filters) => dispatch(changeTableFilters(DRAGON_BONES_KEY, filters)),
        onChangeIsOpen: (isOpen) => {
            dispatch(clearDragonBoneForm());
            dispatch(isOpenDragonBoneModal(isOpen));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonBones);
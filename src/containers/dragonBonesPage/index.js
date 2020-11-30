import { connect } from "react-redux";
import DragonBones from "../../pages/dragonBones";
import { filteringSortingPagingOfArray } from "../../utils/methods";
import { isOpenDragonBonesModal, putDragonBonesResourceToForm } from "../../actions/dragonBonesResourceForm";
import {
    changeDragonBonesFilterValue,
    changeDragonBonesLimit,
    changeDragonBonesPage,
    changeDragonBonesSort,
    changeDragonBonesView,
    deleteDragonBonesResource
} from "../../actions/dragonBonesResourceComponent";

const mapStateToProps = (state) => {
    const { data: dragonBones, count } = filteringSortingPagingOfArray(state.dragonBones.dragonBonesList,
        {
            pagination: state.dragonBones.pagination,
            sorting: state.dragonBones.sorting,
            filters: state.dragonBones.filters
        }
    );

    return {
        count,
        dragonBones,
        view: state.dragonBones.view,
        pagination: state.dragonBones.pagination,
        sorting: state.dragonBones.sorting,
        filters: state.dragonBones.filters
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteDragonBonesResource(id)),
        onChangeDragonBonesPage: (page) => dispatch(changeDragonBonesPage(page)),
        onChangeDragonBonesLimit: (limit) => dispatch(changeDragonBonesLimit(limit)),
        onChangeDragonBonesSort: (field) => dispatch(changeDragonBonesSort(field)),
        onClickChangeDragonBonesView: (view) => dispatch(changeDragonBonesView(view)),
        onChangeIsOpen: (isOpen) => dispatch(isOpenDragonBonesModal(isOpen)),
        onChangeDragonBonesFilterValue: (props) => dispatch(changeDragonBonesFilterValue(props)),
        onClickPutDragonBonesResourceToForm: (props) => dispatch(putDragonBonesResourceToForm(props))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonBones);
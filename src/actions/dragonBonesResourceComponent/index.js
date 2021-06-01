import {
    GET_DRAGON_BONE_BY_ID_SAGA,
    GET_DRAGON_BONES_SAGA,
    REMOVE_DRAGON_BONE_SAGA
} from "../../utils/actionSagaConstants";
import {
    CHANGE_DRAGON_BONES_FILTER_VALUE,
    CHANGE_DRAGON_BONES_LIMIT,
    CHANGE_DRAGON_BONES_PAGE,
    CHANGE_DRAGON_BONES_SORT,
    CHANGE_DRAGON_BONES_VIEW,
    SET_DRAGON_BONES,
    SET_TOTAL_DRAGON_BONES_COUNT
} from "../../utils/actionConstants";

export const setDragonBones = (dragonBones) => ({
    type: SET_DRAGON_BONES,
    dragonBones
});

export const setTotalDragonBonesCount = (count) => ({
    type: SET_TOTAL_DRAGON_BONES_COUNT,
    count
});

export const changeDragonBonesView = (view) => ({
    type: CHANGE_DRAGON_BONES_VIEW,
    view
});

export const changeDragonBonesPage = (page) => ({
    type: CHANGE_DRAGON_BONES_PAGE,
    page
});

export const changeDragonBonesLimit = (limit) => ({
    type: CHANGE_DRAGON_BONES_LIMIT,
    limit
});

export const changeDragonBonesSort = (field) => ({
    type: CHANGE_DRAGON_BONES_SORT,
    field
});

export const changeDragonBonesFilterValue = ({ filterKey, filterValue }) => ({
    type: CHANGE_DRAGON_BONES_FILTER_VALUE,
    filterKey,
    filterValue
});

// saga
export const getDragonBonesSaga = () => ({
    type: GET_DRAGON_BONES_SAGA
});

export const getDragonBoneByIdSaga = (id) => ({
    type: GET_DRAGON_BONE_BY_ID_SAGA,
    id
});

export const removeDragonBoneSaga = ({ id }) => ({
    type: REMOVE_DRAGON_BONE_SAGA,
    id
});
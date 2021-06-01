import { GET_ANIMATION_BY_ID_SAGA, GET_ANIMATIONS_SAGA, REMOVE_ANIMATION_SAGA } from "../../utils/actionSagaConstants";
import {
    CHANGE_ANIMATION_FILTER_VALUE,
    CHANGE_ANIMATION_LIMIT,
    CHANGE_ANIMATION_PAGE,
    CHANGE_ANIMATION_SORT,
    CHANGE_ANIMATION_VIEW,
    SET_ANIMATION_FORM,
    SET_ANIMATIONS,
    SET_TOTAL_ANIMATIONS_COUNT
} from "../../utils/actionConstants";

export const changeAnimationView = (view) => ({
    type: CHANGE_ANIMATION_VIEW,
    view
});

export const changeAnimationPage = (page) => ({
    type: CHANGE_ANIMATION_PAGE,
    page
});

export const changeAnimationLimit = (limit) => ({
    type: CHANGE_ANIMATION_LIMIT,
    limit
});

export const changeAnimationSort = (field) => ({
    type: CHANGE_ANIMATION_SORT,
    field
});

export const changeAnimationFilterValue = ({ filterKey, filterValue }) => ({
    type: CHANGE_ANIMATION_FILTER_VALUE,
    filterKey,
    filterValue
});

export const setAnimations = (animations) => ({
    type: SET_ANIMATIONS,
    animations
});

export const setAnimationForm = (animation) => ({
    type: SET_ANIMATION_FORM,
    animation
});

export const setTotalAnimationsCount = (count) => ({
    type: SET_TOTAL_ANIMATIONS_COUNT,
    count
});

// saga
export const getAnimationsSaga = () => ({
    type: GET_ANIMATIONS_SAGA
});

export const getAnimationByIdSaga = (id) => ({
    type: GET_ANIMATION_BY_ID_SAGA,
    id
});

export const removeAnimationSaga = ({ id }) => ({
    type: REMOVE_ANIMATION_SAGA,
    id
});

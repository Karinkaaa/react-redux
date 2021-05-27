import {
    CHANGE_IMAGE_FILTER_VALUE,
    CHANGE_IMAGE_LIMIT,
    CHANGE_IMAGE_PAGE,
    CHANGE_IMAGE_SORT,
    CHANGE_IMAGE_VIEW,
    GET_IMAGE_BY_ID_SAGA,
    GET_IMAGES_SAGA,
    REMOVE_IMAGE_SAGA,
    SET_IMAGES,
    SET_TOTAL_IMAGES_COUNT
} from "../../utils/actionConstants";

export const setImages = (images) => ({
    type: SET_IMAGES,
    images
});

export const changeImageView = (view) => ({
    type: CHANGE_IMAGE_VIEW,
    view
});

export const changeImagePage = (page) => ({
    type: CHANGE_IMAGE_PAGE,
    page
});

export const changeImageLimit = (limit) => ({
    type: CHANGE_IMAGE_LIMIT,
    limit
});

export const changeImageSort = (field) => ({
    type: CHANGE_IMAGE_SORT,
    field
});

export const setTotalImagesCount = (count) => ({
    type: SET_TOTAL_IMAGES_COUNT,
    count
});

export const changeImageFilterValue = ({ filterKey, filterValue }) => ({
    type: CHANGE_IMAGE_FILTER_VALUE,
    filterKey,
    filterValue
});

// saga
export const getImagesSaga = () => ({
    type: GET_IMAGES_SAGA
});

export const getImageByIdSaga = (id) => ({
    type: GET_IMAGE_BY_ID_SAGA,
    id
});

export const removeImageSaga = ({ id }) => ({
    type: REMOVE_IMAGE_SAGA,
    id
});

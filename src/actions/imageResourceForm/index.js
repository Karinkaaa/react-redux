import {
    CHANGE_LIMIT,
    CHANGE_PAGE,
    CHANGE_VIEW,
    IS_OPEN_MODAL,
    PUT_IMAGE_RESOURCE_TO_FORM,
    UPDATE_IMAGE_NAME,
    UPDATE_IMAGE_URL
} from "../../utils/constants";

export const updateName = (name) => ({
    type: UPDATE_IMAGE_NAME,
    name
});

export const updateUrl = (url) => ({
    type: UPDATE_IMAGE_URL,
    url
});

export const isOpenModal = (isOpen) => ({
    type: IS_OPEN_MODAL,
    isOpen
});

export const changeView = (view) => ({
    type: CHANGE_VIEW,
    view
});

export const putImageResourceToForm = ({id, name, url}) => ({
    type: PUT_IMAGE_RESOURCE_TO_FORM,
    id,
    name,
    url
});

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
});

export const changeLimit = (limit) => ({
    type: CHANGE_LIMIT,
    limit
});

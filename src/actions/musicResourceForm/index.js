import {
    IS_OPEN_MUSIC_MODAL,
    PUT_MUSIC_RESOURCE_TO_FORM,
    UPDATE_MUSIC_NAME,
    UPDATE_MUSIC_URL
} from "../../utils/actionConstants";

export const updateMusicName = (name) => ({
    type: UPDATE_MUSIC_NAME,
    name
});

export const updateMusicUrl = (url) => ({
    type: UPDATE_MUSIC_URL,
    url
});

export const isOpenMusicModal = (isOpen) => ({
    type: IS_OPEN_MUSIC_MODAL,
    isOpen
});

export const putMusicResourceToForm = ({ id, name, url }) => ({
    type: PUT_MUSIC_RESOURCE_TO_FORM,
    id,
    name,
    url
});

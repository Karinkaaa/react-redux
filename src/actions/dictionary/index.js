import { GET_DROPDOWN_SAGA, SET_DROPDOWN } from "../../utils/actionConstants";

export const getDropdownSaga = (key) => ({
    type: GET_DROPDOWN_SAGA,
    key
});

export const setDropdown = (key, value) => ({
    type: SET_DROPDOWN,
    key,
    value
});
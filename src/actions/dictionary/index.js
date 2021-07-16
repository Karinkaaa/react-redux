import { GET_DROPDOWN_SAGA, SET_DROPDOWN } from "../../utils/actionConstants";

export const getDropdownSaga = (key, filterName) => ({
    type: GET_DROPDOWN_SAGA,
    key,
    filterName
});

export const setDropdown = (key, value) => ({
    type: SET_DROPDOWN,
    key,
    value
});
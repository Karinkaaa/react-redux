import {
    CHANGE_DATA_VIEW,
    CHANGE_TABLE_FILTERS,
    CHANGE_TABLE_LIMIT,
    CHANGE_TABLE_PAGE,
    CHANGE_TABLE_SORT,
    SET_TABLE_DATA,
    SET_TOTAL_TABLE_DATA_COUNT
} from "../../utils/actionConstants";

export const setTableData = (tableKey, list) => ({
    type: SET_TABLE_DATA,
    tableKey,
    list
});

export const setTotalTableDataCount = (tableKey, count) => ({
    type: SET_TOTAL_TABLE_DATA_COUNT,
    tableKey,
    count
});

export const changeDataView = (tableKey, view) => ({
    type: CHANGE_DATA_VIEW,
    tableKey,
    view
});

export const changeTablePage = (tableKey, page) => ({
    type: CHANGE_TABLE_PAGE,
    tableKey,
    page
});

export const changeTableLimit = (tableKey, limit) => ({
    type: CHANGE_TABLE_LIMIT,
    tableKey,
    limit
});

export const changeTableSort = (tableKey, field) => ({
    type: CHANGE_TABLE_SORT,
    tableKey,
    field
});

export const changeTableFilters = (tableKey, filters) => ({
    type: CHANGE_TABLE_FILTERS,
    tableKey,
    filters
});
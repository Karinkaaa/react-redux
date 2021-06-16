import reducer, { initialState } from "./index";
import { ASCENDING_SORT, DESCENDING_SORT, GRID, IMAGES_KEY, TABLE } from "../../utils/constants";
import {
    changeDataView,
    changeTableFilters,
    changeTableLimit,
    changeTablePage,
    changeTableSort,
    setTableData,
    setTotalTableDataCount
} from "../../actions/table";
import {
    CHANGE_DATA_VIEW,
    CHANGE_TABLE_FILTERS,
    CHANGE_TABLE_LIMIT,
    CHANGE_TABLE_PAGE,
    CHANGE_TABLE_SORT,
    SET_TABLE_DATA,
    SET_TOTAL_TABLE_DATA_COUNT
} from "../../utils/actionConstants";

describe("Table Reducer", () => {
    it("Should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("Should handle " + SET_TABLE_DATA, () => {
        const action = setTableData(IMAGES_KEY, [1, 2]);

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [IMAGES_KEY]: {
                list: [1, 2],
                count: 0,
                view: TABLE,
                pagination: {
                    page: 0,
                    limit: 4
                },
                sorting: {
                    field: "",
                    direction: DESCENDING_SORT
                },
                filters: {}
            }
        });
    });

    it("Should handle " + SET_TOTAL_TABLE_DATA_COUNT, () => {
        const action = setTotalTableDataCount(IMAGES_KEY, 12);

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [IMAGES_KEY]: {
                list: [],
                count: 12,
                view: TABLE,
                pagination: {
                    page: 0,
                    limit: 4
                },
                sorting: {
                    field: "",
                    direction: DESCENDING_SORT
                },
                filters: {}
            }
        });
    });

    it("Should handle " + CHANGE_DATA_VIEW, () => {
        const action = changeDataView(IMAGES_KEY, GRID);

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [IMAGES_KEY]: {
                list: [],
                count: 0,
                view: GRID,
                pagination: {
                    page: 0,
                    limit: 4
                },
                sorting: {
                    field: "",
                    direction: DESCENDING_SORT
                },
                filters: {}
            }
        });
    });

    it("Should handle " + CHANGE_TABLE_PAGE, () => {
        const action = changeTablePage(IMAGES_KEY, 1);

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [IMAGES_KEY]: {
                list: [],
                count: 0,
                view: TABLE,
                pagination: {
                    page: 1,
                    limit: 4
                },
                sorting: {
                    field: "",
                    direction: DESCENDING_SORT
                },
                filters: {}
            }
        });
    });

    it("Should handle " + CHANGE_TABLE_LIMIT, () => {
        const action = changeTableLimit(IMAGES_KEY, 5);

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [IMAGES_KEY]: {
                list: [],
                count: 0,
                view: TABLE,
                pagination: {
                    page: 0,
                    limit: 5
                },
                sorting: {
                    field: "",
                    direction: DESCENDING_SORT
                },
                filters: {}
            }
        });
    });

    it("Should handle " + CHANGE_TABLE_SORT, () => {
        const action = changeTableSort(IMAGES_KEY, "name");

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [IMAGES_KEY]: {
                list: [],
                count: 0,
                view: TABLE,
                pagination: {
                    page: 0,
                    limit: 4
                },
                sorting: {
                    field: "name",
                    direction: ASCENDING_SORT
                },
                filters: {}
            }
        });
    });

    it("Should handle " + CHANGE_TABLE_FILTERS, () => {
        const action = changeTableFilters(IMAGES_KEY, { filterKey: "name", filterValue: "al" });

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [IMAGES_KEY]: {
                list: [],
                count: 0,
                view: TABLE,
                pagination: {
                    page: 0,
                    limit: 4
                },
                sorting: {
                    field: "",
                    direction: DESCENDING_SORT
                },
                filters: {
                    filterKey: "name",
                    filterValue: "al"
                }
            }
        });
    });
});
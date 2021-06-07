import { GRID, TABLE } from "../../utils/constants";
import reducer, { initialState } from "./index";
import {
    changeDataView,
    changeTableFilters,
    changeTableLimit,
    changeTablePage,
    changeTableSort,
    setTableData,
    setTotalTableDataCount
} from "../../actions/table";

const RESOURCE = "IMAGES";

describe("Table Reducer", () => {
    it("Should return the initial state", () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("Should handle SET_TABLE_DATA", () => {
        const action = setTableData(RESOURCE, [1, 2]);

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [RESOURCE]: {
                list: [1, 2],
                count: 0,
                view: TABLE,
                pagination: {
                    page: 0,
                    limit: 4
                },
                sorting: {
                    field: "",
                    direction: "desc"
                },
                filters: {}
            }
        });
    });

    it("Should handle SET_TOTAL_TABLE_DATA_COUNT", () => {
        const action = setTotalTableDataCount(RESOURCE, 12);

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [RESOURCE]: {
                list: [],
                count: 12,
                view: TABLE,
                pagination: {
                    page: 0,
                    limit: 4
                },
                sorting: {
                    field: "",
                    direction: "desc"
                },
                filters: {}
            }
        });
    });

    it("Should handle CHANGE_DATA_VIEW", () => {
        const action = changeDataView(RESOURCE, GRID);

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [RESOURCE]: {
                list: [],
                count: 0,
                view: GRID,
                pagination: {
                    page: 0,
                    limit: 4
                },
                sorting: {
                    field: "",
                    direction: "desc"
                },
                filters: {}
            }
        });
    });

    it("Should handle CHANGE_TABLE_PAGE", () => {
        const action = changeTablePage(RESOURCE, 1);

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [RESOURCE]: {
                list: [],
                count: 0,
                view: TABLE,
                pagination: {
                    page: 1,
                    limit: 4
                },
                sorting: {
                    field: "",
                    direction: "desc"
                },
                filters: {}
            }
        });
    });

    it("Should handle CHANGE_TABLE_LIMIT", () => {
        const action = changeTableLimit(RESOURCE, 5);

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [RESOURCE]: {
                list: [],
                count: 0,
                view: TABLE,
                pagination: {
                    page: 0,
                    limit: 5
                },
                sorting: {
                    field: "",
                    direction: "desc"
                },
                filters: {}
            }
        });
    });

    it("Should handle CHANGE_TABLE_SORT", () => {
        const action = changeTableSort(RESOURCE, "name");

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [RESOURCE]: {
                list: [],
                count: 0,
                view: TABLE,
                pagination: {
                    page: 0,
                    limit: 4
                },
                sorting: {
                    field: "name",
                    direction: "asc"
                },
                filters: {}
            }
        });
    });

    it("Should handle CHANGE_TABLE_FILTERS", () => {
        const action = changeTableFilters(RESOURCE, { filterKey: "name", filterValue: "al" });

        expect(reducer(undefined, action)).toEqual({
            ...initialState,
            [RESOURCE]: {
                list: [],
                count: 0,
                view: TABLE,
                pagination: {
                    page: 0,
                    limit: 4
                },
                sorting: {
                    field: "",
                    direction: "desc"
                },
                filters: {
                    filterKey: "name",
                    filterValue: "al"
                }
            }
        });
    });
});
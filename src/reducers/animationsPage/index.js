import uuid from "react-uuid";
import {arrayMove} from "react-sortable-hoc";
import {removeItemFrom, saveItemTo} from "../../utils/methods";
import {
    ADD_ANIMATION_RESOURCE,
    CHANGE_ANIMATION_FILTER_VALUE,
    CHANGE_ANIMATION_LIMIT,
    CHANGE_ANIMATION_PAGE,
    CHANGE_ANIMATION_SORT,
    CHANGE_ANIMATION_VIEW,
    DELETE_ANIMATION_RESOURCE,
    DRAG_AND_DROP,
    UPDATE_ANIMATION_RESOURCE
} from "../../utils/constants";

const initialState = {
    animationList: [
        {
            id: "3",
            name: "Black cats",
            urls: [
                "data:image/jpeg;base64,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",
                "data:image/jpeg;base64,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",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIcaNn1JBQKw6i1ExnEVYie94mF246dgceBA&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg2x281VRGHXmKeslCHwVMgqI7Ep36m8LEow&usqp=CAU"
            ]
        },
        {
            id: "1",
            name: "Abstract",
            urls: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwRclUvJIdVEGUru0ZpZ3xMmkjwmeueDqzHQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSd8pH_aWkgHJ4F95q6SHj3dK_AKttp1n_wlw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUGY-ErWOw-KCv2ENc2n16VvJejyRKUhx78w&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyZ1etrh0R1kbCGvs5nw3rOLFtcIn7Q54qSg&usqp=CAU"
            ]
        },
        {
            id: "2",
            name: "Abstract cats",
            urls: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWlC6FRzs4Snfz8I-a2gOWkfktjyfWGXG2PQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtMUSQKFFjorlvcf2_DiHkUIpm_7TVCFagdw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_Y9SPn3CFFpdzEBU0Ve64ny7qDh0uD7NMnA&usqp=CAU"
            ]
        },
        {
            id: "4",
            name: "White cats",
            urls: [
                "data:image/jpeg;base64,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",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSo0is3arwB_sSHu1PpPc1N0Gp4ZCTEYIkgXg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgWpyGnpaKz99L6W82PQnWW-zlqPMw4ER3Bg&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMeHwL3D2eeVmFxNV9CiX-5u87X1r_5g6Ciw&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxwfcO4AxIUCCorW_yxZVRXfDCl6HXFl4-PA&usqp=CAU"
            ]
        },
        {
            id: "5",
            name: "Abstraction",
            urls: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUGY-ErWOw-KCv2ENc2n16VvJejyRKUhx78w&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyZ1etrh0R1kbCGvs5nw3rOLFtcIn7Q54qSg&usqp=CAU"
            ]
        }
    ],
    view: "table",
    pagination: {
        page: 0,
        limit: 4
    },
    sorting: {
        field: "",
        direction: "desc"
    },
    filters: {},
}

export default (state = initialState, action) => {

    switch (action.type) {

        case ADD_ANIMATION_RESOURCE: {

            const {animationList} = state;
            const {name, urls} = action;

            return {
                ...state,
                animationList: saveItemTo(animationList, {
                    id: uuid(),
                    name,
                    urls
                })
            }
        }
        case UPDATE_ANIMATION_RESOURCE: {

            const {animationList} = state;
            const {id, name, urls} = action;

            return {
                ...state,
                animationList: saveItemTo(animationList, {id, name, urls})
            }
        }
        case DELETE_ANIMATION_RESOURCE: {

            const {animationList} = state;
            const {id} = action;

            return {
                ...state,
                animationList: removeItemFrom(animationList, id)
            };
        }
        case CHANGE_ANIMATION_VIEW: {
            return {
                ...state,
                view: action.view
            }
        }
        case CHANGE_ANIMATION_PAGE: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.page
                }
            }
        }
        case CHANGE_ANIMATION_LIMIT: {
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: 0,
                    limit: action.limit
                }
            }
        }
        case CHANGE_ANIMATION_SORT: {
            return {
                ...state,
                sorting: {
                    ...state.sorting,
                    field: action.field,
                    direction: (state.sorting.direction === "asc") ? "desc" : "asc"
                }
            }
        }
        case CHANGE_ANIMATION_FILTER_VALUE: {
            const {filterKey, filterValue} = action;

            if (filterValue !== null) {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        [filterKey]: filterValue
                    }
                }
            }

            return {
                ...state,
                filters: {
                    ...state.filters
                }
            }
        }
        case DRAG_AND_DROP: {

            const {oldIndex, newIndex, id} = action;
            const newAnimationList = [...state.animationList];

            let animationItem = newAnimationList.find(item => item.id === id);
            animationItem.urls = arrayMove(animationItem.urls, oldIndex, newIndex);

            return {
                ...state,
                animationList: newAnimationList
            }
        }
        default:
            return state;
    }
}
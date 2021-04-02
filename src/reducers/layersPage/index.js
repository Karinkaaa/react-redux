import uuid from "react-uuid";
import { removeItemById, saveItemTo } from "../../utils/methods";
import { ADD_LAYER, DELETE_LAYER_ELEMENT } from "../../utils/actionConstants";

const initialState = {
    layerList: [
        {
            id: "123",
            name: "Layer 1",
            elements: [
                {
                    id: "1",
                    position: {
                        x: 200,
                        y: 300
                    },
                    scale: {
                        x: 2,
                        y: 2
                    }
                },
                {
                    id: "2",
                    position: {
                        x: 400,
                        y: 500
                    },
                    scale: {
                        x: 3,
                        y: 3
                    }
                }
            ]
        },
        {
            id: "1235",
            name: "Layer 4",
            elements: [
                {
                    id: "6",
                    position: {
                        x: 200,
                        y: 300
                    },
                    scale: {
                        x: 2,
                        y: 2
                    }
                },
                {
                    id: "8",
                    position: {
                        x: 400,
                        y: 500
                    },
                    scale: {
                        x: 3,
                        y: 3
                    }
                }
            ]
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LAYER: {
            const { layerList } = state;
            const { name, elements } = action;

            return {
                ...state,
                layerList: saveItemTo(layerList, {
                    id: uuid(),
                    name,
                    elements
                })
            };
        }
        case DELETE_LAYER_ELEMENT: {
            const { layerList } = state;

            return {
                ...state,
                layerList: removeItemById(layerList, action.id)
            };
        }
        default:
            return state;
    }
}

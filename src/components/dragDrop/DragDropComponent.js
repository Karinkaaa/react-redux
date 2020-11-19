import React from "react";
import PropTypes from "prop-types";
import weakKey from "weak-key";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {reorder} from "../../utils/methods";

const DragDropComponent = ({items, onDragAndDrop, renderItem}) => {
    return (
        <DragDropContext
            onDragEnd={(result) => {
                if (!result.destination) {
                    return;
                }
                onDragAndDrop(reorder(
                    items,
                    result.source.index,
                    result.destination.index
                ));
            }}
        >
            <Droppable droppableId="droppable">
                {
                    (provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {
                                items.map((item, index) => (
                                    <Draggable key={weakKey(item)} draggableId={weakKey(item)} index={index}>
                                        {
                                            (provided) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {renderItem(item)}
                                                </div>
                                            )
                                        }
                                    </Draggable>
                                ))
                            }
                            {provided.placeholder}
                        </div>
                    )
                }
            </Droppable>
        </DragDropContext>
    );
}

DragDropComponent.propTypes = {
    items: PropTypes.array.isRequired,
    onDragAndDrop: PropTypes.func.isRequired,
    renderItem: PropTypes.func.isRequired,
}

export default DragDropComponent
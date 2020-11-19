import React from "react";
import PropTypes from "prop-types";
import weakKey from "weak-key";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {reorder} from "../../utils/methods";

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "darkcyan" : "#335068",
    width: "100%"
});

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",

    // change background colour if dragging
    background: isDragging ? "darkcyan" : "#335068",

    // styles we need to apply on draggable
    ...draggableStyle
});

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
                    (provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}
                        >
                            {
                                items.map((item, index) => (
                                    <Draggable key={weakKey(item)} draggableId={weakKey(item)} index={index}>
                                        {
                                            (provided, snapshot) => (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={getItemStyle(
                                                        snapshot.isDragging,
                                                        provided.draggableProps.style
                                                    )}
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
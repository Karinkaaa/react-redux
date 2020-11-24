import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import NestedTableItem from "./NestedTableItem";
import DragDropComponent from "../dragDrop/DragDropComponent";

const NestedTable = ({ id, urls, open, onDeleteNestedImage, onDragAndDrop }) => {
    return (
        <Grid container style={{ background: "#335068" }}>
            {
                open && (
                    <DragDropComponent
                        items={urls.map(url => ({ id: url, url }))}
                        renderItem={({ url }) => (
                            <NestedTableItem
                                key={url}
                                url={url}
                                onDeleteNestedImage={() => onDeleteNestedImage(id, url)}
                            />
                        )}
                        onDragAndDrop={(e) => onDragAndDrop(e.map(item => item.url), id)}
                    />

                )
            }
        </Grid>
    );
};

NestedTable.propTypes = {
    id: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    open: PropTypes.bool.isRequired,
    onDeleteNestedImage: PropTypes.func.isRequired,
    onDragAndDrop: PropTypes.func.isRequired
};

export default NestedTable;

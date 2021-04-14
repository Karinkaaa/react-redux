import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import NestedTableItem from "./NestedTableItem";

const NestedTable = ({ id, urls, open, onDeleteNestedImage }) => (
    <Grid container style={{ background: "#335068" }}>
        {
            open && (
                urls.map((url) => (
                    <NestedTableItem
                        key={url}
                        url={url}
                        onDeleteNestedImage={() => onDeleteNestedImage(id, url)}
                    />
                ))
            )
        }
    </Grid>
);

NestedTable.propTypes = {
    id: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    open: PropTypes.bool.isRequired,
    onDeleteNestedImage: PropTypes.func.isRequired
};

export default NestedTable;

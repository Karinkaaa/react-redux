import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import NestedTableItem from "./NestedTableItem";

const NestedTable = ({ urls, open }) => (
    <Grid container style={{ background: "#335068" }}>
        {
            open && (
                urls.map((url) => (
                    <NestedTableItem
                        key={url}
                        url={url}
                    />
                ))
            )
        }
    </Grid>
);

NestedTable.propTypes = {
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    open: PropTypes.bool.isRequired
};

export default NestedTable;

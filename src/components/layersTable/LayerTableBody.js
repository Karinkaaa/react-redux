import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import LayerTableRow from "./LayerTableRow";

const LayerTableBody = ({ layers, setAnchorEl, onClickPutLayerToForm }) => {
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Grid item xs={12}>
            {
                layers
                    .map(({ id, name }) =>
                        <LayerTableRow
                            key={id}
                            id={id}
                            name={name}
                            handleToggle={handleToggle}
                            onClickPutLayerToForm={onClickPutLayerToForm}
                        />
                    )}
        </Grid>
    );
};

LayerTableBody.propTypes = {
    layers: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            elements: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    position: PropTypes.shape({
                        x: PropTypes.number.isRequired,
                        y: PropTypes.number.isRequired
                    }),
                    size: PropTypes.shape({
                        height: PropTypes.number.isRequired,
                        width: PropTypes.number.isRequired
                    }),
                    ref: PropTypes.string,
                    zIndex: PropTypes.number
                }).isRequired
            ).isRequired
        }).isRequired
    ).isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onClickPutLayerToForm: PropTypes.func.isRequired
};

export default LayerTableBody;

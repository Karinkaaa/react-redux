import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import ImageTableRow from "./ImageTableRow";

const ImageTableBody = ({ images, onChangeIsOpen, setAnchorEl, onClickPutResourceToForm }) => {
    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Grid item xs={12}>
            {
                images
                    .map(({ id, name, url }) =>
                        <ImageTableRow
                            key={id}
                            id={id}
                            name={name}
                            url={url}
                            handleOpen={handleOpen}
                            handleToggle={handleToggle}
                            onClickPutResourceToForm={onClickPutResourceToForm}
                        />
                    )}
        </Grid>
    );
};

ImageTableBody.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })
    ).isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onClickPutResourceToForm: PropTypes.func.isRequired
};

export default ImageTableBody;
import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ConfirmMenu from "../confirmMenu";
import ImageCard from "./ImageCard";

const ImageResourceCards = ({ images, onDelete, onPutDataToForm }) => {
    const [anchorEl, setAnchorEl] = React.useState(false);
    const handleClose = () => setAnchorEl(null);

    return (
        <Grid container spacing={5} style={{ marginTop: 50 }}>
            {
                images
                    .map(({ id, name, url }) =>
                        <Grid key={id} item sm={3}>
                            <ImageCard
                                id={id}
                                name={name}
                                url={url}
                                setAnchorEl={setAnchorEl}
                                onPutDataToForm={onPutDataToForm}
                            />
                        </Grid>
                    )
            }
            <ConfirmMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                onAccept={onDelete}
            />
        </Grid>
    );
};

ImageResourceCards.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default ImageResourceCards;
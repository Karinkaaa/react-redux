import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import AnimationTableRow from "./AnimationTableRow";

const AnimationTableBody = ({
                                animations, onChangeIsOpen, setAnchorEl, onDragAndDrop,
                                onClickPutAnimationResourceToForm, onDeleteNestedImage
                            }) => {
    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Grid item xs={12}>
            {
                animations.map(({ id, name, urls }) =>
                    <AnimationTableRow
                        key={id}
                        id={id}
                        name={name}
                        urls={urls}
                        handleOpen={handleOpen}
                        handleToggle={handleToggle}
                        onClickPutAnimationResourceToForm={onClickPutAnimationResourceToForm}
                        onDeleteNestedImage={onDeleteNestedImage}
                        onDragAndDrop={onDragAndDrop}
                    />
                )
            }
        </Grid>
    );
};

AnimationTableBody.propTypes = {
    animations: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            urls: PropTypes.array.isRequired
        })
    ).isRequired,
    onChangeIsOpen: PropTypes.func.isRequired,
    setAnchorEl: PropTypes.func.isRequired,
    onDragAndDrop: PropTypes.func.isRequired,
    onDeleteNestedImage: PropTypes.func.isRequired,
    onClickPutAnimationResourceToForm: PropTypes.func.isRequired
};

export default AnimationTableBody;

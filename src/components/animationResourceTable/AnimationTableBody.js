import React from "react";
import {Grid} from "@material-ui/core";
import AnimationTableRow from "./AnimationTableRow";

const AnimationTableBody = ({
                                animations, onChangeIsOpen, setAnchorEl,
                                onClickPutAnimationResourceToForm, onChangeItemIndexes
                            }) => {

    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Grid item xs={12}>
            {
                animations.map(({id, name, urls}) => {
                        return (
                            <AnimationTableRow
                                key={id}
                                id={id}
                                name={name}
                                urls={urls}
                                handleOpen={handleOpen}
                                handleToggle={handleToggle}
                                onClickPutAnimationResourceToForm={onClickPutAnimationResourceToForm}
                                onChangeItemIndexes={onChangeItemIndexes}
                            />
                        )
                    }
                )
            }
        </Grid>
    )
}

export default AnimationTableBody

import React from "react";
import {Grid} from "@material-ui/core";
import AnimationComponent from "./AnimationComponent";

const AnimationTableBody = ({animations, onChangeIsOpen, setAnchorEl, onClickPutAnimationResourceToForm}) => {

    const handleOpen = () => onChangeIsOpen(true);
    const handleToggle = (e) => setAnchorEl(e.currentTarget);

    return (
        <Grid item xs={12}>
            {
                animations.map(({id, name, urls}) => {
                        return (
                            <AnimationComponent
                                id={id}
                                name={name}
                                urls={urls}
                                handleOpen={handleOpen}
                                handleToggle={handleToggle}
                                onClickPutAnimationResourceToForm={onClickPutAnimationResourceToForm}
                            />
                        )
                    }
                )
            }
        </Grid>
    )
}

export default AnimationTableBody

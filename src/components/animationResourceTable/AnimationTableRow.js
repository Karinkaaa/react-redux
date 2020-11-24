import React, { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { Avatar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { Delete, ExpandLess, ExpandMore, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import NestedTable from "./NestedTable";

const useStyles = makeStyles(theme => ({
    grid: {
        borderBottom: "outset",
        borderBottomWidth: "thin",
        alignItems: "center"
    },
    gridItem: {
        overflow: "overlay",
        textAlign: "left",
        color: theme.palette.primary3Color,
        padding: "20px 25px"
    },
    updateIcon: {
        color: theme.palette.update3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    }
}));

const AnimationTableRow = ({
                               id, name, urls, handleOpen, handleToggle, onDragAndDrop,
                               onClickPutAnimationResourceToForm, onDeleteNestedImage
                           }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);

    return (
        <Grid container className={classes.grid}>
            <Grid container item xs={3} className={classes.gridItem} onClick={handleClick}>
                <Grid item xs={6}>
                    <AvatarGroup max={3}>
                        {
                            urls.map(url =>
                                <Avatar key={url} src={url}/>
                            )
                        }
                    </AvatarGroup>
                </Grid>

                <Grid item xs={1}>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </Grid>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>{id}</Grid>

            <Grid item xs={5} className={classes.gridItem}>{name}</Grid>

            <Grid item xs={1}>
                <IconButton
                    data-id={id}
                    onClick={() => {
                        handleOpen();
                        onClickPutAnimationResourceToForm({ id, name, urls });
                    }}
                >
                    <Update className={classes.updateIcon}/>
                </IconButton>
            </Grid>

            <Grid item xs={1}>
                <IconButton
                    data-id={id}
                    onClick={handleToggle}
                >
                    <Delete className={classes.deleteIcon}/>
                </IconButton>
            </Grid>

            <NestedTable
                id={id}
                urls={urls}
                open={open}
                onDeleteNestedImage={onDeleteNestedImage}
                onDragAndDrop={onDragAndDrop}
            />
        </Grid>
    );
};

AnimationTableRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    urls: PropTypes.array.isRequired,
    handleOpen: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    onDragAndDrop: PropTypes.func.isRequired,
    onDeleteNestedImage: PropTypes.func.isRequired,
    onClickPutAnimationResourceToForm: PropTypes.func.isRequired
};

export default AnimationTableRow;
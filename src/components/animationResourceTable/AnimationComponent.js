import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import {Avatar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {Delete, ExpandLess, ExpandMore, Update} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";
import NestedRows from "./NestedRows";

const useStyles = makeStyles(theme => ({
    grid: {
        borderBottom: "outset",
        borderBottomWidth: "thin",
        alignItems: "center",
    },
    gridItem: {
        padding: "15px 25px",
        overflow: "overlay",
        textAlign: "left",
        color: theme.palette.primary3Color,
    },
    updateIcon: {
        color: theme.palette.update3Color,
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    },
}));

const AnimationComponent = ({id, name, urls, handleOpen, handleToggle, onClickPutAnimationResourceToForm}) => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);

    return (
        <Grid container key={id} className={classes.grid}>
            <Grid container item xs={2} className={classes.gridItem} onClick={handleClick}>
                <Grid item xs={9}>
                    <AvatarGroup max={3}>
                        {
                            urls.map(url =>
                                <Avatar src={url}/>
                            )
                        }
                    </AvatarGroup>
                </Grid>

                <Grid item xs={1}>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </Grid>
            </Grid>

            <Grid item xs={2} className={classes.gridItem}>{id}</Grid>

            <Grid item xs={6} className={classes.gridItem}>{name}</Grid>

            <Grid item xs={1} className={classes.gridItem}>
                <IconButton
                    data-id={id}
                    onClick={() => {
                        handleOpen();
                        onClickPutAnimationResourceToForm({id, name, urls});
                    }}
                >
                    <Update className={classes.updateIcon}/>
                </IconButton>
            </Grid>

            <Grid item xs={1} className={classes.gridItem}>
                <IconButton
                    data-id={id}
                    onClick={handleToggle}
                >
                    <Delete className={classes.deleteIcon}/>
                </IconButton>
            </Grid>

            <NestedRows
                id={id}
                name={name}
                urls={urls}
                open={open}
                handleOpen={handleOpen}
                handleToggle={handleToggle}
                onClickPutAnimationResourceToForm={onClickPutAnimationResourceToForm}
            />
        </Grid>
    )
}

export default AnimationComponent
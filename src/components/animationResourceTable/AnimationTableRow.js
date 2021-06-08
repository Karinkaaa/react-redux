import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Avatar, Grid, IconButton } from "@material-ui/core";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { Delete, ExpandLess, ExpandMore, Update } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import NestedTable from "./NestedTable";
import { ANIMATION_FORM } from "../../utils/links";

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
        color: theme.palette.success3Color
    },
    deleteIcon: {
        color: theme.palette.delete3Color
    }
}));

const AnimationTableRow = ({ id, name, urls, speed, handleToggle, onPutDataToForm }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    return (
        <Grid container className={classes.grid}>
            <Grid container item xs={3} className={classes.gridItem} onClick={() => setOpen(!open)}>
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
            <Grid item xs={3} className={classes.gridItem}>{name}</Grid>
            <Grid item xs={2} className={classes.gridItem}>{speed}</Grid>

            <Grid item xs={1}>
                <Link to={ANIMATION_FORM}>
                    <IconButton
                        data-id={id}
                        onClick={() => onPutDataToForm(id)}
                    >
                        <Update className={classes.updateIcon}/>
                    </IconButton>
                </Link>
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
                urls={urls}
                open={open}
            />
        </Grid>
    );
};

AnimationTableRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    speed: PropTypes.number.isRequired,
    handleToggle: PropTypes.func.isRequired,
    onPutDataToForm: PropTypes.func.isRequired
};

export default AnimationTableRow;
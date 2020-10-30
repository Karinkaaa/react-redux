import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {BurstMode, ExpandLess, ExpandMore, PhotoLibrary, ViewCarousel} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import {useStyles} from "./MenuInLeft";
import {Link} from "react-router-dom";
import {ANIMATIONS, IMAGES, RESOURCES} from "../../links";

export default () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div>
            <Link to={RESOURCES} className={classes.link}>
                <ListItem button key={"Resources"} onClick={handleClick}>
                    <ListItemIcon>
                        <ViewCarousel className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={"Resources"}/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
            </Link>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to={IMAGES} className={classes.link}>
                        <ListItem button key={"Images"} className={classes.nested}>
                            <ListItemIcon>
                                <PhotoLibrary className={classes.nestedIcon}/>
                            </ListItemIcon>
                            <ListItemText primary="Images"/>
                        </ListItem>
                    </Link>

                    <Link to={ANIMATIONS} className={classes.link}>
                        <ListItem button key={"Animations"} className={classes.nested}>
                            <ListItemIcon>
                                <BurstMode className={classes.nestedIcon}/>
                            </ListItemIcon>
                            <ListItemText primary="Animations"/>
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        </div>
    )
}
import React, {useState} from "react";
import {Link} from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NavigationMenu from "./index";

const useStyles = makeStyles((theme) => ({
    icon: {
        color: theme.palette.update3Color,
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary3Color,
    },
    collapseBtn: {
        paddingLeft: 30,
    }
}));


const WrapLink = ({link, children}) => {
    const classes = useStyles();

    return link ?
        <Link to={link} className={classes.link}>
            {children}
        </Link>
        :
        <div>
            {children}
        </div>;
}

export default ({name, Icon, link, children}) => {

    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <WrapLink link={link}>
                <ListItem button key={name} onClick={handleClick}>
                    <ListItemIcon className={classes.icon}>
                        <Icon/>
                    </ListItemIcon>
                    <ListItemText primary={name}/>
                    {
                        children ? (open ? <ExpandLess/> : <ExpandMore/>) : null
                    }
                </ListItem>
            </WrapLink>
            {
                children && (
                    <Collapse
                        in={open}
                        timeout="auto"
                        unmountOnExit
                        className={classes.collapseBtn}
                    >
                        <NavigationMenu items={children}/>
                    </Collapse>
                )
            }
        </>
    )
}

import React, {useState} from "react";
import {Link} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import NavigationMenu, {useStyles} from "./index";

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
                    <ListItemIcon>
                        <Icon className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary={name}/>
                    {children ? (open ? <ExpandLess/> : <ExpandMore/>) : null}
                </ListItem>
            </WrapLink>
            {
                children && (
                    <Collapse
                        in={open}
                        timeout="auto"
                        unmountOnExit
                        style={{paddingLeft: 50}}
                    >
                        <NavigationMenu items={children}/>
                    </Collapse>
                )
            }
        </>
    )
}

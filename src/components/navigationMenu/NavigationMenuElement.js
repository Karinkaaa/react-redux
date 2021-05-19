import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { Collapse, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import makeStyles from "@material-ui/core/styles/makeStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import NavigationMenu from "./index";

const useStyles = makeStyles((theme) => ({
    icon: {
        color: theme.palette.update3Color
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary3Color
    },
    collapseBtn: {
        paddingLeft: 30
    }
}));

const StyledListItem = withStyles({
    root: {
        "&.Mui-selected": {
            background: "linear-gradient(to right, slateblue, cornflowerblue, deepskyblue)"
        }
    }
})(ListItem);

const WrapLink = ({ link, children }) => {
    const classes = useStyles();

    return link ?
        <Link to={link} className={classes.link}>
            {children}
        </Link>
        :
        <div>
            {children}
        </div>;
};

const NavigationMenuElement = withRouter(({ name, Icon, link, children }) => {
        const classes = useStyles();
        const [open, setOpen] = useState(false);

        const handleClick = () => setOpen(!open);

        return (
            <>
                <WrapLink link={link}>
                    <StyledListItem
                        key={name}
                        button
                        onClick={handleClick}
                        selected={window.location.pathname === link}
                    >
                        <ListItemIcon className={classes.icon}>
                            <Icon/>
                        </ListItemIcon>

                        <ListItemText primary={name}/>

                        {children ? (open ? <ExpandLess/> : <ExpandMore/>) : null}
                    </StyledListItem>
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
        );
    }
);

NavigationMenuElement.propTypes = {
    name: PropTypes.string.isRequired,
    Icon: PropTypes.func.isRequired,
    link: PropTypes.string,
    children: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            Icon: PropTypes.func.isRequired,
            link: PropTypes.string
        })
    )
};

export default NavigationMenuElement;
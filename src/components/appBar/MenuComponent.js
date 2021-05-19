import React from "react";
import PropTypes from "prop-types";
import { Drawer, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavigationMenu from "../navigationMenu";
import { MenuElements } from "../navigationMenu/MenuElements";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerContainer: {
        overflow: "auto",
        minHeight: "100%",
        background: "linear-gradient(rgba(0, 40, 68, 0.9), rgba(0, 43, 80, 0.5))",
        color: theme.palette.primary3Color
    }
}));

const MenuComponent = ({ items }) => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant={"permanent"}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerContainer}>
                <Toolbar/>
                <NavigationMenu items={items}/>
            </div>
        </Drawer>
    );
};

MenuComponent.defaultProps = {
    items: MenuElements
};

MenuComponent.propTypes = {
    items: PropTypes.array.isRequired
};

export default MenuComponent;
import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import NavigationMenu, {useStyles} from "../navigationMenu";
import {MenuElements} from "../navigationMenu/MenuElements";

const MenuComponent = ({items}) => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerContainer}>
                <Toolbar/>
                <NavigationMenu items={items}/>
            </div>
        </Drawer>
    )
}

MenuComponent.defaultProps = {
    items: MenuElements
}

export default MenuComponent
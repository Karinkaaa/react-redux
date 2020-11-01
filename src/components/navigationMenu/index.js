import React from "react";
import List from "@material-ui/core/List";
import NavigationMenuElement from "./NavigationMenuElement";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from 'prop-types';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        background: "linear-gradient(rgba(0, 40, 68, 0.9), rgba(0, 43, 80, 0.5))",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: theme.palette.primary1Color,
        color: theme.palette.primary3Color,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
        minHeight: '100%',
        background: "linear-gradient(rgba(0, 40, 68, 0.9), rgba(0, 43, 80, 0.5))",
        color: theme.palette.primary3Color
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(10),
    },
    icon: {
        color: theme.palette.primary2Color
    },
    nestedIcon: {
        color: theme.palette.accent3Color
    },
    nested: {
        paddingLeft: theme.spacing(6),
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary3Color
    },
    homeBtn: {
        marginLeft: -20,
        color: theme.palette.success2Color
    },
    header: {
        paddingLeft: theme.spacing(2),
        color: theme.palette.success3Color,
        fontSize: 20,
        fontWeight: 700,
    },

}));

const NavigationMenu = ({items}) => (
    <List>
        {
            items
                .map(item =>
                    <NavigationMenuElement
                        key={item.name}
                        {...item}
                    />
                )
        }
    </List>
)

NavigationMenu.propTypes = {
    items: PropTypes.array.isRequired
}

export default NavigationMenu
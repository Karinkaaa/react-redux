import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {Error, GroupWork, Info, Visibility} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CollapseButton from "./CollapseButton";
import {Link} from "react-router-dom";
import {DRUMS, INFO, RULES, UI} from "../../links";

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
        minHeight: '93.3vh',
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

export default () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar/>
            <div className={classes.drawerContainer}>
                <List>
                    <CollapseButton/>

                    <Link to={DRUMS} className={classes.link}>
                        <ListItem button key={"Drums"}>
                            <ListItemIcon>
                                <GroupWork className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary="Drums"/>
                        </ListItem>
                    </Link>
                </List>

                <Divider/>

                <List>
                    <Link to={RULES} className={classes.link}>
                        <ListItem button key={"Rules"}>
                            <ListItemIcon>
                                <Error className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary={"Rules"}/>
                        </ListItem>
                    </Link>

                    <Link to={UI} className={classes.link}>
                        <ListItem button key={"UI"}>
                            <ListItemIcon>
                                <Visibility className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary={"UI"}/>
                        </ListItem>
                    </Link>

                    <Link to={INFO} className={classes.link}>
                        <ListItem button key={"Info"}>
                            <ListItemIcon>
                                <Info className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary={"Info"}/>
                        </ListItem>
                    </Link>
                </List>
            </div>
        </Drawer>
    )
}
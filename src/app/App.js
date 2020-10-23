import React from 'react';
import "./App.css";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Images from "../containers/Images";
import Collapse from "@material-ui/core/Collapse";
import {
    BurstMode,
    Error,
    ExpandLess,
    ExpandMore,
    GroupWork,
    Info,
    PhotoLibrary,
    ViewCarousel,
    Visibility
} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        background: "linear-gradient(rgba(0, 40, 68, 0.9), rgba(0, 43, 80, 0.5))",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: theme.palette.primary1Color
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
        padding: theme.spacing(3),
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
}));

function App() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>

            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        STORE
                    </Typography>
                </Toolbar>
            </AppBar>
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
                        <ListItem button key={"Resources"} onClick={handleClick}>
                            <ListItemIcon>
                                <ViewCarousel className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary={"Resources"}/>
                            {open ? <ExpandLess/> : <ExpandMore/>}
                        </ListItem>

                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button key={"Images"} className={classes.nested}>
                                    <ListItemIcon>
                                        <PhotoLibrary className={classes.nestedIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Images"/>
                                </ListItem>

                                <ListItem button key={"Animations"} className={classes.nested}>
                                    <ListItemIcon>
                                        <BurstMode className={classes.nestedIcon}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Animations"/>
                                </ListItem>
                            </List>
                        </Collapse>

                        <ListItem button key={"Drums"}>
                            <ListItemIcon>
                                <GroupWork className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary={"Drums"}/>
                        </ListItem>
                    </List>

                    <Divider/>

                    <List>
                        <ListItem button key={"Rules"}>
                            <ListItemIcon>
                                <Error className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary={"Rules"}/>
                        </ListItem>

                        <ListItem button key={"UI"}>
                            <ListItemIcon>
                                <Visibility className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary={"UI"}/>
                        </ListItem>

                        <ListItem button key={"Info"}>
                            <ListItemIcon>
                                <Info className={classes.icon}/>
                            </ListItemIcon>
                            <ListItemText primary={"Info"}/>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Images/>
            </main>
        </div>
    );
}

export default App;

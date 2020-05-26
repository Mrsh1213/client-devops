import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {Grid} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import {GroupWork, Message} from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import Collapse from "@material-ui/core/Collapse";
import {ExpandLess, ExpandMore} from "@material-ui/icons";

import AvatarStatus from "./parts/AvatarStatus";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.grey['100']}`,
        minHeight:"unset"
        // backgroundColor: '#003d3f',
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        minHeight:"unset"
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        // backgroundColor: '#003d3f',
        // color: "#c1c325"
    },
    drawerIcon: {
        // color: "#c1c325",
        minWidth: 42,
    },
    drawerIconChild: {
        // color: "#c1c325",
        flexDirection: 'row-reverse',
        paddingLeft: 8,
        paddingRight: 8
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    iconButton: {
        padding: 2
    }
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [expandGroup, setExpandGroup] = useState(false);
    const [expandPM, setExpandPM] = useState(false);
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleExpand = (id) => {
        switch (id) {
            case "expandGroup":
                setExpandGroup(v => !v);
                break;
            case "expandPM":
                setExpandPM(v => !v);
                break;

        }
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setExpandGroup(false)
        setExpandPM(false)
    };

    return (
        <>

            <AppBar
                position="fixed" color="default"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Grid container>

                        <Grid md={3} xs={2}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Grid>
                        <Grid md={7} xs={6} />
                        <Grid md={2} xs={4}>
                            <Typography style={{fontSize:"calc(10px + 1vw)"}} dir={"ltr"} variant="h6" noWrap>
                                Mini variant drawer
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx(classes.drawerPaper, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >

                <div className={classes.toolbar}>
                    <div style={{
                        width: "100%", display: "flex",
                        alignItems: "center"
                    }}>
                        <AvatarStatus/>
                        <Typography variant={"caption"} style={{padding: 5}}>سیدمحمدرضاشوبیری</Typography>
                    </div>
                    <IconButton className={classes.iconButton} onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <ListItem button onClick={() => {
                    handleExpand("expandGroup")
                }}>
                    <ListItemIcon className={classes.drawerIcon}>
                        <GroupWork/>
                    </ListItemIcon>
                    <ListItemText primary="گروه ها"/>
                    {expandGroup ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={expandGroup} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemIcon className={classes.drawerIconChild}>
                                #
                            </ListItemIcon>
                            <Typography variant={"body2"}>اقدامات(ACM)</Typography>
                        </ListItem>
                    </List>
                </Collapse>
                <Divider/>
                <ListItem button onClick={() => {
                    handleExpand("expandPM")
                }}>
                    <ListItemIcon className={classes.drawerIcon}>
                        <Message/>
                    </ListItemIcon>
                    <ListItemText primary="پیام خصوصی"/>
                    {expandPM ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse in={expandPM} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            <ListItemIcon className={classes.drawerIconChild}>
                                <AvatarStatus size={27}/>
                            </ListItemIcon>
                            <Typography variant={"body2"}>علیرضا گودرزی</Typography>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.drawerIconChild}>
                                <AvatarStatus size={27}/>
                            </ListItemIcon>
                            <Typography variant={"body2"}>علیرضا گودرزی</Typography>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.drawerIconChild}>
                                <AvatarStatus size={27}/>
                            </ListItemIcon>
                            <Typography variant={"body2"}>علیرضا گودرزی</Typography>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.drawerIconChild}>
                                <AvatarStatus size={27}/>
                            </ListItemIcon>
                            <Typography variant={"body2"}>علیرضا گودرزی</Typography>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon className={classes.drawerIconChild}>
                                <AvatarStatus size={27}/>
                            </ListItemIcon>
                            <Typography variant={"body2"}>علیرضا گودرزی</Typography>
                        </ListItem>
                    </List>
                </Collapse>
                <Divider/>


            </Drawer>
        </>

    );
}
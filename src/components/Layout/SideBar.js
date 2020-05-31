import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import AvatarStatus from "./parts/AvatarStatus";
import {GroupWork,History,Settings,} from "@material-ui/icons";
import Routes from "../../routes";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.down('md')]: {
            height: 100
        },
        [theme.breakpoints.up('md')]: {
            height: 64,
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    topbar: {
        backgroundImage: 'linear-gradient(to left, #0f2027, #203a43, #2c5364)',
        minHeight: "100%",
        color: "#ffffff"
    },
    toolbar: {

        ...theme.mixins.toolbar
    },
    drawerPaper: {
        backgroundImage: 'linear-gradient(to left, #0f2027, #203a43, #2c5364)',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawerIcon: {
        // color: "#c1c325",
        minWidth: 42,
        color: "#ffffff"
    },
}));
const drawerRouter=[
    {text:'مرور فعالیت ها',route:"/",icon:History}  ,
    {text:'یادآوری',route:"/",icon:GroupWork}  ,
    {text:'مدیریت تیم کاری',route:"/",icon:GroupWork}  ,
    {text:'تنظیمات',route:"/",icon:GroupWork}  ,
];
function SideBar(props) {
    const {window} = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {drawerRouter.map((item, index) => (
                    <ListItem key={item.text} button onClick={() => {

                    }}>
                        <ListItemIcon className={classes.drawerIcon}>
                            <item.icon/>
                        </ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}
            </List>
            <Divider style={{backgroundColor:"#fff"}}/>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.topbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon style={{fontSize: "3.1875rem"}}/>
                    </IconButton>
                    <Grid alignItems={"center"} style={{textAlign: "center"}} container>
                        <Grid xs={9} md={10} item>
                            10
                        </Grid>
                        <Grid xs={1} md={1} item>
                            1
                        </Grid>
                        <Grid xs={2} md={1} item>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                            >
                                <AvatarStatus size={"3rem"}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden mdUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'left' : 'right'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Routes/>
            </main>
        </div>
    );
}

SideBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SideBar;
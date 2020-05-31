import React, {Component} from 'react';
import withStyles from '@material-ui/styles/withStyles';
import {withRouter, Link, BrowserRouter as Router} from 'react-router-dom'
import Main from "./Main";
import SideBar from "./Layout/SideBar";

class Dashboard extends Component {


    render() {

        return (
            <Router basename={"/dashboard"}>
                <SideBar/>
            </Router>
        )
    }
}

export default withRouter(Dashboard);

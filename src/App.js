import React, {Component} from 'react';
import './App.css';
import Routes from './routes'
import Topbar from "./components/Topbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ScrollToTop from "./components/ScrollTop";


class App extends Component {
    render() {
        return (
            <>
              <Router>
                <Switch>
                  <Route path='/dashboard' component={Dashboard}/>
                </Switch>
              </Router>
            </>
        );
    }
}

export default App;

import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import Index from './views/Dashboard/Index'
import JiraPage from './views/Dashboard/JiraPage'
import ScrollToTop from './components/ScrollTop'
import CardActions from "@material-ui/core/CardActions";

export default props => (

    <ScrollToTop>
        <Switch>
            <Route path='/workspace' >workspace
                <Link to={"/workspace"}>workspace</Link>
                <Link to={"/JiraPage"}>JiraPage</Link>
            </Route>
            <Route path='/JiraPage' component={JiraPage}/>
            <Route path='/b' >a</Route>
            <Route path='/' component={Index}/>
        </Switch>
    </ScrollToTop>
)
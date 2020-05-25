import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ScrollToTop from './components/ScrollTop'

export default props => (

    <ScrollToTop>
        <Switch>
            <Route path='/workspace' >workspace</Route>
            <Route path='/' component={() => <a>dashboard</a>}/>
        </Switch>
    </ScrollToTop>
)
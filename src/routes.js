import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Index from './views/Dashboard/Index'
import ScrollToTop from './components/ScrollTop'

export default props => (

    <ScrollToTop>
        <Switch>
            <Route path='/workspace' >workspace</Route>
            <Route path='/' component={Index}/>
        </Switch>
    </ScrollToTop>
)
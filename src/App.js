import React, {Component, useEffect} from 'react';
import './App.css';
import Routes from './routes'
import Topbar from "./components/Topbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import {setReqJira} from "./redux/actions/jiraAction";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {connect} from "react-redux";


const ENDPOINT = "http://172.25.113.143:8282/ws-publisher";
function App(props) {
    const {setReqJira}=props;
    useEffect(() => {
        var sock = new SockJS(ENDPOINT);
        let stompClient = Stomp.over(sock);

        stompClient.connect({}, function (frame) {
            // console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/jira', function (message) {
                // setResponse(greeting)
                setReqJira(message)
                //you can execute any function here
            });
        });
    }, []);
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


const mapDispatchToProps = dispatch => ({
    setReqJira: data => dispatch(setReqJira(data))
});
export default connect(null,mapDispatchToProps)(App);

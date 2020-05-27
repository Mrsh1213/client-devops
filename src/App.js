import React, {useContext, useEffect, useRef, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import {setReqJira} from "./redux/actions/jiraAction";
import {SocketContext} from "./config/SocketContext";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import {connect} from "react-redux";
import appReducer from "./redux/reducers/appReducer";
import SockJsClient from "react-stomp";
import {setOnlineSocket} from "./redux/actions/appAction";


function App(props) {
    const {setReqJira} = props;
    const clientRef=useRef({client:{connected:false}});
    // clientRef.current.client.connected=false;
    useEffect(()=>{
        console.log(clientRef.current.client.connected);
        console.log(clientRef.current);
        setOnlineSocket(clientRef.current.client.connected)
    },[clientRef.current.client.connected])
    let stompClient = useContext(SocketContext);
    // const [msg,setMsg]=useState("");
    // useEffect(()=>{
    //     console.log("create Appp");
    //     setTimeout(()=>{
    //     if(stompClient.connected){
    //         stompClient.subscribe('/topic/jira', function (message) {
    //         // setResponse(greeting)
    //         setReqJira(message.body)
    //         //you can execute any function here
    //     }, {id: "App"})}},2000)
    //     return ()=>{
    //         stompClient.unsubscribe("App")
    //     }
    // },[]);
    return (
        <>
            <Router>
                <SockJsClient
                    onDisconnect={()=>{setOnlineSocket(false)}}
                    onConnect={()=>{setOnlineSocket(true)}}


                     url="http://172.25.113.36:8282/ws-publisher/" topics={['/topic/jira']}
                              onMessage={(msg) => {
                                  console.log("msg jira", msg);
                                  setReqJira(msg)
                              }}

                ref={(client) => {
                clientRef.current = client
            }}

                />
                <button style={{padding: "100px"}} onClick={() => {
                    console.log(stompClient.connected);
                    // stompClient.disconnect()
                    // console.log(stompClient);
                }}>disconnect
                </button>
                <button style={{padding: "100px"}} onClick={() => {


                }}>connect
                </button>
                <button style={{padding: "100px"}} onClick={() => {
                    stompClient.subscribe('/topic/jira.acm', function (message) {
                        // setResponse(greeting)
                        console.log("/topic/jira.acm ", message);
                        setReqJira(message)
                        //you can execute any function here
                    });
                }}>/topic/jira.acm
                </button>
                <Switch>

                    <Route path='/dashboard' component={Dashboard}/>
                </Switch>
            </Router>
        </>
    );
}


const mapDispatchToProps = dispatch => ({
    setReqJira: data => dispatch(setReqJira(data)),
    setOnlineSocket: status => dispatch(setOnlineSocket(status))
});
export default connect(null, mapDispatchToProps)(App);

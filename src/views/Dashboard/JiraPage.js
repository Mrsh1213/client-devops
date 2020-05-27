import React, {useEffect,useState, useRef} from 'react';
import SockJsClient from 'react-stomp';
import {Link} from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
//
//
// class JiraPage extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//
//     // sendMessage = (msg) => {
//     //     this.clientRef.sendMessage('/topics/all', msg);
//     // };
//
//     render() {
//         return (
//             <div>
//                 <Link to={"/workspace"}>workspace</Link>
//                 <Link to={"/JiraPage"}>JiraPage</Link>
//                 <SockJsClient url="http://172.25.113.36:8282/ws-publisher/" topics={['/topic/jira']}
//                               onMessage={(msg) => { console.log("msg",msg); }}
//                               ref={ (client) => { this.clientRef = client }} />
//             </div>
//         );
//     }
// }

function JiraPage(props) {
    const [msg,setMsg]=useState("");

    return (
        <div>
            {msg}
            <Link to={"/workspace"}>workspace</Link>
            <Link to={"/"}>dashboard</Link>
            <Link to={"/JiraPage"}>JiraPage</Link>
            <SockJsClient url="http://172.25.113.36:8282/ws-publisher/" topics={['/topic/jira.acm']}
                          onMessage={(msg) => {
                              console.log("msg jira.acm", msg);
                              setMsg(msg)
                          }}




            /> <SockJsClient url="http://172.25.113.36:8282/ws-publisher/" topics={['/topic/jira.grn']}
                          onMessage={(msg) => {
                              console.log("msg jira.acm.grn", msg);
                              setMsg(msg)
                          }}
                          // ref={(client) => {
                          //     this.clientRef = client
                          // }}

            />
        </div>
    );
}

export default JiraPage;

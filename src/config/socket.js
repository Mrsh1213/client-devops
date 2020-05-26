import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
const ENDPOINT = "http://172.25.113.143:8282/ws-publisher";
export async function createStompClient(){
    let sock = new SockJS(ENDPOINT);
    let stompClient = Stomp.over(sock);
    return stompClient;
    // sock.onopen = function() {
    //     console.log('open');
    // };
    // console.log("stompClient: ",stompClient);
    await stompClient.connect({}, function (frame) {
       console.log('Connected: ' + frame);
        // stompClient.subscribe(topic, function (message) {
        //    return {message,stompClient}
        //     // console.log("greeting==>",greeting);
        //     // setResponse(greeting)
        //     //you can execute any function here
        // });
    });
    return stompClient;
}



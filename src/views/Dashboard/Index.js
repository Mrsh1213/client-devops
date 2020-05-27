import React, {useEffect, useState, useRef, useContext} from 'react';
import CardSystem from "../../components/common/CardSystem";
import Grid from "@material-ui/core/Grid";
import {SocketContext} from "../../config/SocketContext";

Index.propTypes = {};


function Index(props) {

    const [response, setResponse] = useState("");
    const stompClient=useContext(SocketContext);


    return (
        <Grid container spacing={6}>
            <Grid xs={6} md={4} lg={3} item>
                <CardSystem/>
            </Grid>
            <Grid xs={6} md={4} lg={3} item>
                <CardSystem/>
            </Grid>
            <Grid xs={6} md={4} lg={3} item>
                <CardSystem/>
            </Grid>
            <Grid xs={6} md={4} lg={3} item>
                <CardSystem/>
            </Grid>
        </Grid>
    );
}

export default Index;
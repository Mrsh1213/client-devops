import React, {useEffect, useState, useRef, useContext} from 'react';
import CardSystem from "../../components/common/CardSystem";
import Grid from "@material-ui/core/Grid";
import {SocketContext} from "../../config/SocketContext";

Index.propTypes = {};


function Index(props) {

    return (
        <Grid style={{textAlign:"center"}} container spacing={1} >
            <Grid  xs={4} md={4} lg={3} item>
                <CardSystem/>
            </Grid>
            <Grid  xs={4} md={4} lg={3} item>
                <CardSystem/>
            </Grid>
            <Grid  xs={4} md={4} lg={3} item>
                <CardSystem/>
            </Grid>
            <Grid  xs={4} md={4} lg={3} item>
                <CardSystem/>
            </Grid>
        </Grid>
    );
}

export default Index;
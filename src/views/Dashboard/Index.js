import React, {useEffect, useState, useRef, useContext} from 'react';
import CardSystem from "../../components/common/CardSystem";
import Grid from "@material-ui/core/Grid";
import {SocketContext} from "../../config/SocketContext";
import Card from "@material-ui/core/Card";
import {Chart} from 'react-charts'

Index.propTypes = {};


function MyChart() {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 2], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )

    const axes = React.useMemo(
        () => [
            {primary: true, type: 'linear', position: 'bottom'},
            {type: 'linear', position: 'left'}
        ],
        []
    )

    return(<div
        style={{
            width: '370px',
            height: '200px'
        }}
    >
        <Chart     data={data} axes={axes}/>
    </div>)

}

function Index(props) {

    return (
        <Card style={{margin: 10, padding: 20}} elevation={4} variant={"elevation"} raised square>
            <Grid style={{textAlign: "center"}} container spacing={1}>
                <Grid xs={12} md={4} lg={3} item>
                    <CardSystem theme={4}/>
                </Grid>
                <Grid xs={12} md={4} lg={3} item>
                    <CardSystem theme={3}/>
                </Grid>
                <Grid xs={12} md={4} lg={3} item>
                    <CardSystem theme={1}/>
                </Grid>
                <Grid xs={12} md={4} lg={3} item>
                    <CardSystem theme={2}/>
                </Grid>
                <Grid xs={12} md={4} lg={3} item>
                    <MyChart/>
                </Grid>
            </Grid>
        </Card>
    );
}

export default Index;
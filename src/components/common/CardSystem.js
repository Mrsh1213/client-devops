import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {Link} from "react-router-dom";
import jiraReducer from "../../redux/reducers/jiraReducer";
import {connect} from "react-redux";
import {SocketContext} from "../../config/SocketContext";
import appReducer from "../../redux/reducers/appReducer";
import JiraPage from "../../views/Dashboard/JiraPage";
import {setOnlineSocket} from "../../redux/actions/appAction";


CardSystem.propTypes = {};

function CardSystem(props) {
    const {jiraData} = props;
    // const stompClient=useContext(SocketContext);
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    image="./jira-baner.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        درخواست جیرا
                    </Typography>
                    {jiraData!==""?jiraData:""}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={()=>{
                    // console.log("stompClient ",stompClient);
                    // stompClient.unsubscribe("App")
                }} size="small" color="primary">
                    بیشتر
                </Button>
                <Link to={"/workspace"}>workspace</Link>
                <Link to={"/JiraPage"}>JiraPage</Link>
            </CardActions>
        </Card>
    );
}
const mapStateToProps = state => ({
    jiraData: state.jiraReducer
})

export default connect(mapStateToProps)(CardSystem);
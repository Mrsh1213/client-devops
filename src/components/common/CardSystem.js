import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import jiraReducer from "../../redux/reducers/jiraReducer";
import {connect} from "react-redux";


CardSystem.propTypes = {};

function CardSystem(props) {
    const {jiraData} = props;
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
                    {jiraData?"ok":""}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    بیشتر
                </Button>
            </CardActions>
        </Card>
    );
}
const mapStateToProps = state => ({
    jiraData: state.jiraReducer
})
export default connect(mapStateToProps)(CardSystem);
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
import {connect} from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import {withStyles} from '@material-ui/core/styles';
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

CardSystem.propTypes = {};
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        width: 40,
        height: 40,
        borderRadius: '50%',
        fontSize: '1rem',
    },
}))(Badge);

function CardSystem(props) {
    const {jiraData} = props;
    return (
        <>
            <IconButton color={"secondary"}
                        style={{width: '8rem', height: '8rem', backgroundImage: "url('./jira-baner.png')",backgroundRepeat: 'no-repeat',backgroundSize: "cover"}}
                        aria-label="cart">
                <StyledBadge style={{width: '80%', height: '80%'}} badgeContent={4} color="error">
                </StyledBadge>
            </IconButton>
<div>درخواست جیرا</div>
        </>
    );
}

const mapStateToProps = state => ({
    jiraData: state.jiraReducer
})

export default connect(mapStateToProps)(CardSystem);
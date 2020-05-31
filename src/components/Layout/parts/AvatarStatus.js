import {Avatar, Badge, withStyles} from "@material-ui/core";
import React, {useState} from "react";
import jpg from "../../../assets/images/1.jpg";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import theme from "../../../config/theme";
import withWidth from "@material-ui/core/withWidth";
import {makeStyles} from "@material-ui/styles";
const StyledBadgeOnline = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.5)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.2)',
            opacity: 0,
        },
    },
}))(Badge);
const StyledBadgeOffline = withStyles((theme) => ({
    badge: {
        backgroundColor: '#b70013',
        color: '#ce0008',
        boxShadow: `0 0 0 0px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.5)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(1.5)',
            opacity: 0,
        },
    },
}))(Badge);
const useStyles = makeStyles((theme) => ({
    avatar: {
        [theme.breakpoints.down('md')]: {
            width:'5rem',
            height:'5rem',
        },[theme.breakpoints.up('md')]: {
            width:'2.5rem',
            height:'2.5rem',
        }
    },
}));
AvatarStatus.propTypes = {
    img:PropTypes.any,
    status:PropTypes.bool,
    size:PropTypes.any
};

 function AvatarStatus(props){
     const classes=useStyles();

     const {size,img,status,width}=props;
    return (

        status ?
            <StyledBadgeOnline
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <Avatar className={classes.avatar} alt="Remy Sharp" src={jpg}/>
            </StyledBadgeOnline>
            : <StyledBadgeOffline
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                {console.log(width)}
                <Avatar className={classes.avatar} alt="Remy Sharp" src={jpg}/>
            </StyledBadgeOffline>
    )
}

export default withWidth()(AvatarStatus);
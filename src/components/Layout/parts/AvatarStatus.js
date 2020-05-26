import {Avatar, Badge, withStyles} from "@material-ui/core";
import React, {useState} from "react";
import jpg from "../../../assets/images/1.jpg";
import PropTypes from 'prop-types';

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

AvatarStatus.propTypes = {
    img:PropTypes.any,
    size:PropTypes.any
};

export default function AvatarStatus(props){
    const {size,img,}=props;
    const [isOnline, setOnline] = useState(false);
    return (
        isOnline ?
            <StyledBadgeOnline
                onClick={() => {
                    setOnline(preV => !preV)
                }}
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <Avatar style={{height:size?size:40,width:size?size:40}} alt="Remy Sharp" src={jpg}/>
            </StyledBadgeOnline>
            : <StyledBadgeOffline
                onClick={() => {
                    setOnline(preV => !preV)
                }}
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
            >
                <Avatar style={{height:size?size:40,width:size?size:40}} alt="Remy Sharp" sizes="" src={img?img:jpg}/>
            </StyledBadgeOffline>
    )
}
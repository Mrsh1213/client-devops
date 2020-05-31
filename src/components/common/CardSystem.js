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
import {Grid, Divider} from "@material-ui/core";
import {withStyles} from '@material-ui/core/styles';
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";

CardSystem.propTypes = {};
const StyledBadge = withStyles((theme) => ({
    badge: {
        right: 55,
        top: 10,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        width: 20,
        height: 20,
        borderRadius: '50%',
        fontSize: '0.8rem',
    },
}))(Badge);

function CardSystem(props) {
    function selectTheme(theme) {
        switch (theme) {
            case 1:
                return {backgroundColor: '#0cbaba', backgroundImage: 'linear-gradient(315deg, #0cbaba 0%, #380036 74%)'}
            case 2:
                return {backgroundColor: '#310e68', backgroundImage: 'linear-gradient(316deg, #310e68 0%, #5f0f40 74%)'}
            case 3:
                return {backgroundColor: '#36096d', backgroundImage: 'linear-gradient(315deg, #36096d 0%, #37d5d6 74%)'}
            case 4:
                return {backgroundColor: '#7f53ac', backgroundImage: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)'}
        }
    }

    const {jiraData, theme} = props;
    return (
        <Card style={{
            padding: 8,
            ...selectTheme(theme)
        }}>
            <Grid container>
                <Grid xs={12} item container spacing={4} alignItems={"flex-start"}>
                    <Grid item xs={3} style={{textAlign: "right"}} >
                        <StyledBadge
                            badgeContent={4} color="error">
                            <Avatar style={{width: '4rem', height: '4rem'}} variant={"circle"}
                                    src={"./jira-baner.png"}/>
                        </StyledBadge>
                    </Grid>
                    <Grid item xs={9}  style={{textAlign: "center"}}>
                        <Typography variant={"h6"}>درخواست جیرا</Typography>
                    </Grid>
                </Grid>
                <Grid xs={12} item>
                    <Divider style={{marginTop: '5px'}} color={"#000"} variant={"fullWidth"}/>
                </Grid>

                <Grid xs={12} item container>
                    <Grid item xs={4}>
                        <Typography variant={"body2"}>درخواست های خوانده نشده</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant={"subtitle2"}>12</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant={"body2"}>درخواست های خوانده شده</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant={"subtitle2"}>54</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant={"body2"}>همه درخواست ها</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant={"subtitle2"}>66</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Button style={{color:"#fff"}} fullWidth size="small" color="secondary">
                            مشاهده
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}

const mapStateToProps = state => ({
    jiraData: state.jiraReducer
})

export default connect(mapStateToProps)(CardSystem);
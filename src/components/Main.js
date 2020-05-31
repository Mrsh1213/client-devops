import React  from 'react';
import {withRouter} from 'react-router-dom';
import Routes from "../routes";
import {connect} from "react-redux";


function Main (props){
 const {open}=props;
    return (
      <div style={{height:'calc(-68px + 100vh)',marginTop: 54,
        marginRight: open?250:57}}>
          <Routes/>
      </div>
    )

}
const mapStateToProps = state => ({
  open: state.appReducer.openDrawer
});
export default connect(mapStateToProps)(withRouter(Main));

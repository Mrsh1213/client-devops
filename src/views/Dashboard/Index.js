import React,{useEffect,useState,useRef} from 'react';
import {} from '../../redux/actions/gitlabAction';
import CardSystem from "../../components/common/CardSystem";
Index.propTypes = {

};


function Index(props) {
    const [response, setResponse] = useState("");


    return (
        <>

            <CardSystem/>

        </>
    );
}

export default Index;
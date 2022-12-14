import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "react-bootstrap/Button";
//import Page2 from "./Page2";
import {Route, useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    
    const Login =()=>{ navigate('/login'); };
    const Register = () =>{ navigate('/register'); };
    return (
        <div>
            <h1> Hello to our life changer app </h1>
            <Button className="btn-primary" variant="primary" onClick={Login}>Login</Button>{' '}
            <Button className="btn-primary" variant="primary" onClick={Register}>Register</Button>{' '}
        </div>
    )
}


export default Main;

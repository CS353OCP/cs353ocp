//goToCreatorPage
//SignupToEvent


import React from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";


const Place = ()=>{
    const location = useLocation();
    const navigate = useNavigate();


    let name = location.state.name;
    let country = location.state.country;
    let province = location.state.province;

    /*
    const paymentScreen = ()=>{
        navigate('/paymentScreen');
    }*/

    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <h1> {name}</h1>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <h3> {province} </h3>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <h4>{country}</h4>
            </div>
        </>

    )
}

export default Place;

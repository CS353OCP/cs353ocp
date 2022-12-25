//goToCreatorPage
//SignupToEvent


import React from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";


const Event = ()=>{
    const location = useLocation();
    const navigate = useNavigate();


    let name = location.state.name;
    let quota = location.state.quota;
    let date = location.state.date;
    let restrictions = location.state.restriction;
    let available = location.state.available;
    let type = location.state.type;

    const paymentScreen = ()=>{
        navigate('/paymentScreen');
    }
    const goToOrganizor = ()=>{
        navigate('/creator')
    }

    return (
     <>
         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
             <h1> {name}</h1>

         </div>

         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
             <h3>Total quota: {quota}</h3>

         </div>
         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
             <p>a {type} event</p>

         </div>
         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
             <p>The event is on: {date}</p>

         </div>
         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
             <p>Fallowing restrictions must be fallowed: {restrictions}</p>

         </div>
         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
             <p>Availability status:  {available} tickets left</p>
         </div>

         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
             <Button onClick = {paymentScreen}><p>Buy Ticket</p></Button>
         </div>
         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
             <Button onClick = {goToOrganizor}><p>See Organizer</p></Button>
         </div>
     </>


    )
}

export default Event;

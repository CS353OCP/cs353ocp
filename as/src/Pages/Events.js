//useEffect get events
//getNearEventsButton
//getEventsThatFriendsWillAttend
//goToEventPage
//KategorizaysonBelki

import React, {useEffect, useState} from "react";
import {getEvents, getNearEvents} from "../api";
import Button from "react-bootstrap/Button";

const Events = ({isLoggedIn})=>{
    const [events, setEvents]=useState(["a","b","c"]);
    const [localOrAll, setLocalOrAll]= useState("Local");

    //burda maple falan daha düzgün almak gerekicek heralde emin deilim
    useEffect(( ) => {
            async function fetchEvents() {
                const res = await getEvents();
                setEvents(res);
            }
            fetchEvents();
        },[]
    )
    const getLocalEvents=async()=>{
        console.log(localOrAll)
        if(localOrAll==="Local") {
            setLocalOrAll("All");
            const res = await getNearEvents();
            setEvents(res);

        }
        else if(localOrAll==="All"){
            const res = await getEvents();
            setEvents(res);
            setLocalOrAll("Local");
        }
    }
    return (
        <>
            <h2>{events}</h2>
            {isLoggedIn?(<Button block size="medium" type="submit" onClick={getLocalEvents}  style={{marginRight:'2rem'}}>
                    {localOrAll + " Events"}
            </Button>):
                <h3>Please Login to see local events</h3>}

        </>
    )
}

export default Events;

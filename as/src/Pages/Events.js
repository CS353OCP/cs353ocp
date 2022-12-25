//useEffect get events
//getNearEventsButton
//getEventsThatFriendsWillAttend
//goToEventPage
//KategorizaysonBelki

import React, {useEffect, useState} from "react";
import {getEvents, getNearEvents} from "../api";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

const Events = (props)=>{
    const [events, setEvents]=useState([{
        available: 0,
        id: 0,
        name: 'ahmet',
        date: 0,
        quota: 0,
        restriction: 0,
        type: "",
    }]);
    const [localOrAll, setLocalOrAll]= useState("Local");

    //burda maple falan daha düzgün almak gerekicek heralde emin deilim
    useEffect(( ) => {
            async function fetchEvents() {
                const res = await getEvents();
                console.log("res is", res);
                console.log(res[1].id);
                //JSON.stringify(res);
                 setEvents(res.map(res1=>({
                     available: res1.available,
                     id: res1.id,
                     name: res1.name,
                     date: res1.date.toString(),
                     quota: res1.quota,
                     restriction: res1.restriction,
                     type: res1.type,

                 })));
            }
            fetchEvents();
        },[]
    )

    const navigate = useNavigate();
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
    const goToEvent=(event)=>{
        //props.setEvent(events[event.currentTarget.id]);
        console.log(events[event.currentTarget.id])
        navigate('/Event', {state: {
            name: events[event.currentTarget.id-1].name,
            date: events[event.currentTarget.id-1].date,
            type: events[event.currentTarget.id-1].type,
            restriction: events[event.currentTarget.id-1].restriction,
            quota: events[event.currentTarget.id-1].quota,
            available: events[event.currentTarget.id-1].available,
        }});
    }
    //let even = events[0].name.bind(events);
    //var name = events[0].name;
    //console.log(name);
    return (
        <>
            <div>
                {events.map((events) =>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Button id = {String(events.id)} onClick = {goToEvent}>

                    <div key={events.id} >
                        <h3>{events.name}</h3>

                        <p>Date: {events.date }</p>
                    </div>

                    </Button>
                    <br/> </div>
                    )
                }

            </div>
            <h2></h2>
            {props.isLoggedIn?(<Button block size="medium" type="submit" onClick={getLocalEvents}  style={{marginRight:'2rem'}}>
                    {localOrAll + " Events"}
            </Button>):
                <h3>Please Login to see local events</h3>}

        </>
    )
}

export default Events;

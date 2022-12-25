import React, {useEffect, useState} from 'react';
import {getPlaces} from "../api";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";

const Places = ()=>{
    const [places, setPlaces] = useState([{
        id: 0,
        name: '',
        country: "",
        province: ''
    }])
    useEffect(( ) => {
            async function fetchPlaces() {
                const res = await getPlaces();
                console.log("res is", res);
                console.log(res[1].id);
                setPlaces(res.map(res1=>({
                    id: res1.id,
                    name: res1.name,
                    country: res1.country,
                    province: res1.province
                })));
            }
            fetchPlaces();
        },[]
    )
    const goToPlace=(event)=>{
        navigate("/Place", {state: {
                name: places[event.currentTarget.id -1].name,
                country: places[event.currentTarget.id -1].country,
                province: places[event.currentTarget.id -1].province,

            }});
    }
    const navigate =useNavigate();

    return (
        <>
            <h1>Places</h1>
            <div>
                {places.map((places)=>
                    <Button id = {String(places.id)} onClick={goToPlace}>
                        <div key = {places.id}>
                            <h3>{places.name}</h3>
                            <h4>{places.country}</h4>
                        </div>
                    </Button>)}
            </div>
        </>
    )
}
export default Places;

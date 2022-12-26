//getPreviousEvents
//getUpcomingAlreadySignedUpEvents
//RateEvents


import React, {useEffect, useState} from "react";
import {getEvents, getUser} from "../api";
var name;
var age;
var email;
var balance;
const Profile = (props)=>{
    const [user, setUser] = useState({
            name: '',
            age: 0,
            email: '',
            balance: 0
        }
    )


    useEffect(()=> {
        async function fetchUser() {
            const res = await getUser(props.id);
            setUser(
                res.name,
                res.age,
                res.email,
                res.balance,
            )
            name = res.name;
            age= res.age;
            email = res.email;
            balance = res.balance;
            console.log(res.name)
        }
        fetchUser();

    });
    return (
        <>
        <h1>{name}</h1>
        <h2>{age}</h2>
    <h2>{email}</h2>
    <h2>Balance: {balance}</h2>
        </>
    )
}
export default Profile;

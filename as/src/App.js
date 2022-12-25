import Component, {useState} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react';

import Main from './Pages/Main';
//import Page1 from './Pages/Page1';
//import Page2 from './Pages/Page2';
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import Places from "./Pages/Places"
import Friends from "./Pages/Friends";
import Friend from "./Pages/Friend";
import Events from "./Pages/Events";
import Event from "./Pages/Event";
import Profile from "./Pages/Profile";
import Creator from "./Pages/Creator"
import PaymentScreen from "./Pages/PaymentScreen";
import Place from "./Pages/Place";


//                <Route path="*" element={< Navigate to="/error" replace />} />
const App =()=> {
    const [isLoggedIn, setLoggedIn ] = useState(false);
    //sonra bu tokeni logine vermek lazım gerisi aynı gibi
    const [token, setToken] = useState();



    const[event, setEvent]=useState([{
        available: 0,
        id: 0,
        name: '',
        date: "0000-00-00",
        quota: 0,
        restriction: 0,
        type: "",
    }]);

    const logIn = ()=>{
        setLoggedIn(true);
    }
    const logOut=()=>{
        setLoggedIn(false);
    }


    return (
      <div>
          <BrowserRouter>
              <Header isLoggedIn ={isLoggedIn} logoutButton={logIn}/>
              <Routes>
                <Route path="/login" element={< Login loginButton={logIn}/>} />
                <Route path="/Home" element = {<Home />} />
                <Route path="/register" element={< Register loginButton={logIn} />} />
                <Route path="/" element={< Main />} />
                <Route path="/Places" element={< Places />} />
                <Route path="/Events" element={< Events isLoggedIn ={isLoggedIn} setEvent={setEvent}/>} />
                <Route path="/Event" element={< Event event/>} />
                <Route path="/Profile" element={< Profile />} />
                <Route path="/Friend" element={< Friend />} />
                <Route path="/Friends" element={< Friends />} />
                <Route path="/Creator" element={< Creator />} />
                <Route path="/PaymentScreen" element={< PaymentScreen />} />
                <Route path="/Place" element={< Place />} />

              </Routes>
          </BrowserRouter>
      </div>
    );

}

export default App;

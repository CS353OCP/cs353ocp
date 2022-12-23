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


//                <Route path="*" element={< Navigate to="/error" replace />} />
const App =()=> {
    const [isLoggedIn, setLoggedIn ] = useState(false);

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
                <Route path="/Events" element={< Events isLoggedIn ={isLoggedIn}/>} />
                <Route path="/Event" element={< Event />} />
                <Route path="/Profile" element={< Profile />} />
                <Route path="/Friend" element={< Friend />} />
                <Route path="/Friends" element={< Friends />} />
                <Route path="/Creator" element={< Creator />} />

              </Routes>
          </BrowserRouter>
      </div>
    );

}

export default App;

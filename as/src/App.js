import Component from "react";
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

//                <Route path="*" element={< Navigate to="/error" replace />} />
const App =()=> {
    return (
      <div>
          <BrowserRouter>
              <Header/>
              <Routes>
                <Route path="/login" element={< Login />} />
                <Route path="/Home" element = {<Home />} />
                <Route path="/register" element={< Register />} />
                <Route path="/" element={< Main />} />
                <Route path="/Places" element={< Places />} />

              </Routes>
          </BrowserRouter>
      </div>
    );

}

export default App;

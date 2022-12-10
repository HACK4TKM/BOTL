import "./App.css";
import Sponsor from "./Sponsor";
import Main from "./Main";
import EventMan from "./EventMan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState,useContext } from "react";
import { FirebaseContext } from "./context/firebaseContext";
import SponDash from "./SponDash";
import SponsorLogin from "./SponsorLogin";
import {doc,getDoc} from 'firebase/firestore';
import SponsorSignup from "./SponsorSignup";

function App() { 
return (
  <div className="App">
    <div className="app-body">
      <BrowserRouter>
      <Routes>
        <Route index element = {<Main />} />
        <Route path="/sponsor/login" element={<SponsorLogin />} />
        <Route path="/sponsor/signup" element={<SponsorSignup />} />
        <Route path="/sponsor">
          <Route index element={<SponDash />} />
        </Route>
        <Route path="/event-manager" >
          <Route index element={<EventMan />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  </div>
);
}

export default App;

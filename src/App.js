import "./App.css";
import Sponsor from "./Sponsor";
import Main from "./Main";
import EventMan from "./EventMan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useContext } from "react";
import { FirebaseContext } from "./context/firebaseContext";
import SponDash from "./SponDash";
import SponsorLogin from "./SponsorLogin";
import { doc, getDoc } from "firebase/firestore";
import SponsorSignup from "./SponsorSignup";
import EvenLogin from "./EvenLogin";
import EventDash from "./EventDash";
import EvenSignup from "./EventSignup";

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <BrowserRouter>
          <Routes>
            <Route index element={<Main />} />
            <Route path="/sponsor/login" element={<SponsorLogin />} />
            <Route path="/sponsor/signup" element={<SponsorSignup />} />
            <Route path="/sponsor">
              <Route index element={<SponDash />} />
            </Route>
            <Route path="/event/login" element={<EvenLogin />} />
            <Route path="/event/signup" element={<EvenSignup />} />
            <Route path="/event">
              <Route index element={<EventDash />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

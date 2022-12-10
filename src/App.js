import "./App.css";
import Sponsor from "./Sponsor";
import Main from "./Main";
import EventMan from "./EventMan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useContext, useState } from "react";
import SponDash from "./SponDash";
import SponsorLogin from "./SponsorLogin";
import Protected from "./helper/Protected";
import { FirebaseContext } from "./context/firebaseContext";
import { isSponsor } from "./services/firebaseServices";
import EventDash from "./EventDash.js";
import EvenLogin from "./EvenLogin.js";

function App() {
  const { auth, db } = useContext(FirebaseContext);
  const user = auth.currentUser;
  return (
    <div className="App">
      <div className="app-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<SponsorLogin />} />
            <Route path="/sign-up" element={<Sponsor />} />
            <Route path="/sponsor">
              <Route index element={<SponsorLogin />} />
              <Route path="dashboard" element={<SponDash />} />
            </Route>
            <Route path="/eventMan">
              <Route index element={<EvenLogin />} />
              <Route path="dashboard" element={<EventDash />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

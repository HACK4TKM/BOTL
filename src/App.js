import "./App.css";
import Sponsor from "./Sponsor";
import Main from "./Main";
import EventMan from "./EventMan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import SponDash from "./SponDash";
import { app, db } from "./lib/firebaseConfig";
import SponsorLogin from "./SponsorLogin";
import { isSponsor } from "./services/firebaseServices";

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <BrowserRouter>
          <Main />
          {{ isSponsor } ? (
            <Routes>
              {/* <Route path="/" element={<Main />} /> */}
              <Route path="/sponsor">
                <Route index element={<SponsorLogin />} />
                <Route path="dashboard" element={<SponDash />} />
              </Route>
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/eventMan" element={<EventMan />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

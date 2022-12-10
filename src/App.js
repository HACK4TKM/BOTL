import "./App.css";
import Sponsor from "./Sponsor";
import Main from "./Main";
import EventMan from "./EventMan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import SponDash from "./SponDash";
import { app, db } from "./lib/firebaseConfig";

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <BrowserRouter>
          {1 == 1 ? (
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/sponsor">
                <Route index element={<Sponsor />} />
                <Route path="dashboard" element={<SponDash />} />
              </Route>
            </Routes>
          ) : (
            <Routes>
              <Route path="/eventMan" element={<EventMan />} />
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

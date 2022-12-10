import "./App.css";
import Sponsor from "./Sponsor";
import Main from "./Main";
import EventMan from "./EventMan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import SponDash from "./SponDash";
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
                <Route index element={<Sponsor />} />
                <Route path="helo" element={<SponDash />} />
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

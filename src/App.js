import "./App.css";
import Sponsor from "./Sponsor";
import Main from "./Main";
import EventMan from "./EventMan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <BrowserRouter>
          <Main />
          <Routes>
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/eventMan" element={<EventMan />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

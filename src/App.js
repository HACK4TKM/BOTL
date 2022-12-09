import "./App.css";
import SponsorLogin from "./SponsorLogin";
import Main from "./Main";
import EventMan from "./EventMan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import React, { useState } from "react";

function App() {
  const [{ sponsor }, setSponsor] = useStateValue();
  const [{ Evenman }, setEvenman] = useStateValue();
  return (
    <div className="App">
      <div className="app-body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/sponsor" element={<SponsorLogin />} />
            <Route path="/eventMan" element={<EventMan />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

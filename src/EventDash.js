import React from "react";
import "./EventDash.css";
import Slider from "./Slider";
import { useState } from "react";
import { FirebaseContext } from "./context/firebaseContext";
import { useContext } from "react";

function EventDash() {
  const { db, auth } = useContext(FirebaseContext);
  const user = auth.currentUser;
  return (
    <div className="EventDash">
      <div className="header">
        <h1>Hestia</h1>
        <input type="text" placeholder="Search.."></input>
      </div>
      <div className="notHeader">
        <div className="sidebar">
          <p>Budget</p>
          <p>Location</p>
          <p>Area of Interest</p>
        </div>
        <div className="events">
          <div className="card">
            <h1 className="eventname">Microsoft</h1>
            <p className="college">Tech</p>
            <p className="ind">On</p>
            <h1 className="ins">20-12-2023</h1>
          </div>
          <div className="card">
            <h1 className="eventname">Nykaa</h1>
            <p className="college">Fashion</p>
            <p className="ind">On</p>
            <h1 className="ins">20-12-2023</h1>
          </div>
          <div className="card">
            <h1 className="eventname">Zerodha</h1>
            <p className="college">Finance</p>
            <p className="ind">On</p>
            <h1 className="ins">20-12-2023</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDash;

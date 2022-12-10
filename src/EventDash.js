import React from "react";
import "./EventDash.css";
import Slider from "./Slider";
import { useState } from "react";
import { FirebaseContext } from "./context/firebaseContext";
import { useContext } from "react";
import Card from "./components/eventCard";

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
          <Card eventname="Microsoft" college="Tech" date="$1k-$5k" />
          <Card eventname="Nykaa" college="Fashion" date="$500-$1k" />
          <Card eventname="Zerodha" college="FinTech" date="$700-$1650" />
        </div>
      </div>
    </div>
  );
}

export default EventDash;

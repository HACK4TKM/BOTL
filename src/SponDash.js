import React from "react";
import "./SponDash.css";
import Slider from "./Slider";
import { useState } from "react";
import { FirebaseContext } from "./context/firebaseContext";
import { useContext } from "react";
import Card from "./components/eventCard";
import { collection, getDocs } from "firebase/firestore";

function SponDash() {
  const [events, setEvents] = useState([]);
  const { db, auth } = useContext(FirebaseContext);
  const user = auth.currentUser;
  return (
    <div className="SponDash">
      <div className="header">
        <h1>{user.displayName}</h1>
        <input type="text" placeholder="Search.."></input>
      </div>
      <div className="notHeader">
        <div className="sidebar">
          <p>Budget</p>
          <p>Location</p>
        </div>
        <div className="events">
          <Card eventname="Hestia" college="TKMCE" date="20-12-2023" />
          <Card eventname="Dhwani" college="CET" date="20-12-2023" />
          <Card eventname="Dhyuthi" college="GECT" date="20-12-2023" />
        </div>
      </div>
    </div>
  );
}

export default SponDash;

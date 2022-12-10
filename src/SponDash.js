import React from "react";
import "./SponDash.css";
import Slider from "./Slider";
import { useState } from "react";
import { FirebaseContext } from "./context/firebaseContext";
import { useContext } from "react";

function SponDash() {
  const { db,auth } = useContext(FirebaseContext);
  const user = auth.currentUser;
  return (
    <div className="SponDash">
      <div className="header">
        <p>{user.displayName}</p>
        <input type="text" placeholder="Search.."></input>
      </div>
      <div className="notHeader">
        <div className="sidebar">
          <p>Budget</p>
          <Slider />
          <p>Location</p>
        </div>
        <div className="events">
          <div className="card">Event 1</div>
        </div>
      </div>
    </div>
  );
}

export default SponDash;

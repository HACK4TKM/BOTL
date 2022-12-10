import React from "react";
import "./SponDash.css";
import Slider from "./Slider";
import { useState } from "react";
import { FirebaseContext } from "./context/firebaseContext";
import { useContext } from "react";

function SponDash() {
  const { db, auth } = useContext(FirebaseContext);
  const user = auth.currentUser;
  return (
    <div className="SponDash">
      <div className="header">
        <p>user.displayName</p>
        <input type="text" placeholder="Search.."></input>
      </div>
      <div className="notHeader">
        <div className="sidebar">
          <p>Budget</p>
          <p>Location</p>
        </div>
        <div className="events">
          <div className="card">
            <h1 className="eventname">Hestia</h1>
            <p className="college">TKMCE</p>
            <p className="ind">On</p>
            <h1 className="ins">20-12-2023</h1>
          </div>
          <div className="card">
            <h1 className="eventname">Dhwani</h1>
            <p className="college">CET</p>
            <p className="ind">On</p>
            <h1 className="ins">20-12-2023</h1>
          </div>
          <div className="card">
            <h1 className="eventname">Dhyuthi</h1>
            <p className="college">GECT</p>
            <p className="ind">On</p>
            <h1 className="ins">20-12-2023</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponDash;

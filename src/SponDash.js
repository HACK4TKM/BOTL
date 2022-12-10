import React from "react";
import "./SponDash.css";
function SponDash() {
  return (
    <div className="SponDash">
      <div className="header">
        <p>Sponsor Name</p>
        <input type="text" placeholder="Search.."></input>
      </div>
      <div className="notHeader">
        <div className="sidebar">
          <p>Budget</p>
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

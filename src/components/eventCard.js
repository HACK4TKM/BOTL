import React from "react";


function Card({eventname, college, date}) {
    return (
      <div className="card">
        <h1 className="eventname">{eventname}</h1>
        <p className="college">{college}</p>
        <p className="ind">On</p>
        <h1 className="ins">{date}</h1>
      </div>
      );   
}

export default Card;
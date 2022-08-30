import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";


const Landing = () => {
  return (
    <div className="card">
      <img src="front.jpeg" alt="random"></img>
      <div className="button">
        <h1>10X Team 04</h1>
        <span>
          <Link to="Post"><button >Enter</button></Link>
        </span>
      </div>
    </div>
  );
};
export default Landing;
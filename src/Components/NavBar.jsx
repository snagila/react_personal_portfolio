import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <div className="header container flex">
        <div className="title_left">
          <div className="name">
            <h1 className="joti-one-regular">Sachin</h1>
            <h2 className="joti-one-regular">Nagila</h2>
          </div>
          <div className="line"></div>
          <h3>Full Stack Developer</h3>
        </div>
        <div className="title_right">
          <ul className="list flex">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Skills">Skills</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

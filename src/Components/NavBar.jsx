import React from "react";

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
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

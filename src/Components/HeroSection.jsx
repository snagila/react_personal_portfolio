import React from "react";
import profile from "../assets/picture.png";

export const HeroSection = () => {
  return (
    <div>
      {/* <!--     HERO SECTION --> */}
      <div className="hero-section container flex">
        <div className="hero-disc flex">
          <p>
            Hi I'm <span> Sachin Nagila</span>
          </p>
          <span>Full Stack Developer</span>
          <p>I love coding and teach others what I know</p>
          <a href="./assets/profie pic.png" download="test image">
            <button>
              Download CV <i className="fa-solid fa-download"></i>
            </button>
          </a>
        </div>
        <div className="image">
          <img src={profile} width="100%" alt="" />
        </div>
      </div>
    </div>
  );
};

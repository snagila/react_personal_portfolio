import React from "react";

export const Banner = () => {
  return (
    <section className="banner container flex">
      <div className="awards flex">
        <div className="logo flex">
          <i className="fa-solid fa-award"></i>
        </div>
        <div className="logo-disc">
          <span>Full Stack Developer</span>
          <p>Bootcamp Certification</p>
        </div>
      </div>
      <div className="awards flex">
        <div className="logo flex">
          <i className="fa-solid fa-award"></i>
        </div>
        <div className="logo-disc">
          <span>5+ Projects</span>
          <p>Completed</p>
        </div>
      </div>
      <div className="awards flex">
        <div className="logo flex">
          <i className="fa-solid fa-award"></i>
        </div>
        <div className="logo-disc">
          <span>1+ year</span>
          <p>Experience</p>
        </div>
      </div>
    </section>
  );
};
